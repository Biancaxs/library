let booksContainer = document.querySelector(".books-container")

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

Book.prototype.toggleRead = function() {
if(this.read === "yes"){
    this.read = "no"
} else{
    this.read = "yes"
}
}

function displayBooks(){
    booksContainer.textContent = ""

    myLibrary.forEach((book) => {

        const books = document.createElement("div");
        books.classList.add("books");
        books.innerHTML = `Title: ${book.title}<br>Author: ${book.author}<br>Pages: ${book.pages}<br>Read: ${book.read}<br>`
        books.dataset.id = book.id

        const removeBook = document.createElement("button");
        removeBook.classList.add("remove-book");
        removeBook.innerHTML = `<svg class="delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>`

        removeBook.addEventListener("click", () => {
            const bookPosition = myLibrary.findIndex(item => item.id === book.id)
            myLibrary.splice(bookPosition, 1)

            displayBooks()
        })

        const editReadStatus = document.createElement("button");
        editReadStatus.classList.add("status-btn");
        if(book.read === "no"){
            editReadStatus.innerHTML = `<svg class="unread" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>book-check</title><path d="M16.75 22.16L14 19.16L15.16 18L16.75 19.59L20.34 16L21.5 17.41L16.75 22.16M6 22C4.89 22 4 21.1 4 20V4C4 2.89 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V13.34C19.37 13.12 18.7 13 18 13C14.69 13 12 15.69 12 19C12 20.09 12.29 21.12 12.8 22H6Z" /></svg>`
        } else{
            editReadStatus.innerHTML = `<svg class="read" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>book</title><path d="M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z" /></svg>`
        }

        editReadStatus.addEventListener("click", () => {
            book.toggleRead()

            displayBooks()
        })

        books.appendChild(removeBook)
        books.appendChild(editReadStatus)

        booksContainer.appendChild(books)
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const bookRead = document.querySelector('input[name="read"]:checked').value;

    const newTitle = bookTitle.value
    const newAuthor = bookAuthor.value
    const newPages = bookPages.value
    const newRead = bookRead

    dialog.close()
    
    addBookToLibrary(newTitle, newAuthor, newPages, newRead)
    
    displayBooks()

    form.reset()
})