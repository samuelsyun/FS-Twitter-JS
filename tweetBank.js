'use strict'

const _ = require('lodash');
const data = [];

const add = (name, text) => {
  data.push({ name: name, text: text, id: data.length });

  return _.clone(data[data.length - 1]);
}

const list = () => _.cloneDeep(data);

const find = properties => _.cloneDeep(_.filter(data, properties));

module.exports = {
  add: add,
  list: list,
  find: find
}

const randomEl = arr => arr[Math.floor(Math.random() * arr.length)];

const getFakeName = () => {
  const fakeFirsts = ['Sam', 'Sangji', 'Leon', 'DJ', 'Suji', 'Gunho', 'Sungho', 'Hana', 'Young', 'Han', 'Choopa', 'Star'];
  const fakeLasts = ['Yun', 'Lee', 'Jung', 'Yoon', 'bucks', 'Rhy', 'Yi', 'Script', 'Mac', 'Jin'];

  return `${randomEl(fakeFirsts)} ${randomEl(fakeLasts)}`;
};

const getFakeTweet = () => {
  const words = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive', 'nice'];

  return `You are ${randomEl(words)}! & I am ${randomEl(words)}!`
};

for (let i = 0; i < 10; i++) {
  module.exports.add(getFakeName(), getFakeTweet());
}
