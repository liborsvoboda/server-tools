// for documentation
// https://www.promisejs.org

import Promise from 'promise'

export default () => {
  var i = 0
  var timer = setInterval(() => {
    console.log('Hello ' + i++)
  }, 1000);
}
