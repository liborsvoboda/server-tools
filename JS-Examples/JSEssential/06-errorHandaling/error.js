//-- js Error types--//
  //Error,
  //ReferenceError,
  //SyntaxError,
 //RangeError,
 //TypeError,
 //InternalError,
 //EvalError,
 //URIError

 //Example of throw error
 throw new Error("An unexpected error occurred");

 //Example of custome Error exception
 function MyException(message) {
    this.name = 'MyException';
    this.message = message;
}
 
throw new MyException("Not allowed operation");

/**
 * Handling exceptions
 * between
 *  try-catch statement
 */
 try {
    statement; // it can potentially throw an exception
} catch (exc) {
    statement; // exception handling
}

//__The catch block__//
/**
 * The catch block is used to handle exceptions generated in the try block. 
 * The catch keyword is followed by round brackets inside of which the identifier exc is located. 
 * Through this identifier in the catch block you can refer to the exception that was thrown.
 */
try {
    throw new InternalError("Inwalid data");
} catch (exc) {
    alert('An error occured: ' + exc.name + ', details: ' + exc.message); // "An error occured: InternalError, details: Inwalid data"
}

//__Example of try catch block__//
function getDayName(dayNumber) {
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thuesday', 'Friday', 'Saturday', 'Sunday'];
    var key = dayNumber - 1;
    if (!days[key]) {
        throw new Error("Invalid day number");
    }
    return days[key];
}
 
try {
    var dayNumber = 10;
    var dayName = getDayName(dayNumber);
} catch (exc) {
    alert("Something went wrong");
}

//__The finally block__//
/**
 * The finally block is used to execute statements after the try and catch blocks.
 *  Statements in the finally block are executed regardless of whether an exception was thrown in the try block or not.
 *  The finally block is also executed if there is invoked a jump (return, break, continue) in the try block
 */

 try {
    // here may occur an exception
} catch (exc) {
    // here handle the exception if it occurs
} finally {
    // always execute statements here regardless of whether or not an exception occurs
}