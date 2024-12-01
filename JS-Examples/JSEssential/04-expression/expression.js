/**
 * There are three groups of primary expressions: 
 * literal values, variable references, and some keywords.
 */

//Literal values
"text" // a string literal
125 // a number literal

//Variable references
x // evaluates to the value of the variable x
price // evaluates to the value of the variable price
undefined // a global variable undefined evaluates to the value undefined

//Basic keywords and reserved words
true // evaluates to the boolean true
false // evaluates to the boolean false
null //evaluate to the null value.

//Function expression
var sum = function (x, y) {
    return x + y;
}
var z = sum (3, 4); //7

//Object initializer expression
var obj = {
    prop1: "value1",
    prop2: 2
};

//Array initializer expression
var arr = [1, 2, 3];

//Object creation expression
var obj = new Object();

//Property access expression
var obj = {x: 1, y: 2};
obj.x // 1
obj['y'] // 2
var arr = [2, 3];
arr[1] // 3

/**
 * Spread/rest operator 
 * allows an iterable to expand in place
 *  where multiple arguments are expected
 */
 function sum(a, b, c) {
    return a + b + c;
}

var items = [2, 3, 4];
var result = sum(...items); // 9

//Array literal
var motorVehicles = ['car', 'motorcycle', 'truck'];
var railedVehicles = ['train', 'tram'];
var vehicles = ['bicke', ...motorVehicles, 'airplane', 'ship', ...railedVehicles];
console.log(vehicles); // [ "bicke", "car", "motorcycle", "truck", "airplane", "ship", "train", "tram" ]
