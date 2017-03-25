let mongoose = require('mongoose')
let Schema = mongoose.Schema
let validators = require('mongoose-validators')

let eoSchema = Schema({
  title: {
    type: String,
    required: true,
    unique: [true, 'title is already used']
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true,
    validate: validators.isDate()
  },
  email: {
    type: String,
    required: true,
    validate: validators.isEmail()
  }
}, {
  timestamps: true
})

let eo = mongoose.model('eo', eoSchema)


module.exports = eo
