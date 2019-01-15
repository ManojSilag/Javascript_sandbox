
//Iterator Example
    // function nameIterator(names){
    //     let nextIndex = 0;

    //     return {
    //         next: function(){
    //             //console.log(names[nextIndex++]);
    //             return nextIndex < names.length ? 
    //             {value: names[nextIndex++], done: false , nextIndex}:
    //             {done: true}
    //         }
    //     }
    // }

    // // create an array of names
    // const namesArr = ['jack','jill','john'];

    // //Init iterator and pass in the names array
    // const names = nameIterator(namesArr);

    // console.log(names.next());
    // console.log(names.next());
    // console.log(names.next());
    // console.log(names.next());

//Generators Example
// function* sayNames(){
//     yield 'jack';
//     yield 'jill';
//     yield 'john';
// }
// const name = sayNames();
// console.log(name.next().value);
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());

 //Id creator 
 function* createIds(){
     let index =0;
     while(true){
         yield index++;
     }
 }

 const gen = createIds();
 console.log(gen.next());
 console.log(gen.next());
 console.log(gen.next());
 console.log(gen.next());
 console.log(gen.next());
 