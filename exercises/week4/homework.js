//create a function name myFilter
//that takes an array and filters by conditon
function myFilter(myArray, matches ){
    let newArray = [];
    for(let i=0; i < myArray.length; i++){
        if ( matches(myArray[i]) ){
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}


result = myFilter([6,8,12,10,15,3,19], function(item){ return item <= 10; });
console.log(result);


let names = ["homer", "bart", "marge", "list"]

let filteredNames = myFilter( names, function(item){
    return item.localeCompare("homer") != 0
});
console.log(filteredNames);

let ages = [11,13,30,42]

let evenAges = myFilter(ages, function(item){
    return item % 2 == 0;
});
console.log(evenAges);