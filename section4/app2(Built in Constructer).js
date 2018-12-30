//Built in constructer
//30-12-2018

    //String
        const name1= 'jeff';
        const name2 = new String('Jefff');

        //Adding property & value to name2
        //name2.foo = 'boooo';

        console.log(typeof name1);
        console.log(name2);

        if (name2 === 'jeff'){
        console.log('yes');

        }else {
        console.log('No');
        }

    //Number
        const num1 = 5;
        const num2 = new Number(5);
        console.log(num1);
        console.log(num2);

    //Boolean
        const bool1 = true;
        const bool2 = new Boolean(true);
        console.log(bool1);
        console.log(bool2);

    // Function
        const getSum1 = function (x,y){
            return x+y;
        }
        let v = getSum1(2,1);
        console.log(v);

        const getSum2 = new Function('a','b', 'return a+b');
        console.log(getSum2(4,1));

    //Object
        const john1 = { name: 'Manoj'};
        const john2 = new Object({name: 'Manoj'});

        console.log(john1);
        console.log(john2);

    //Arrays
        const arr1 = [1,2,3,4];
        const arr2 = new Array(1,2,3,4);

        console.log(arr1);
        console.log(arr2);

    //Regular Experssions
        const rel1 = /\w+/;
        const rel2 = new RegExp('\\w+');

        console.log(rel2);