// Subclasses
//31-12-2018

        class Person {
            constructor(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName;
            }
            greeting(){
                return `Hello there ${this.firstName} ${this.lastName}`
            }
        }

        class Customer extends Person {
            constructor(firstName, lastName, phone, membership){
            super(firstName, lastName);
            this.phone = phone;
            this.membership = membership;
            }
            static getMembershipCost(){
                return 500;
            }
        }

        const john = new Customer('john', 'Doe', '555-555-55-555', 'standard');

        console.log(john);
        console.log(john.greeting());
        console.log(Customer.getMembershipCost());
