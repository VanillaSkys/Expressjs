const router = require('express').Router();
const config = require('../configs/app.config');
router.use(`/api/${config.api_version}/admin`, require('./admin.route'));

module.exports = router;