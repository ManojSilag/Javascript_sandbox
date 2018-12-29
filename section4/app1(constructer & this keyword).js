//constructer and this keyword
//29-12-2018

// object literal
// const Manoj = {
//     name: 'Silag',
//     age : 23 ,
// }
// console.log(Manoj);
// console.log(Manoj.age);

// Person Constructer

function Person(name, dob){
    this.name = name;
    //this.age = age;
    this.birthday = new Date (dob);
    this.getAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    console.log(this);
    
}

// const Manoj = new Person('Manoj', 22);
// const John = new Person('john', 32);
// console.log(John.age)



const Manoj = new Person('Manoj', '9-10-1981');
const John = new Person('john', '12-3-1994');
console.log(Manoj.getAge());
