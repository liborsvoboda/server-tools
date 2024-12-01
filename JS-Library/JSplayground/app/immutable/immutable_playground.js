// for documentation
// https://facebook.github.io/immutable-js/

import { Map } from 'immutable'

export default () => {
  const map1 = Map({ a: 1, b: 2, c: 3 })
  const map2 = map1.set('b', 50)

  console.log(map1.get('b') + ' vs. ' + map2.get('b'))
}
