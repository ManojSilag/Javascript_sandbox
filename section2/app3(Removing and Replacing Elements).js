//Removing and Replacing Elements
//22-12-2018

    //Replace Element

        //Create element
        const newHeading = document.createElement('h3');

        //Add id
        newHeading.id = 'task-title';

        //New text node
        newHeading.appendChild(document.createTextNode('Task list'));

        //Get the old heading
        const oldHeading = document.getElementById('task-title');

        //parent of old heading
        const cardAction = document.querySelector('.card-action');

        //Replace
        cardAction.replaceChild(newHeading, oldHeading);


        console.log(newHeading);

    //Remove element
        const lis = document.querySelectorAll('li');
        const list = document.querySelector('ul');

        //Remove list item
        lis[0].remove();

        //Remove child element
        list.removeChild(lis[3]);

        //Remove Classes and attribute
        //Classes
            const firstLi = document.querySelector('li:first-child');

            const link = firstLi.children[0]
            let val;

            val = link.className;
            val = link.classList;
            val = link.classList[0];

            //link.className = 'test' // It will add only this class and remove others
            link.classList.add('test'); // It will add class with already existing one
            val = link;

            link.classList.remove('test');

            console.log(val);

        //Attributes

            val = link.getAttribute('href');
            val = link.setAttribute('href','http://google.com');
            val = link.setAttribute('title','google')
            val = link.hasAttribute('href');
            link.removeAttribute('title');
            val = link;
            console.log(val);
