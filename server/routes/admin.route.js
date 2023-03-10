const admin = require('express').Router();
const controller = require('../controllers/admin.controller');
const middleware = require('../middleware/admin.middleware');

admin.post('/register', middleware.validateRegister, controller.register)
admin.post('/login', controller.login)
admin.get('/secret', middleware.isLoggedIn, controller.secret)

module.exports = admin;