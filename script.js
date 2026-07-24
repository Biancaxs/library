const booksContainer = document.querySelector(".books-container")

const dialog = document.querySelector("dialog")
const form = document.querySelector("form") 
const newBookBtn = document.querySelector(".new-book")
const addBookBtn = document.querySelector(".add-book")
const closeBtn = document.querySelector(".close-btn")

const bookTitle = document.querySelector("#title")
const bookAuthor = document.querySelector("#author")
const bookPages = document.querySelector("#pages")


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

//addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not read yet")
//addBookToLibrary("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 309, "not read yet")

myLibrary.forEach((book) => {
    const books = document.createElement("div");
    books.classList.add("books");
    books.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${book.read}`

    booksContainer.appendChild(books)
})

form.addEventListener("submit", (e) => {
     e.preventDefault()

    const newTitle = bookTitle.value
    const newAuthor = bookAuthor.value
    const newPages = bookPages.value
})