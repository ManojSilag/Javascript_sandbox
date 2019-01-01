// Arrays and Array Methods
// 16-12-18

//create some arrays
const numbers = [34,22,56,76,43,21];
const numbers2 = new Array(22,65,78,90);
const fruit = ['Apple','Bnana','Mango','Pear'];
const mixed = [22, 'hello', true , undefined, null,{a:1,b:1}, new Date()];

// console.log(numbers);
// console.log(numbers2);
// console.log(fruit);
// console.log(mixed);
// console.table(mixed);

let val;

//Get array lenght
val = numbers.length;

// check if is array
val = Array.isArray(numbers);

//Get single value
val = numbers[3];

// Insert into Array
numbers[2] = 100;

//Find index of value
val = numbers.indexOf(21);

//Mutating arrays

    //Add on to end
    numbers.push(210);

    //Add on to front
    numbers.unshift(120);

    //Take of from end
    numbers.pop();

    //Take of from front 
    numbers.shift();

    // splice values
    numbers.splice(1,2);

    //Reverse Array
    numbers.reverse();

    console.log(numbers);
    console.log(val);

// Concatenate array
val = numbers.concat(numbers2);
console.log(numbers);
console.log(val);

// Sorting array
    val = fruit.sort();
    val = numbers.sort();

    // use compare function
    val = numbers.sort(function(a,b){

        return a - b;
    });

    // // reverse sort
    // val = numbers.sort(function(a,b){
    //     return b-a;
    // });

    console.log(numbers);
    console.log(val);

//Find 

function under50(num){
    return num < 50;
}
val = numbers.find(under50);
console.log(numbers);
console.log(val);
