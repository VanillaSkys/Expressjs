const app = require('./app');
const config = require('./configs/app.config');

app.listen(5000, () => console.log(`http://${config.host}:${config.port}`));