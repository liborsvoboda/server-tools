/**
 * destructuring
 */

// Array destructuring
var container = [1, 'two', {x : 3}];
var [a, b, c] = container;
console.log(a); // 1
console.log(b); // two
console.log(c); // Object { x: 3 }

// Object destructing
var obj = {alpha: 100, beta: 'dev'};
var {alpha, beta} = obj;
console.log(alpha); // 100
console.log(beta); // dev

// Alternatively, Array destructuring assignment with separate variable declaration:
var container = [1, 'two', {x : 3}];
var x, y, z;
[x, y, z] = container;
console.log(x); // 1
console.log(y); // two
console.log(z); // Object { n: 3 }

// Alternatively, Object destructing assignment with separate variable declaration:
var obj2 = {delta: 1001, gamma: 'dev1'};
({delta, gamma} = obj2);
console.log(delta); // 1001
console.log(gamma); // dev1