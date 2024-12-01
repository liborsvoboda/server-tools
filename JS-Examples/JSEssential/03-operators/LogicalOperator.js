/**
 * Logical operators
 */

// && (Logical AND)
var x = true, y = true, z = false;
x && y // true
x && 5 // true
x && z // false
z && 0 // false
x == true && z == false // true

// || (Logical OR)
var x = true, y = true, z = false;
x || y // true
x || z // true
x == true || z == false // true
z && 0 // false

// ! (Logical NOT)
var x = 2, y = 0;
!x // false
!y // true

