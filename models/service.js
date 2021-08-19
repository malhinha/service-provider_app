const { Schema, model } = require('mongoose');

// DEFINE SCHEMA
const serviceSchema = new Schema ({
  title: {type: String, required: true},
  cost: Number
}, {
  timestamps: true
})

module.exports = model('Service', serviceSchema)
