// Define UI Vars-----------------------------------------------
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners-------------------------------------------
loadEventListeners();

// Load all event listeners----------------------------------------
function loadEventListeners() {
   
  //DOM Load Event
  document.addEventListener('DOMContentLoaded',getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  //Remove task event
  taskList.addEventListener('click', removeTask);
  //Clear task Event
  clearBtn.addEventListener('click',clearTasks);
  //Filter tasks event
  filter.addEventListener('keyup',filterTasks);
  
}

//1 Get Tasks from  list---------------------------------------------
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(task));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);
  // Append li to ul
  taskList.appendChild(li);
  }
  );
}


//2 Add Task-----------------------------------------------------------------
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  //Sore in local storage
  storeTaskInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}

//2(a) Store Task---------------------------------------------------------------
function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);

  localStorage.setItem('tasks',JSON.stringify(tasks));

  
}

//3 Remove Task-------------------------------------------------------------------------------
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure ?')){
      e.target.parentElement.parentElement.remove();
      //Remove from LocalStorage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
  e.preventDefault();
}

//3(a) Remove from LocalStorage----------------------------------------------------------------
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks',JSON.stringify(tasks));
  
}

//4 Clear Tasks------------------------------------------------------------------
function clearTasks(e){
  //Method 1 :   taskList.innerHTML= '';
  //Method 2 : (faster)
   while(taskList.firstChild){
     taskList.removeChild(taskList.firstChild);
   }
   //Clear from Local storage
   clearTasksFromLocalStorage();
}

//4(a) clear task from local storage---------------------------------------------------------
function clearTasksFromLocalStorage(){
  localStorage.clear();
}
//5 Filter Tasks-------------------------------------------------------------------------
function filterTasks(e){
  const text= e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(
    function(task){
      const item = task.firstChild.textContent;
      if(item.toLocaleLowerCase().indexOf(text) != -1){
       task.style.display = 'block';
      }else{
        task.style.display = 'none';
      }
    }
  );
  console.log(text);
}