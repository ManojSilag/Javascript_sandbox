
console.log('hello');
console.log(123);
console.log(true);
console.table([1,2,3,4]);
console.error("this is error");
console.warn('this is warning')
console.time('start');
console.log('hello');
console.timeEnd('start');

//------------------------------------------//

// var , let , const
var name = 'john Doe';
console.log(name);
name = 'steve smith';
console.log(name);

//Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

//letters, numbers, _ , $ 
//can not start with number

//Multi word vars
var firstName= 'john'; //camel case
var first_name= 'sara'; // underscope
var FirstName = 'Tom'; // pascal case

// CONST
//can not reassign
// have to assign a value
//const greeting;

const person = {
    name: 'john',
    age: 30,
}

person.name = 'sara';
person.age = 32;
console.log(person);

//---------------------------------------------//
//   Data Types

// Primitive  Types

//string
const namme = 'john Doe';
console.log(typeof namme);

// Null
const car = null;
console.log(typeof car);

// undefined
let test;
console.log(typeof test);;

//Symbol
const sym = Symbol('aa');
console.log(typeof sym);

// Refrence Types 

//Array
const hobbies = ['movies','music'];
console.log(typeof hobbies);

//object literal
const address = {
    city: 'Boston',
    states: 'MA'
}
console.log(typeof address);

const today = new Date();
console.log(today);
console.log(typeof today);
