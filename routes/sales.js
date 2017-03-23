var express = require('express');
var router = express.Router();
var salesController = require('../controllers/salesController');

// routage GET
router.get('/', salesController.index);

router.get('/stock', salesController.findStock);

router.get('/currency', salesController.findCurrency);

// routage POST
router.post('/sell', salesController.sell);

router.post('/buy', salesController.buy);

module.exports = router;