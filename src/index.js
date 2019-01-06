/* eslint-disable no-param-reassign */
import _ from 'lodash';

function changeKeys(item, replaceWith) {
  Object.keys(item).forEach((prop) => {
    if (_.isPlainObject(item[prop])) item[prop] = changeKeys(item[prop], replaceWith);
    if (_.isArray(item[prop])) item[prop] = item[prop].map(x => changeKeys(x, replaceWith));

    if (_.isString(item[prop]) && _.isEmpty(item[prop])) {
      if (typeof replaceWith === 'undefined') {
        delete item[prop];
      } else {
        item[prop] = replaceWith;
      }
    }
  });

  return item;
}

const normalize = (item, options = {}) => {
  const { replaceWith } = options;

  const obj = _.cloneDeep(item);

  return changeKeys(obj, replaceWith);
};

export default normalize;

export { normalize };
