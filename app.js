'use strict'

const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const path = require('path');
const bodyParser = require('body-parser');
const socketio = require('socket.io');

const app = express();
const makesRouter = require('./routes');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: false });

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));

const server = app.listen(3000, () => {
  console.log('App is running on port 3000!');
});
const io = socketio.listen(server);

app.use(makesRouter(io));
