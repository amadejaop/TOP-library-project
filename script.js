const myLibrary = [];

let i = 0;

function Book(title, author, pages, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
}

function addBookToLibrary() {
    myLibrary[i] = new Book ();
    i++;
}

// function that displays all of the books on the page

// new book button that brings up a form that allows users to add new books to their library

// remove book button that deletes the book from the array

// change status button that changes the status of the book between read and unread

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

const submitButton = document.querySelector("#submit");
const authorInput = document.querySelector("#author");
const titleInput = document.querySelector("#title");
const pagesInput = document.querySelector("#num-pages");
const radioButtons = document.querySelectorAll('input[name="read-status"]');

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(authorInput.value);
    console.log(titleInput.value);
    console.log(pagesInput.value);
    let readStatus;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            readStatus = radioButton.value;
            break;
        }
    }
    console.log(readStatus);
});