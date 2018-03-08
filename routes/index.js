'use strict'

const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', (req, res, next) => {
  let tweets = tweetBank.list();

  res.render('index', {tweets: tweets});
})

router.get('/users/:username', (req, res, next) => {
  let tweetsUsername = tweetBank.find({name: req.params.username});

  res.render('index', {tweets: tweetsUsername})
})

module.exports = router;
