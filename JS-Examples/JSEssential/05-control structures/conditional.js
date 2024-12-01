// if condition in one statement
if (condition)
    statement;

    //if condition more than one/multiple statement
    if (condition) {
        statement1;
        statement2;
    }

    //if else statement
    if (condition) {
        statement1;
    } else {
        statement2;
    }

    //if, else if & else statement
    if (condition1) {
        statement1;
    } else if (condition2) {
        statement2;
    } else {
        statement3;
    }

    /**
     * Example
     */
     if (weight <= 60)
      { 
          category = "light";
     }
      else if (weight > 60 && weight <= 90)
       {
        category = "middle";
    } 
    else {
        category = "heavy";
    }

    //switch statement is similar to if else statement
    switch (expression) {
        case value1:
            statement1;
            [break;]
        case value2:
            statement2;
            [break;]
        default:
            statement3;
    }

    //Example
    switch (option) {
        case 1:
            type = "small";
            break;
        case 2:
            type = "medium";
            break;
        case 3:
            type = "large";
            break;
        default:
            type = "other";
    }