import { assert, expect } from 'chai';

import _ from 'lodash';
import normalize from '../src';

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

describe('normalizer test.', () => {
  it('should not mutate original object', () => {
    const item2 = _.cloneDeep(item);
    normalize(item);
    assert(expect(item).to.deep.equal(item2));
  });

  it('replace with null', () => {
    const obj = _.cloneDeep(item);
    const obj2 = _.cloneDeep(item);
    obj2.job.eprop = null;
    obj2.hobbies[2].b = null;
    assert(expect(normalize(obj, { replaceWith: null })).to.deep.equal(obj2));
  });

  it('replace with string, "hello"', () => {
    const obj = _.cloneDeep(item);
    const obj2 = _.cloneDeep(item);
    obj2.job.eprop = 'hello';
    obj2.hobbies[2].b = 'hello';
    assert(expect(normalize(obj, { replaceWith: 'hello' })).to.deep.equal(obj2));
  });

  it('remove props that are empty', () => {
    const obj = _.cloneDeep(item);
    const obj2 = _.cloneDeep(item);
    delete obj2.job.eprop;
    delete obj2.hobbies[2].b;
    assert(expect(normalize(obj)).to.deep.equal(obj2));
  });
});
