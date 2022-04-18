// AT LEAST ONE GLOBAL VARIABLE
var calcMem = [];
// DISPLAY INSTRUCTIONS IN CONSOLE ON LOAD
console.log("Directions: To use this calculator, choose any number from 1 to 9 for values a and b and pick any operator (+, -, *, and /) to calculate an answer. Numbers may be integers or strings (\"1\"), or a word as a string in any casing (\"oNe\" or \"ONE\", etc.). The operator must be written as a string in any casing using various words to describe the operation (add, subtract, times, divided by), or the base operator itself (+, -, *, /) Ex. calc(1, 1, \"+\"); should output \"The sum of 1 and 1 is 2.\"")
// FUNCTION TAKES 3 ARGUMENTS: 2 NUMBERS, 1 OPERATOR
function calc(a, b, operate) {
    // AT LEAST ONE LOCAL VARIABLE
    var newA;
    var newB;
    // FUNCTION MUST BE ABLE TO TAKE NUMBER, NUMBER AS STRING, WORD IN ANY CASING
    if (isNaN(a)) {
        newA = a.toLowerCase();
    } else {
        newA = a;
    }
    if (isNaN(b)) {
        newB = b.toLowerCase();
    } else {
        newB = b;
    }
    // FUNCTION MUST TAKE NUMBERS 1-9
    switch (newA) {
        case "one":
            newA = "1";
            break;
        case "two":
            newA = "2";
            break;
        case "three":
            newA = "3";
            break;
        case "four":
            newA = "4";
            break;
        case "five":
            newA = "5";
            break;
        case "six":
            newA = "6";
            break;
        case "seven":
            newA = "7";
            break;
        case "eight":
            newA = "8";
            break;
        case "nine":
            newA = "9";
            break;
    }
    switch (newB) {
        case "one":
            newB = "1";
            break;
        case "two":
            newB = "2";
            break;
        case "three":
            newB = "3";
            break;
        case "four":
            newB = "4";
            break;
        case "five":
            newB = "5";
            break;
        case "six":
            newB = "6";
            break;
        case "seven":
            newB = "7";
            break;
        case "eight":
            newB = "8";
            break;
        case "nine":
            newB = "9";
            break;
    }
    var newOperate = operate.toLowerCase();
    switch (operate) {
        case "add":
        case "addition":
        case "sum":
        case "plus":
            newOperate = "+";
            break;
        case "sub":
        case "minus":
        case "subtract":
        case "subtraction":
        case "difference":
            newOperate = "-";
            break;
        case "mult":
        case "times":
        case "multiplied by":
        case "multiply":
        case "multiplication":
        case "product":
            newOperate = "*"
            break;
        case "div":
        case "divide":
        case "divided by":
        case "division":
        case "quotient":
            newOperate = "/";
            break;
    }
    // FUNCTION SHOULD TAKE OPERATIONS OF ADD, SUB, MULT, DIV
    var answer;
    if (newOperate == "+") {
        var sum = parseInt(newA) + parseInt(newB);
        // ANSWERS MUST DISPLAY IN CONSOLE AS COMPLETE SENTENCES
        answer = "The sum of " + newA + " and " + newB + " is " + sum + ".";
    } if (newOperate == "-") {
        var diff = parseInt(newA) - parseInt(newB);
        answer = "The difference of " + newA + " and " + newB + " is " + diff + ".";
    } if (newOperate == "*") {
        var prod = parseInt(newA) * parseInt(newB);
        answer = "The product of " + newA + " and " + newB + " is " + prod + ".";
    } if (newOperate == "/") {
        var div = parseInt(newA) / parseInt(newB);
        answer = "The quotient of " + newA + " and " + newB + " is " + div + ".";
    }
    console.log(answer);
    if (calcMem.length < 5) {
        calcMem.push(answer);
        console.log(calcMem);
    } else {
        calcMem.push(answer);
        calcMem.shift();
        console.log(calcMem);
    }
}



