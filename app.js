const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');

const logger = require('./configs/logger.config');
require('./configs/backup.config');

require('./models/admin.model')
require('./models/product.model')

app.use(cors());
app.use(bodyParser.json({limit: "100mb"}));
app.use(bodyParser.urlencoded({
    limit: "100mb",
    extended: true, 
}));
app.use(helmet());
app.use(morgan('dev'));
// app.use(morgan('combined',{stream: logger}));


app.use('/', require('./routes'));
module.exports = app;