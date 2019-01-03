const http = new EasyHTTP;

// //Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
// .then((results) => console.log(results))
// .catch((error) => console.log(error))

// Create data
const data = {
    name:'Manoj',
    username: 'Johndoe',
    email:'silagmanoj@yah.in'
}

//Create post
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then((results) => console.log(results))
// .catch((error) => console.log(error))

//Create/Update put
// http.put('https://jsonplaceholder.typicode.com/users/1', data)
// .then((results) => console.log(results))
// .catch((error) => console.log(error))

//Delete post
http.delete('https://jsonplaceholder.typicode.com/users/1')
.then((results) => console.log(results))
.catch((error) => console.log(error))