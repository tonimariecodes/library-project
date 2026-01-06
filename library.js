console.clear();

const myLibrary = [];

function Book() {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}

// Displaying the library
function displayLibrary() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = "";
}
