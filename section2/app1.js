//Examining the document Object
// 19-12-2018

        let val;

        val = document;
        val = document.all;
        val = document.all[2];
        val = document.all.length;
        val = document.head;
        val = document.body;
        val = document.doctype;
        val = document.domain;
        val = document.URL;
        val = document.characterSet;
        val = document.contentType;

        val = document.forms;
        val = document.forms[0].id;
        val = document.forms[0].method;
        val = document.forms[0].action;

        val = document.links;
        val = document.links[0];
        val = document.links[0].className;
        val = document.links[0].classList[0];

        val = document.images;

        val = document.scripts;
        val = document.scripts[2].getAttribute('src')

        let scripts = document.scripts;
        let scriptArray = Array.from(scripts);

        scriptArray.forEach(function(script){
            console.log(script.getAttribute('src'));
        })

        console.log(val);

//DOM seletor for Single Elements
//19-12-2018

        // document.getElementByID()
            console.log(document.getElementById('task-title'));

            // Get things from the element
            console.log(document.getElementById('task-title').id);
            console.log(document.getElementById('task-title').className);

            //change styling
            document.getElementById('task-title').style.background = 'Black';
            document.getElementById('task-title').style.color = 'White';
            document.getElementById('task-title').style.padding = '3px';
            //document.getElementById('task-title').style.display = 'none';

            const taskTitle = document.getElementById('task-title');

            //Change Content
            taskTitle.textContent='Task list';
            taskTitle.innerText= 'My Tasks';
            taskTitle.innerHTML = '<span style="color: red">Task List</span>';

        // document.querySelector()
        console.log(document.querySelector('#task-title'));
        console.log(document.querySelector('.card-title'));
        console.log(document.querySelector('h5'));

        document.querySelector('li').style.color ='red';
        document.querySelector('ul li').style.color ='blue';
        document.querySelector('li:last-child').style.color ='red';
        document.querySelector('li:nth-child(4)').style.color ='yellow';
        document.querySelector('li:nth-child(3)').innerText ='Hello world';
        document.querySelector('li:nth-child(odd)').style.background ='#ccc';
