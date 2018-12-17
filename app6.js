//Function Declartions and Expressions
//17-12-2018

    //function Declaration
        function greet(firstName, lastName){
            //console.log('hello');
            return 'hello ' + firstName + ' '+ lastName;
        }

        console.log(greet('john','doe'));

        //2 (es5)
        function greet(firstName, lastName){
            if(typeof firstName === 'undefined'){firstName = 'john'}
            if(typeof lastName === 'undefined'){lastName = 'Doe'}
            //console.log('hello');
            return 'hello ' + firstName + ' '+ lastName;
        }

        console.log(greet('steve','smith'));

        //3 (es6)
        function greet(firstName = 'john', lastName= 'doe'){
            //console.log('hello');
            return 'hello ' + firstName + ' '+ lastName;
        }

        console.log(greet());

    //function Experssion

        const square = function(x = 2){
        return x*x;
        }
        console.log(square(5));

    // Imidately invokable function expressions -IIFEs

        (function(){
        console.log('IIFE ran...');
        })();


        (function(name){
            console.log('Hello ' + name);
        })('brad');

    // Property methods

    const todo = {
        add: function(){
            console.log('Add todo....');
        },
        edit: function(id){
            console.log(`Edit todo ${id}`);
        }
    }

    todo.delete = function(){
        console.log('Delete todo...');
        
    }

    todo.add();
    todo.edit(21);
    todo.delete();
    console.log(todo);
