const path = require('path')

module.exports = {
  entry: {
    main: [
      'babel-polyfill',
      './client/index.jsx'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /client/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
      }
    ]
  }
}
