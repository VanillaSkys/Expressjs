const admin = require('express').Router();
const controller = require('../controllers/admin.controller');
admin.get('/', controller.findAllByAdmin);
module.exports = admin;