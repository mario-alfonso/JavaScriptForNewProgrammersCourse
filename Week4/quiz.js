// print 0 - 4
function print0To4() {
    for(let i=0; i < 5 ; i++){
            console.log( i );
    }
}
print0To4();

// print full name
function printFullName() {
    let firstName = "Mario";
    let lastName = "Cortez";
    let fullName = firstName + " " + lastName;
    console.log( fullName );
}
printFullName();

// print full name
function printFullNameStringInterpolation() {
    let firstName = "Mario";
    let lastName = "Cortez";
    let fullName = firstName + " " + lastName;
    console.log( `${firstName} ${lastName}` );
}
printFullNameStringInterpolation();