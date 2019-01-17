//Destructuring
//17-1-2019

//Destructring Assignment
    let a,b;
    [a,b] = [100,200];
    //rest Pattern
    [a, b, c,  ...rest] = [100, 200, 300, 400, 500];
    console.log(rest);

    ({a, b, } = {a: 100, b: 200, c:300, d:400, e:500 });
    ({a, b, ...rest} = {a: 100, b: 200, c:300, d:400, e:500 });
    console.log(rest);

//Array Destructuring
        // const people =['manoj', 'silag', 'john'];
        // const[person1, person2, person3 ] = people;

        // console.log(person1);

    //Parse array returned
        function getPeople(){
        return ['john', 'beth', 'mike']
        }

        let person1 ,person2 , person3;
        [person1, person2, person3] = getPeople();
        console.log(person1, person2, person3);

//Object Destructuring
const person = {
    name: 'John',
    age: 23,
    city: 'Pune',
    gender: 'Male',
    sayHello: function(){
        console.log('hello');
        
    }
}

//old ES
// const name = person.name,
//       age = person.age,
//       city = person.city;
    
//New ES6 Destructuring
const { name, age, city, sayHello} = person;
console.log(name, age , city);
sayHello();