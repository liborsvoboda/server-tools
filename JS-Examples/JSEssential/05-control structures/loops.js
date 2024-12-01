//while statement
while (expression)
    statement;

//Example of while loop statement
var counter = 0;
while (counter < 5) {
    console.log(counter);
    counter++;
  }

  //do-while statement
  do {
    statement;
} while (expression);

//Example of do while loop statement
var counter = 5;
do{
    console.log(counter);
}
while(counter = 5);

//for loop statement
for (initialExpression; condition; incrementExpression)
    statement;

    //Example of for loop statement
    for(var counter =0; counter<=3; counter++)
    {
        console.log(counter);
    }
    // Output:
       // 0
      // 1
     // 2
    // 3

    //for in loop statement
    for (variable in object)
    statement;

    //Example of for in loop
    var data = {x: 5, y: 'abc', z: true};
for (var result in data) {
    console.log(result + " = " + data[result]);
}
    //output:
       //x = 5
       //y = abc
       //z = true

//for of loop
for (variable of object)
    statement;

    //Example of for of loop
    var elements = ['a', 'b', 5, 6];
for (var element of elements) {
console.log(element);
}
//Output:
//a
//b
//5
//6