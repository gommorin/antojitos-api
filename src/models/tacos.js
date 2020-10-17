const mongoose = require('mongoose')

const tacoSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    minLength: 3
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  isChido: {
    type: Boolean,
    required: false,
    default: true
  }
})

module.exports = mongoose.model('tacos', tacoSchema)
