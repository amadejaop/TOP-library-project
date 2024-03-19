const myLibrary = [];

let i = 0;

function Book(title, author, pages, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary[i] = new Book (title, author, pages, read, i);
    i++;
}

function capitalize(string) {
    return (string.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()));
}

function displayMessage() {
    message.style.visibility = "visible";
    setTimeout(() => {
        message.style.visibility = "hidden";
    }, 5000);
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
const form = document.querySelector("form");
const message = document.querySelector("#form-message")

submitButton.addEventListener("click", (event) => {
    form.checkValidity();
    form.reportValidity();
    event.preventDefault();
    let readStatus;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            readStatus = radioButton.value;
            break;
        }
    }

    if (authorInput.value && titleInput.value && pagesInput.value && readStatus) {
        let bookTitle = capitalize(titleInput.value);
        let bookAuthor = capitalize(authorInput.value);
        addBookToLibrary(bookTitle, bookAuthor, pagesInput.value, readStatus);
        displayMessage();
    }
});