/* eslint-disable no-console */

const { normalize } = require('../lib');

const item = {
  firstName: 'Yuri',
  lastName: 'Parsons',
  age: 23,
  hobbies: [
    'eating',
    'drinking',
    {
      a: 'cool thing',
      b: '',
      c: 'you later',
    },
    'sleeping',
  ],
  job: {
    title: 'developer',
    eprop: '',
    rank: 10,
    coworkers: ['Frank', 'Gary', 'Mark'],
  },
};

console.log(normalize(item));

console.log(normalize(item, { replaceWith: 'empty' }));
