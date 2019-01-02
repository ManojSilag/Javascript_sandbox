const posts = [
    {title: 'post one', body: 'This is post one'},
    {title: 'post two', body: 'This is post two'},
];

//syncronous way
// function createPost(post){
//    setTimeout(function(){
//        posts.push(post);
//    },2000);
// }

// function getPosts(){
//    setTimeout(function(){
//      let output = '';
//      posts.forEach(function(post){
//          output += `<li>${post.title}</li>`;
//      });
//      document.body.innerHTML = output;
//    }, 1000);
// }
// createPost({title: 'post three', body: 'This is post three'});

// getPosts();

//Asyncronous way
function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    },2000);
 }
 
 function getPosts(){
    setTimeout(function(){
      let output = '';
      posts.forEach(function(post){
          output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
    }, 1000);
 }
 createPost({title: 'post three', body: 'This is post three'},getPosts);