const { Schema, model } = require('mongoose');

// DEFINE SCHEMA
const clientSchema = new Schema ({
  name: {type: String, required: true},
  number: {type: Number, required: true},
  pet: [{type: String}],
  jobs: [{type: Schema.Types.ObjectId, ref: "Job"}]
}, {
  timestamps: true
})

module.exports = model('Client', clientSchema)
