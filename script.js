const booksContainer = document.querySelector(".books-container")

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read)
    book.id = crypto.randomUUID()
    myLibrary.push(book)
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not read yet")
addBookToLibrary("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 309, "not read yet")

myLibrary.forEach((book) => {
    const books = document.createElement("div");
    books.classList.add("books");
    books.textContent = JSON.stringify(`${book.title} by ${book.author}, ${book.pages} pages, ${book.read}`)

    booksContainer.appendChild(books)
})