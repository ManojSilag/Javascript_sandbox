//If Statements and Comparison Operators
// 17-12-2018

        // if(something){
        //  do something
        // }else {
        //     do something else
        // }

        const id = 100;

       //Equal To-----Only Test Value
        if(id == 100){
        console.log('Correct');
        }else{
            console.log('Incorrect');
        }

        //Not Equal To
        if(id != 101){
            console.log('Correct');
        }else{
            console.log('Incorrect');
        }

        //Equal to Value And Type-----Test value and Typeof
        if(id === 100){
            console.log('Correct');
        }else{
            console.log('Incorrect');
        }

        //Not Equal To
        if(id !== 100){
            console.log('Correct');
        }else{
            console.log('Incorrect');
        }

        // Test if undefined
        if(typeof id !== 'undefined'){ // important 
            console.log(`The Id is ${id}`);
        } else{
            console.log(`No ID`);
            
        }

       // Greater or less than
        const id1 =100

        if(id1 >= 100){
            console.log('Correct');
        }else{
            console.log('Incorrect');
        }

        // IF Else

        const color = 'red';

        if(color ==='red'){
            console.log('Color is red');
        } else if(color === 'blue'){
            console.log('color is blue');
        }else{
            console.log('color is not red or blue');
        }

        //Logical Operators

        const name = 'Manoj';
        const age = 22;

        // And &&
        if (age > 0 && age <12){
            console.log(`${name} is a child`);
        } else if (age >= 13 && age <= 19){
            console.log(`${name} is a teenager`);
        } else{
            console.log(`${name} is adult`);
        }

        //OR ||
        if (age < 16 || age > 65){
            console.log(`${name} can not run in race`);
        } else {
            console.log(`${name} is registerd for the race`);
        }

        // TERNARY Operator
        console.log(id1 === 100 ? 'correct' : 'Incorrect');


        //Without Braces
        if(id ==100)
        console.log('correct');
        else
        console.log('incorrect');


//Switches
//17/12/2018

        const color1 = 'blu';

        switch(color1){
        case'red': 
        console.log('color is red');
        break;
        case'blue': 
        console.log('color is blue');
        break;
        default:
        console.log('color is not red or blue');
        break;
        }

        

        let day;
        switch(new Date().getDay()){
         case 0:
         day = "sunday";
         break;
         case 1:
         day = "Monday";
         break;
         case 2:
         day = "Tuesday";
         break;
         case 3:
         day = "Wednesday";
         break;
         case 4:
         day = "Thursday";
         break;
         case 5:
         day = "Friday";
         break;
         case 6:
         day = "saturday";
         break;
        }
        console.log(day);
        