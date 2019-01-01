// Numbers and The Math Objects
// 16-12-2018
    const num1 = 100;
    const num2 = 50;
    let val;

    // simple math with numbers
    val = num1 + num2;
    val = num1 * num2;
    val = num1 - num2;
    val = num1 / num2;
    val = num1 % num2;

    //console.log(val);

    // Math Object
    val = Math.PI;
    val = Math.E;
    val = Math.round(2.8);
    val = Math.ceil(2.4);
    val = Math.floor(2.9);
    val = Math.sqrt(81);
    val = Math.abs(-3);
    val = Math.pow(8,2);
    val = Math.min(2,-1,33,2,-4);
    val = Math.max(2,-1,33,2,-4);
    val = Math.random();
    val = Math.floor(Math.random() * 20 + 1);
    console.log(val);

// String Methods and Concatenation
// 16-12-2018

    const firstName = "William";
    const lastName = "Johnson";
    const age = 28;
    const str = 'Hello there my name is Manoj'
    const tags = 'web design , web development, web creator'

    let val1;

    val1 = firstName + lastName;
    //concatenation
    val1 = firstName + ' ' + lastName;

    //Append 
    val1 = "Manoj";
    val1 += " Silag";

    val1 = " hello, my name is " + firstName + " and I am " + age;

    //Escaping
    val1 = 'That\'s awesome, I can\'t wait';

    //Length
    val1 = firstName.length;

    //concat
    val1 = firstName.concat(' ', lastName);

    //change case
    val1 = firstName.toUpperCase();
    val1 = firstName.toLowerCase();

    //getting word from letter
    val1 = firstName[3];

    // index0f()
    val1 = firstName.indexOf('l');
    val1 = firstName.lastIndexOf('l');

    // charArt()
    val1 = firstName.charAt('2');

    // get last char
    val1 = firstName.charAt(firstName.length-1);

    //subtring()
    val1 = firstName.substr(0,4);

    // slice()
    val1 = firstName.slice(0,4);
    val1 = firstName.slice(-2);

    //split()
    val1 = str.split(' ');
    val1 = tags.split(',');

    //replace()
    val1 = str.replace('Manoj', 'Myaauu');

    //includes()
    val1 =str.includes('Hello');
    val1 =str.includes('fuu');

    console.log(val1);
