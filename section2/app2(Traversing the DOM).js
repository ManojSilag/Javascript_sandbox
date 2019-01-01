//Traversing the DOM
// 22-12-2018

        let val;

        const list = document.querySelector('ul.collection');
        const listItem = document.querySelector('li.collection-item:first-child');

        val = listItem;
        val = list;

        //Get child nodes
            val = list.childNodes;     //Return nodelist
            val = list.childNodes[0];
            val = list.childNodes[0].nodeName;
            val = list.childNodes[1].nodeType;

            // 1 - Element
            // 2 - Attribute (deprecated)
            // 3 - Text node
            // 8 - comment
            // 9 - Document itself
            // 10 - Doctype

            //Get children element nodes
            val = list.children;     //Return html collection
            val = list.children[1];
            list.children[1].textContent = 'Hello';

            //Children of children
            list.children[3].children[0].id = 'testlink';
            val = list.children[3].children[0];

            //First child
            val = list.firstChild; // will give first node
            val = list.firstElementChild; // will give first element

            //Last child
            val = list.lastChild; // will give last node
            val = list.lastElementChild; // will give last element

            // Count child elements
            val = list.childElementCount;

            console.log(val);

        //Get parent node
            val = listItem.parentNode;
            val = listItem.parentElement;
            val = listItem.parentElement.parentElement;

            // Get next sibling
            val = listItem.nextSibling; // will give next node
            val = listItem.nextElementSibling.nextElementSibling; // will give next element


            // Get Previous sibling
            val = listItem.previousSibling;
            val = listItem.nextElementSibling.previousElementSibling;

            console.log(val);

//Creating Elements
//22-12-2018

            const li = document.createElement('li');

            //Add class
            li.className = 'collection-item';

            //Add Id
            li.id = 'new-id';

            //Add attribute
            li.setAttribute('title','New Item');

            //Create Text node and append
            li.appendChild(document.createTextNode('Hello wworld'));

            //Append li as child to ul
            document.querySelector('ul.collection').appendChild(li);

            //Create new link element
            const link = document.createElement('a');

            //Add classes
            link.className = 'delete-item secondary-content';

            //Add icon html
            link.innerHTML = '<i class="fa fa-remove"></i>';

            // //Create Text node and append
            // link.appendChild(document.createTextNode('Hed'));

            // //Add link as child to li
            //document.querySelector('#new-id').appendChild(link);
            li.appendChild(link);

            console.log(li);
