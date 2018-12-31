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

//Event Listners
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

    // Add book to list
    ui.addBookToList(book);

    //Clear fiels
    ui.clearFields(book);



    e.preventDefault();
    
})
