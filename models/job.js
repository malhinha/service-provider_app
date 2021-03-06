const { Schema, model } = require('mongoose');

//DEFINE SCHEMA
const jobSchema = new Schema ({
  service: {type: Schema.Types.ObjectId, ref: 'Service'},
  client: {type: Schema.Types.ObjectId, ref: 'Client'},
  charge: Number
}, {
  timestamps: true
})

module.exports = model('Job', jobSchema)
