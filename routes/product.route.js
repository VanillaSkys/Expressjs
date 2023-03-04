const product = require('express').Router();
const controller = require('../controllers/product.controller');
const middleware = require('../middleware/uploadImage.middleware');

product.get('/', controller.findAllByAdmin);
product.post('/', middleware.single('image') ,controller.createByProduct);
product.put('/', controller.updatePriceByProduct);
product.delete('/', controller.deleteByProduct);

module.exports = product;