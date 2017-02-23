const http = require('http')
const express = require('express')
const path = require('path')
const { productionDb, testDb } = require('./database/connections')()

const API = require('./api/api')

// express
const app = express()

// mongoose
const db = productionDb()
const testDbCleanup = testDb()

API.init(app, db)

app.use(express.static(path.resolve(__dirname, '../build/')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'))
})

// http
const portNum = process.env.PORT
const server = http.createServer(app)

const startServer = (portToUse) => {
  const environment = app.get('env')
  return server.listen(portToUse, () => {
    const { port } = server.address()
    console.log(`Environment ${environment}`)
    console.log(`Server listening on port ${port}`)
  })
}

const stopServer = () => {
  server.close()
  db.close()
  testDbCleanup.close()
  process.exit()
}

// process
process.on('SIGINT', () => {
  console.log('SIGINT')
  stopServer()
})
process.on('exit', () => {
  console.log('Server stopped')
  stopServer()
})
process.on('uncaughtException', () => {
  console.log('Uncaught Exception')
  stopServer()
})
process.on('SIGURS2', () => {
  console.log('Uncaught Exception')
  stopServer()
})

startServer(portNum)
