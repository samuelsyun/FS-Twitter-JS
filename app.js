'use strict'

const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const app = express();
const logger = morgan('dev');

var locals = {
  title: 'An Example',
  people: [
      { name: 'Gandalf'},
      { name: 'Frodo' },
      { name: 'Hermione'}
  ]
};

app.use(logger);

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: false });

app.use((req, res, next) => {
  console.log('hit the middleware')
  next();
})

app.get('/', (req, res, next) => {
  res.render('index', locals)
})

app.get('/news', (req, res, next) => {
  res.send('You hit the news route.');
})

app.listen(3000, () => {
  console.log('App is running on port 3000!');
})
