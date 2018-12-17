//Object Literals
//17-12-2018

const person = {
    firstName: 'Manoj',
    lastName: 'silag',
    age: 22,
    email: 'silagmanoj@yahoo.in',
    hobbies:['coding','Music','sports'],
    address:{
        city: 'Pune',
        State: 'Maharshtra'
    },
    getBirthYear: function(){
        return 2018 - this.age;
    }
}

let val;

val = person;
console.log(val);

//Get specific Value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[0];
val = person.address.State;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 32},
    {name: 'Nancy', age: 31}
];

for(let i = 0 ; i < people.length; i++){
    console.log(people[i].name);
    
}