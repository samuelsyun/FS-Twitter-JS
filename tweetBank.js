'use strict'

const _ = require('lodash');
const data = []

const add = (name, content) => data.push({name: name, content: content});
const list = () => _.cloneDeep(data);
const find = prop => _.cloneDeep(_.filter(data, prop));

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
  add(getFakeName(), getFakeTweet());
}
