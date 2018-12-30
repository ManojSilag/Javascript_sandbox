//Prototypes
//30-12-201

    //Object.prototype
    //Person.prototype

    function Person(firstname, lastName, dob){
            this.firstName = firstname;
            this.lastName = lastName;
            this.birthday = new Date (dob);
    //          this.getAge = function(){
    //             const diff = Date.now() - this.birthday.getTime();
    //             const ageDate = new Date(diff);
    //             return Math.abs(ageDate.getUTCFullYear() - 1970);
    //  }
    }

    //Calculate Age
    Person.prototype.getAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    //Get full name
    Person.prototype.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
    //Gets married
    Person.prototype.getMarried = function(newLastName){ 
        return this.lastName = newLastName
    }
    const Am = new Person('joo', 'yoo', '8-12-90');
    const Bm = new Person('Am', 'pm', 'March 20 2016');

    console.log(Bm);
    console.log(Bm.getFullName());
    Bm.getMarried('Smith');
    console.log(Bm.getFullName());
    console.log(Am.getAge());

    console.log(Bm.hasOwnProperty('firstName'));
