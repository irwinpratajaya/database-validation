let eo = require('../models/eo')

let evenOrg = {}

evenOrg.createEo = function (req,res) {
  eo.create(req.body).then(function (data) {
    res.json(data)
  }).catch(function (err) {
    res.json(err)
  })
}

evenOrg.getEo = function (req,res) {
  eo.find().then(function (data) {
    res.json(data)
  }).catch(function (err) {
    res.json(err)
  })
}

module.exports = evenOrg
