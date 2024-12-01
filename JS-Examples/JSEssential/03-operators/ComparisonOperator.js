/**
 *  Comparison operators
 */
// == (Equality)
var x = 3;

x == 3; // true

x == "3"; // true, conversion was done

x == 3.1; // false

y = 0;

y == false; // true, conversion was done

// != (Inequality operator)
var x = 4;

x != 4; // false

x != "4"; // false

x != 5; // true

y = 0;

y != false; // false

y != true; // true

// === (Strict equality)
var x = 3;

x === 3; // true

x === "3"; // false

y = 0;

y === false; // false

// !== (Strict inequality operator)
var x = 4;
 
x !== 4 // false
 
x !== '4' // true
 
x !== 5 // true
 
y = 0
 
y !== false // true
 
y !== true // true

// < (Less than)
var x = 5;
x < 6 // true
x < '6' // true
x < 4 // false

// > (Greater than)
var x = 5;
x > 4 // true
x > '4' // true
x > 6 // false

// <= (Less than or equal)
var x = 5;
x <= 6 // true
x <= 5 // true
x <= 4 // false

// <= (Greater than or equal)
var x = 5;
x >= 4 // true
x >= 5 // true
x >= 6 // false
