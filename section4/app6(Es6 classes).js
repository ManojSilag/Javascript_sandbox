// ES6 Classes
// 30-12-2018

class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }
    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()- 1970);
    }
    getsMarried(newLastName){
        return this.lastName = newLastName;
    }
    static addNumbers(x, y){
      return x + y;
    }
}

const manoj = new Person('Manoj','Silag', '11-13-1980');

console.log(manoj.lastName);
console.log(manoj.greeting());
console.log(manoj.calculateAge());

manoj.getsMarried('mistry');
console.log(manoj.greeting());

console.log(manoj);

//console.log(manoj.addNumbers(2,1));
console.log(Person.addNumbers(2,1));


