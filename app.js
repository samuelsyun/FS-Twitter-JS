'use strict'

const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes/index')

const app = express();
const logger = morgan('dev');

app.use(logger);

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: false });

app.use('/', routes);


app.listen(3000, () => {
  console.log('App is running on port 3000!');
})
