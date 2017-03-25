var express = require('express');
var router = express.Router();
var eo = require('../controllers/eo')

/* GET home page. */
router.get('/', eo.getEo)
router.post('/', eo.createEo)

module.exports = router;
