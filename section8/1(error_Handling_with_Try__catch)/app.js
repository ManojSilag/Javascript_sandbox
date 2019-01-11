//try and catch block
//11-1-2019

//1
    try{
        //Produce a RefernceError
        //myFunction();

        
        //Produce a TypeError
        //null.myFunction();

         //will produce syntaxError
         //eval("hello world");

         //will produce a URIError
         decodeURIComponent('%');

    } catch(error){
        console.log(error);// => ReferenceError: myFunction is not defined at app.js:4
        //console.log(`${error.name}: ITs null error`);
        // console.log(error.message);// => myFunction is not defined
        // console.log(error.name);// => ReferenceError
        // console.log(error instanceof ReferenceError);// => (weather it is Refernceerror or not ) true
        // console.log(error instanceof TypeError); // => false
    } finally{
        console.log('Finally runs reguardless of result....');
        
    }
    console.log('Program Continues...');

//2
const user = { email: 'silag@gmail.com'}
try{
   if(!user.name){
       //throw 'User has No name';
       throw new SyntaxError('User has no name')
   }

} catch(error){
    console.log(`User error : ${error.message}`);
    
    //console.log(error);// => ReferenceError: myFunction is not defined at app.js:4
    //console.log(`${error.name}: ITs null error`);
    // console.log(error.message);// => myFunction is not defined
    // console.log(error.name);// => ReferenceError
    // console.log(error instanceof ReferenceError);// => (weather it is Refernceerror or not ) true
    // console.log(error instanceof TypeError); // => false
} finally{
    console.log('Finally runs reguardless of result....');
    
}
console.log('Program Continues...');