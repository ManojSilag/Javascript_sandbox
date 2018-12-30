//Prototype inheritance
//30-12-2018

    //Person constructor
        function Person(firstNamee, lastNamee){
        this.firstName = firstNamee;
        this.lastName = lastNamee;
        }

        //Greeting
        Person.prototype.greeting = function(){
            return `Hello there ${this.firstName} ${this.lastName}`
        }
        const person1 = new Person('john','Doe')
        console.log(person1.greeting());

        //Inherit the Person peotoype method
        Customer.prototype = Object.create(Person.prototype);

        //Make customer .prototype return Customer()
        Customer.prototype.constructor = Customer;


    //Customer constructor
        function Customer(firstName, lastName, phone, membership){
            Person.call(this, firstName, lastName);
            this.phone = phone;
            this.membership = membership;
    }

        //Create customer
        const customer1 = new Customer('tom','smith', '555-555-555', 'standard');
        console.log(customer1);

        //Coustomer greeting
        Customer.prototype.greeting = function(){
            return `Hello there ${this.firstName} ${this.lastName} Welcome to our company`
        }
        console.log(customer1.greeting());


