
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
              
            // Date
            const today = new Date();
            console.log(today);
            console.log(typeof today);

//-------------------------------------------//

// Type Conversion

let Val;

//Number to string

        val = 5;
        //output
        console.log(val);
        console.log(typeof val);
        console.log(val.length);

        // To convert use String() function
        val = String(55);
        console.log(val);
        console.log(typeof val);
        console.log(val.length);

        // Expression in string()
        val = String(5+5);
        console.log(val);
        console.log(typeof val);
        console.log(val.length);

// bool to String

        val = true
        console.log(val);
        console.log(typeof val);
        console.log(val.length);

         // To convert use String() function
        val = true
        console.log(val);
        console.log(typeof val);
        console.log(val.length);

// Date to String
        val = String( new Date());
        console.log(val);
        console.log(typeof val);
        console.log(val.length);

// Array to string
        val = String([1,2,3,4,5]);
        console.log(val);
        console.log(typeof val);
        console.log(val.length);

//We can also use tostring() function

            val = [1,2,3,4,5].toString();
            val = new Date().toString();
            val = true.toString(); 
            console.log(val);
            console.log(typeof val);
            console.log(val.length);

//string to number

            val = '5';
            console.log(val);
            console.log(typeof val);
           // console.log(val.toFixed());

            // Use Number Function
            val = Number('5');
            console.log(val);
            console.log(typeof val);
            console.log(val.toFixed());

//boolean to number

            val = Number(true); // 1 for true
            console.log(val);
            console.log(typeof val);
            console.log(val.toFixed());

            val = Number(false); // 0 for false
            console.log(val);
            console.log(typeof val);
            console.log(val.toFixed());

// null to number

            val = Number(null); // 0 for null
            console.log(val);
            console.log(typeof val);
            console.log(val.toFixed());

// string to number

            val = Number('hello') //NaN => Not a Number
            console.log(val);
            console.log(typeof val);
            console.log(val.toFixed());

// array to number

            val = Number([1,2,3])
            console.log(val);
            console.log(typeof val);
            console.log(val.toFixed());

//another method parsInt and parsFloat

            val = parseInt(1000.90);
            val = parseFloat(100.87)
            console.log(val);
            console.log(typeof val);
            console.log(val.toFixed(2));

// type conversion
            const val1 = 5;
            const val2 = 6;
            const sum = val1 + val2;

            console.log(sum);
            console.log(typeof sum);

const val11 = String(5);
const val22 = 6;
const sum1 = val11 + val22;

console.log(sum1);
console.log(typeof sum1);

