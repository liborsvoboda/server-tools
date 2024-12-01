//toLowerCase()
var s = 'HTML';
var s2 = s.toLowerCase(); // html

//toUpperCase()
var s = 'json';
var s2 = s.toUpperCase(); // JSON

//trim()
var s = '  lorem ipsum  ';
var s2 = s.trim();
console.log(s2); // 'lorem ipsum'

//split(separator, limit)
var date = '20/01/2017';
var datePieces = date.split('/');
console.log(datePieces); // Array [ "20", "01", "2017" ]
