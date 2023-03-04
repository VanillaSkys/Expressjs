const product = require('express').Router();
const controller = require('../controllers/product.controller');
product.get('/', controller.findAllByAdmin);
module.exports = product;