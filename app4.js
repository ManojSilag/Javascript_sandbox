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

//Dates and Time
//17-12-2018

        let val1;

        const today = new Date();
        let birthday = new Date('3-4-1996 11:25:00');
        birthday = new Date('september 10 1981');
        birthday = new Date('9/10/1980');
        val1= birthday;

        val1 = today.getMonth();
        val1 = today.getDate();
        val1 = today.getDay();
        val1 = today.getFullYear();
        val1 = today.getHours();
        val1 = today.getMinutes();
        val1 = today.getSeconds();
        val1 = today.getMilliseconds();

        console.log(val1);

        birthday.setMonth(2);
        birthday.setDate(12);
        birthday.setFullYear(1998);
        birthday.setHours(3);
        birthday.setMinutes(30);
        birthday.setSeconds(25);

        console.log(birthday);

