console.clear();

const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  displayLibrary();
}

// Displaying the library
function displayLibrary() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = "";

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.dataset.id = book.id;

    card.innerHTML = `<h3>${book.title}</h3>
    <p><strong>Author:</strong> ${book.author}</p>
    <p>
      <strong>Pages:</strong> ${book.pages}
    </p>
    <p>
      <strong>Status:</strong> ${book.isRead ? "Read" : "Not Read"}
    </p>`;
    libraryDiv.appendChild(card);
  });
}

// form handling
const form = document.getElementById("book-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("isRead").checked;

  addBookToLibrary(title, author, pages, isRead);

  form.reset();
});

displayLibrary();
