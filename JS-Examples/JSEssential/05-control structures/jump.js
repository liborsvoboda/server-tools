//break
var collection = ['x', 'y', 3, 5, 'a'];
var containsNumber = false;
for (i = 0; i < collection.length; i++) {
    if (!isNaN(collection[i])) {
        containsNumber = true;
        console.log('The number found: ' + collection[i]);
        break;
    }
}
// Output:
// The number found: 3

//continue
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

//labeled statement
var i, j;
 
outerLoop:
for (i = 0; i < 3; i++) {
    j = 0;
    while(j < 3) {
        if (i === 1 && j === 1) {
            continue outerLoop;
        }
        console.log('i = ' + i + ', j= ' + j);
        j++;
    }
}
// Output:
// i = 0, j= 0
// i = 0, j= 1
// i = 0, j= 2
// i = 1, j= 0
// i = 2, j= 0
// i = 2, j= 1
// i = 2, j= 2