const { Schema } = require('mongoose')

const DomainSchema = new Schema({
  count: {
    type: Number,
    required: true
  },
  time: {
    type: Date,
    required: true
  }
})

module.exports = DomainSchema
