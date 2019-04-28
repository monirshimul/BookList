// Book Class: Represents a Book

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI class: Handle UI Tasks

class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Book One",
        author: "Jhon Doe",
        isbn: "123456"
      }
    ];

    const books = StoredBooks;

    books.forEach(book => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
    list.appendChild(row);
  }

  static deleteBook(deleteElement) {
    if (deleteElement.classList.contains("delete")) {
      deleteElement.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

// Store Class: Handle Storage

// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add a Book
document.querySelector("#book-form"),
  addEventListener("submit", e => {
    // Prevent Actual submit
    e.preventDefault();
    //get form values
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    // Validate
    if (title === "" || author === "" || isbn === "") {
      alert("Please Fillup all the Fields");
    } else {
      //Instantiate book
      const book = new Book(title, author, isbn);
      //console.log(book);
      //Add book to UI from FORM
      UI.addBookToList(book);
      // Clear Fields
      UI.clearFields();
    }
  });

// Event: Remove a Book

document.querySelector("#book-list"),
  addEventListener("click", e => {
    //console.log(e.target);
    UI.deleteBook(e.target);
  });
