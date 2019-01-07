# Dynamodb object normalizer

[![Build Status](https://travis-ci.com/ninjakttty/dynamodb-object-normalizer.svg?branch=master)](https://travis-ci.org/flexdinesh/npm-module-boilerplate)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Normalize JS objects for dynamodb insertion** ✨

Dynamodb doesn't like empty string, this will recursively drill through all the props with empty strings and remove them by default or replace them with a user defined string

# Usage

```JS

const { normalize } = require('@ninjakttty/dynamodb-object-normalizer');

const item = {
  firstName: 'Yuri',
  lastName: '',
  age: 23,
  job: {
    title: 'developer',
    eprop: '',
    rank: 10,
    coworkers: ['Frank', 'Gary', 'Mark'],
  },
};

console.log(normalize(item));
/*
{ firstName: 'Yuri',
  age: 23,
  job:
   { title: 'developer',
     rank: 10,
     coworkers: [ 'Frank', 'Gary', 'Mark' ] } }
*/

console.log(normalize(item, { replaceWith: 'empty' }));
/*
{ firstName: 'Yuri',
  lastName: 'empty',
  age: 23,
  job:
   { title: 'developer',
     eprop: 'empty',
     rank: 10,
     coworkers: [ 'Frank', 'Gary', 'Mark' ] } }
*/

```

# Installation

```JS
npm i @ninjakttty/dynamodb-object-normalizer
```

# License

MIT © Yuri Parsons
