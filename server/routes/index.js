const router = require('express').Router();
const config = require('../configs/app.config');
router.use(`/api/v${config.api_version}/admin`, require('./admin.route'));
router.use(`/api/v${config.api_version}/product`, require('./product.route'));

module.exports = router;