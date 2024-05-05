const express = require('express');
const winston = require('winston');
const exphbs = require('express-handlebars');
const app = express();

const bodyParser = require('body-parser');


app.use(bodyParser.json());
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')(app);
require('./startup/validation')();
require('./startup/prod')(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));




const port = process.env.PORT || 8000;
const server = app.listen(port, () => winston.info(`Hi i am listing to port ${port}`));
module.exports = server;