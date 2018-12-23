//Local and Session storage
//23-12-2018

//set Local storage item
// localStorage.setItem('name','john');
// localStorage.setItem('age','31');

//set SessionStorage item
//sessionStorage.setItem('name','Manoj');

//remove from storage
//localStorage.removeItem('name');

//get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// //clear local storage
// localStorage.clear();
// sessionStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit',function(e){
  
    const task = document.getElementById('task').value;
   
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));
    alert('Task saved');
    console.log(123); 
    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){
    console.log(task);
})