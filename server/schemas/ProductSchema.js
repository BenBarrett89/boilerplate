const { Schema } = require('mongoose')

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  brewery: {
    type: String,
    required: true
  },
  abv: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  bbe: {
    type: Date
  },
  stock: {
    type: Number,
    required: true
  }
})

module.exports = ProductSchema
