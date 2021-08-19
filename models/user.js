const { Schema, model } = require('mongoose');

// DEFINE SCHEMA
const userSchema = new Schema ({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
}, {
  timestamps: true
})

module.exports = model('User', userSchema)
