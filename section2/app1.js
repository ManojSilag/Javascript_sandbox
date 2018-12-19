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
        
        // nodelist to array convert
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

//Dom Selector For Multiple elements
//19-12-2018

        //document.getElementsByClassName

            const items = document.getElementsByClassName('collection-item');
            console.log(items);
            console.log(items[0]);
            items[0].style.color = 'red';
            items[3].textContent = 'Hell0';

            const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

            console.log(listItems);

        //document.getElementByTagName

            const lis = document.getElementsByTagName('li');
            console.log(lis);
            console.log(lis[0]);
            lis[0].style.color = 'pink';
            lis[3].textContent = 'lis helloo';

            //Convert Html collection into Array
            let arrayy = Array.from(lis);
            //console.log(arrayy);
        // arrayy.reverse();
            console.log(arrayy);
            arrayy.forEach(function(li,index){
                console.log(li.className);
                li.textContent = `${index}: Hello`;
            });

        //document.querySelectorAll

            const items1 = document.querySelectorAll('ul.collection li.collection-item');
            console.log(items1);

            items1.forEach(function(item,index){
                item.textContent = `${index}: Hello0`;
            });

            const liOdd = document.querySelectorAll('li:nth-child(odd)');
            const liEven = document.querySelectorAll('li:nth-child(even)');

            liOdd.forEach(function(item){
                item.style.background="Grey";
            });

            liEven.forEach(function(item){
                item.style.background="pink";
            });

            for(let i = 0; i < liEven.length; i++){
                console.log(i);
                console.log(liEven.length);
                liEven[i].style.background="violet";
            }
