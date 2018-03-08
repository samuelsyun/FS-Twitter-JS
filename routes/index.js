'use strict'

const router = require('express').Router();
const tweetBank = require('../tweetBank');

module.exports = function makeRouterWithSockets(io) {

  const getAllTweets = (req, res, next) => {
    let allTweets = tweetBank.list();
    res.render('index', { tweets: allTweets, showForm: true });
  };

  router.get('/', getAllTweets);

  router.get('/tweets', getAllTweets);

  router.get('/users/:username', (req, res, next) => {
    let tweetsUsername = tweetBank.find({ name: req.params.username });
    res.render('index', { tweets: tweetsUsername, showForm: true, username: req.params.username })
  })

  router.get('/tweets/:tweetid', (req, res, next) => {
    let singleTweet = tweetBank.find({ id: Number(req.params.tweetid) });
    res.render('index', { tweets: singleTweet })
  })

  router.post('/tweets', (req, res, next) => {
    let newTweet = tweetBank.add(req.body.name, req.body.text);
    io.sockets.emit('new_tweet', newTweet);
    res.redirect('/');
  })

  return router;
}
