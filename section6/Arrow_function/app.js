//Arrow function
//3-1-2019
// const sayHello = function(){
//     console.log('Hello');
// }
// sayHello();

//Arrow function
    // const sayHello = () => {
    //     console.log('Hello');
    // }

//One line function does not need braces
    //const sayHello = () => console.log("hellooo");

//One line returns
    // const sayHello = () => 'Hello';

    //same as above
    // const sayHello = function(){
    //     return 'Hello'
    // }

    // console.log(sayHello());

//Return object
    // const sayHello = () => ({msg: 'Hello'});
    // console.log(sayHello());

//Single Param does not need Parenthesis
    // const sayHello = name => console.log(`hello ${name}`);
    // sayHello('Manoj');

// More than One param need Parenthesis
    //const sayHello = (fname,lname) => console.log(`hello ${fname} ${lname}`);
    //sayHello('Manoj','Silag');

//------------------------------------------------------
const users = ['Manoj','John','william'];
//long
// const nameLengths = users.map(function(name){
//     return name.length
// });

//shorter
// const nameLengths = users.map((name) => {
//     return name.length
// });

//shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);
