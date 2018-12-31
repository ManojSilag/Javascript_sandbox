// Book Constructor
    function Book(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

//UI Constructor
    function UI(){}

    // ADD Book to list
    UI.prototype.addBookToList = function(book){
        //console.log(book);
        const list = document.getElementById('book-list');
        //console.log(list);

        //Create tr element
        const row = document.createElement('tr');
        //console.log(row);

        //Insert Col
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">x</a></td>
        `
        list.appendChild(row);
    }

   //Clear Fields
   UI.prototype.clearFields = function(){
       document.getElementById('title').value = '';
       document.getElementById('author').value = '';
       document.getElementById('isbn').value = '';
   }

    // Show Alerts
    UI.prototype.showAlert = function(message, className){
        //Create div
        const div = document.createElement('div');
        //Add classes
        div.className = `alert ${className}`;
        //Add text
        div.appendChild(document.createTextNode(message));

        //Get parent
        const container = document.querySelector('.container');
        //Get form
        const form = document.querySelector('#book-form');
        //console.log(form);
        //Insert alert
        container.insertBefore(div, form);

        //Timeout after 3 sec
        setTimeout(function(){
            document.querySelector('.alert').remove()
        },3000);
    }
    //Delete book
    UI.prototype.deleteBook= function(target){
        console.log(target.className);
        
        if(target.className === 'delete'){
          target.parentElement.parentElement.remove();
        
        // Instantiate UI
        const ui = new UI();
        // show message
        ui.showAlert('book removed', 'success');
        }
    }


//Event Listners for add book
document.getElementById('book-form').addEventListener('submit', function(e){
    // Get form Values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;
         // console.log(title, author, isbn);


        // Instantiate Book
        const book = new Book(title, author, isbn);
        // console.log(book);

        // Instantiate UI
        const ui = new UI();

        //Validate
        if (title === '' || author === '' || isbn ===''){

        // Error alert
        ui.showAlert('please fill in the all fields', 'error');
        } else {

        // Add book to list
        ui.addBookToList(book);

        //Show success
        ui.showAlert('Book Added !','success')

        //Clear fiels
        ui.clearFields(book);
        }
        e.preventDefault();
});

// Event Listner for delete
document.getElementById('book-list').addEventListener('click',function(e){
        // Instantiate UI
        const ui = new UI();
        //Delete book
        ui.deleteBook(e.target);
      
e.preventDefault();
});
