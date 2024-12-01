// for documentation
// https://lodash.com/docs/4.17.4

import _ from 'lodash'

// lodash is an util library for Javascript, just like Apache Commons
export default () => {
  //_.uniq([1, 1, 2, 3]).forEach(item => console.log(item))

  console.log(`3324`);

  _.forEach(LANGUAGES, function(value, key) {
    console.log(value.name);
  });
}

export const LANGUAGES = [
  { name: 'English', code: 'EN' },
  { name: 'French', code: 'FR' },
  { name: 'Spanish', code: 'ES' }
];
