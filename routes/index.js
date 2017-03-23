var express = require('express');
var router = express.Router();
var defaultController = require('../controllers/defaultController');

/*
 routage : router.METHOD(path, handler)
 path, correspond au noeud final de l'URI
 */

/* GET home page. */
router.get('/', defaultController.index);

module.exports = router;