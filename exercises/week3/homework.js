//complete the work below labeled assignemtn and commit it to your repository
function test(actual, expected, testName){
    if(expected === actual){
        console.log(`TEST ${testName} PASSED`)
    }
    else{
        console.log(`TEST ${testName} Failed`)
        console.log(`   expected '${expected}' but was '${actual}' `)
    }
}


//exercise 1
function isUpper(myChar){
    let result = false;
    let valCharA = 'A'.charCodeAt(0);
    let valCharZ = 'Z'.charCodeAt(0);
    let valCharInput = myChar.charCodeAt(0);

    if ( (valCharInput >=  valCharA) && (valCharInput <= valCharZ) ) {
        result = true;
    }

    return result;
}

test(isUpper('A'), true, "IsUpper 1")
test(isUpper('M'), true, "IsUpper 2")
test(isUpper('Z'), true, "IsUpper 3")
test(isUpper('1'), false, "IsUpper 4")
test(isUpper('a'), false, "IsUpper 5")
test(isUpper('m'), false, "IsUpper 6")
test(isUpper('m'), false, "IsUpper 7")


//exercise 2
function isLower(myChar){
    let result = false;
    let valCharLowerA = 'a'.charCodeAt(0);
    let valCharLowerZ = 'z'.charCodeAt(0);
    let valCharInput = myChar.charCodeAt(0);

    if ( (valCharInput >=  valCharLowerA) && (valCharInput <= valCharLowerZ) ) {
        result = true;
    }

    return result;
}

test(isLower('A'), false, "IsLower 1")
test(isLower('M'), false, "IsLower 2")
test(isLower('Z'), false, "IsLower 3")
test(isLower('1'), false, "IsLower 4")
test(isLower('a'), true, "IsLower 5")
test(isLower('m'), true, "IsLower 6")
test(isLower('z'), true, "IsLower 7")


//exercise 3
//convert the character to lower case
//
function toLowerCase(myChar){
    let newChar = myChar.toLowerCase();

    return newChar;
}

test(toLowerCase('A'), 'a', "toLower 1")
test(toLowerCase('Z'), 'z', "toLower 2")
test(toLowerCase('1'), '1', "toLower 3")
test(toLowerCase('a'), 'a', "toLower 4")
test(toLowerCase('m'), 'm', "toLower 5")
test(toLowerCase('z'), 'z', "toLower 6")

//exercise 4
//print the array using a for loop
function printArray(myArray){
    for(let i=0; i < myArray.length; i++){
        console.log(myArray[i])
    }
}

console.log("**** Printing an array *********")
printArray(['The Matrix', 'King Kong', 'Jumanji', 'Secret Life of Pets'])

//exercise 5
//Print the array as a string
//do not change the array but print it as a string
//do not use any array methods
function printArrayAsString(myArray){

    let myArrayToString = "";
    for(let i=0; i < (myArray.length - 1); i++){
        myArrayToString += myArray[i] + ', '
    }
    myArrayToString += myArray[(myArray.length - 1 )]

    console.log( myArrayToString )
}


console.log("**** Printing an array as string *********")
printArrayAsString(['The Matrix', 'King Kong', 'Jumanji', 'Secret Life of Pets'])

//exercise 6
//assume you have a non-empty array
//of number values
//return but do not print the array
//e.g. [1,2,4,5] returns "1,2,3,4,5"
//do not use any array methods
//
function convertArrayToString(myArray){

    let myArrayToString = "";
    if ( myArray.length > 1 ) {
        for(let i=0; i < (myArray.length - 1); i++){
            myArrayToString += myArray[i] + ','
        }    
    }
    myArrayToString += myArray[(myArray.length - 1 )]

    return myArrayToString;
}

test(convertArrayToString([1,2,3,4,5]), '1,2,3,4,5', "convertArrayToString 1")
test(convertArrayToString([1]), '1', "convertArrayToString 2")


//exercise 7
//return the lastElement in the array
function getLastElement(myArray){
    return myArray[(myArray.length - 1 )]
}
test(getLastElement([1]), 1, "getLastElement 1")
test(getLastElement([1,2,,3]), 3, "getLastElement 2")

//exercise 8
//check if an array contains a value
//return true if found
//return false otherwise
//assume there is not an empty array
//assume the values are all integers
//hit use for loops
function containsValue(myArray, value){
    console.log( value );
    let valueToCompare = NaN;
    if ( Number.isInteger(value)) {
        valueToCompare = value;     
    }
    console.log( valueToCompare );
    let valueFound = false;
    for(let i=0; i < myArray.length ; i++){
        if ( myArray[i] != null) {
            if ( valueToCompare == myArray[i] ) {
                valueFound = true;
            }
        }
    }
    return valueFound;
}
test(containsValue([1,2,3], 1), true, "containsValue 1")
test(containsValue([1,2,,3], 2), true, "containsValue 2")
test(containsValue([1,2,,3], 3), true, "containsValue 3")
test(containsValue([1,2,,3], 4), false, "containsValue 4")
test(containsValue([1,2,,3], '2'), false, "containsValue 5")



//exercise 9
//copy the values from myArray 
//into the target array
//assume the target array has a legnth of
//zero
function copyArray(myArray, targetArray){
    for(let i=0; i < myArray.length ; i++){
        targetArray.push( myArray[i] );
    }
}

let a1 = [1,3,5,8]
let a2 = []
copyArray(a1, a2)
test(a2[0], 1, "copyArray 1")
test(a2[3], 8, "copyArray 2")


//write a loops that prints all
//the numbers from 0 to 1000
//only print the numbers divisible by 30
function printDiv30() {
    for(let i=0; i < 1000 ; i++){
        if ( i % 30 == 0 ) {
            console.log( i );
        }
    }
}
printDiv30();

//write a for loop that prints the following
//shape
//    *
//    * *
//    * * *
//    * * * * 
function printHorGraph( lastElement ) {  
    for(let i= 0; i < lastElement; i++) {
        let asterisk = "";
        for(let j=0+1; j<=i;j++) {
            asterisk += "*";
        }
        console.log(asterisk);
    }    
}
printHorGraph(5);

//write a for loop that prints the following shape
//        *
//       ***
//      *****
//     *******
function printMidGraph( lastElement ) {  
    
    for(let i= 0; i < lastElement; i++) {
        let asterisk = "";
        let doPrint = false;
        let spaces = "";
        for(let j=0+1; j<=i;j++) {
            if ( i % 2 != 0 ) {
                doPrint = true;
                asterisk += "*";
            }  
        }
        if ( doPrint ) {
            console.log(asterisk);
        }        
    }    
}
printMidGraph(9);

//exercise 10
//BONUS points
//write a function name fizzBuzz
//for integers divisible by 3 return "fizz"
//for integers divisible by 5 return "buzz"
//for integers divisible by 3 and 5 and return "fizz buzz"
//only print one of the values based on the conditions
//hint use the mod operator %
//for integers not divisible by either 3 or 5 return empty string
function fizzBuzz(val){
    let returnedValue = "";
    if ( val % 3 == 0 && val % 5 != 0 ) {
        returnedValue += "fizz";
    } else if ( val % 5 == 0 && val % 3 != 0 ) {
        returnedValue += "buzz"; 
    } else if ( val % 3 == 0 && val % 5 == 0 ) {
        returnedValue += "fizz buzz";
    }
    return returnedValue;
}

test(fizzBuzz(3), "fizz", "fizzBuzz 1")
test(fizzBuzz(5), "buzz", "fizzBuzz 2")
test(fizzBuzz(15), "fizz buzz", "fizzBuzz 3")
test(fizzBuzz(2), "", "fizzBuzz 4")






