//Global, Local and Block variables


var osman = "A"; // a global variable

const goni = "B"; // a global variable

function variableTesting() {

    var forhad = "C"; // a local variable

    if (true) {
        var sohel = "X" //block variable
        let rana = "Y"; //block variable

        document.write(rana); // Y
    }

    document.writeln(sohel); // X
    document.writeln(rana); // ReferenceError

    document.write(osman); // A

    document.write(forhad); // C
}
 
document.write(osman); // A
document.write(goni); // B
document.write(forhad); // ReferenceError

// Variable hoisting
var x = 1;
function osman()
{
    alert(x); // displays undefined

    var x = 5; // hosted variable
    
    alert(x); // displays 5
}