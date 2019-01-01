//General Loops
// 18-12-2018

//For loop

    for(let i = 0; i < 10; i++){
    
    if(i === 2){
        console.log('2 is my fvrt number');
        continue;
    }
    if(i === 5){
        console.log('stop the loop');
        break;
    }
    console.log('Number '+ i);
    }

//While loop

    let i = 0;

    while(i < 10){
    console.log('Number'+ i);
    i++;
    }

//Do while

    let j = 110;

    do{
        console.log('Number '+ j);
        j++;
    }

    while(j< 10);

//Loop throw Array
    const cars = ['Ford', 'Chevy', 'Honda','Toyota'];

    for (let i = 0; i < cars.length; i++){
        console.log(cars[i]);
    }

//Foreach loop
    cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array);
    
    });

//Map
    const users = [
        {id: 1 , name:'john'},
        {id: 2 , name:'Sara'},
        {id: 3 , name: 'Karen'},
        {id:4 , name: 'steve'}
    ];

    const ids = users.map(function(user){
    return user.id;
    });
    console.log(ids);


// For in loop
    const users1 = {
        firstName: 'John',
        lastName: 'Doe',
        age:40
    }

    for(let x in users1){
        console.log(`${x}: ${users1[x]}`);
    }