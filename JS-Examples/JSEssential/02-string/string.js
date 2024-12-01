//To concatenate strings use + operator on them
var name = "Graham";
var city = "Dublin";
var text = name + " lives in " + city;
console.log(text); //Graham lives in Dublin

//multiline string
var multiLine = `This is example of
multi-line string.`;
console.log(multiLine); 

//template litarels
var stringLiteral = `template literal`;

//String interpolation
var name = 'Tom';
var prize = 'cinema tickets';
var interpolatedText = `Congratulations ${name}! You won ${prize}.`;
console.log(interpolatedText); // Congratulations Tom! You won cinema tickets.