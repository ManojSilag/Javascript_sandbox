//Maps = key value pairs - can use ANY type as a key or value

const map1 = new Map();

//set Keys
const key1 = 'some string',
      key2 = {},
      key3 = function(){};

//set map values by key
map1.set(key1, 'value of key1');
map1.set(key2, 'value of key2');
map1.set(key3, 'value of key3');

//Get values by key
console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

//count values
console.log(map1.size);

//Iterating Maps

    //Loop using for...of to get key and valus
    for(let[key, value] of map1){
        console.log(`${key} = ${value}`);
    }

    //Iterate keys only
    for(let key  of map1.keys()){
        console.log(key);
    }

    //Iterate keys only
    for(let value  of map1.values()){
        console.log(value);
    }

    //loop with forEach
    map1.forEach(function(value,key){
    console.log(`${key} = ${value}`);
    })

//convert to Arrays
//create an aray of the key values pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

//convert to Arrays
//create an aray of the key vALUES PAIR
const valArr = Array.from(map1.values());
console.log(valArr);

//convert to Arrays
//create an aray of the key vALUES PAIR
const keyArr = Array.from(map1.keys());
console.log(keyArr);