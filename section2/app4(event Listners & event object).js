//Event listners and the event object
//22-12-2018

//Without naming function
    // document.querySelector('.clear-tasks').addEventListener('click',function(e){
    //     console.log('Hello world');
    //     e.preventDefault(); 
    // });

//With named function
    // document.querySelector('.clear-tasks').addEventListener('click',onClick);

    // function onClick(e){
    //     console.log('clicked');
    //     e.preventDefault();  //preventDefault() prevents the default behviour that is in this case when clicked on button prevent it from redirecting
    // };

    document.querySelector('.clear-tasks').addEventListener('click',onClick);

    function onClick(e){
       let val;
       val = e;

       //Event target element
       val = e.target;
       val = e.target.id;
       val = e.target.className;
       val = e.target.classList;

       e.target.innerText = 'Hello';

       //Event type
       val = e.type;

       //Timestamp
       val = e.timeStamp;

       //Coords event relative to the window
       val = e.clientY;
       val = e.clientX;

       //Coords event relative to the element
       val = e.offsetY;
       val = e.offsetX;

      console.log(val);
      e.preventDefault(); 
    };