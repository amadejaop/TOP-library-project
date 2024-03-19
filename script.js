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
function displayBooks() {
    let tableRef = document.querySelector("table");
    tableRef.removeChild(tableRef.getElementsByTagName("tbody")[0]);
    let tBodyRef = tableRef.createTBody();
    for (book of myLibrary) {
        let newRow = tBodyRef.insertRow(-1);
        let i = 0;
        for (property in book) {
            let newCell = newRow.insertCell(i);
            let newText = document.createTextNode(book[property])
            newCell.appendChild(newText);
            i++;
            if (i === 4) {
                let newCell = newRow.insertCell(i);
                let deleteButton = document.createElement("button");
                deleteButton.innerText = "Remove book";
                deleteButton.addEventListener("click", deleteBook)
                newCell.appendChild(deleteButton);
                break;
            }
        }
    }
}

// remove book button that deletes the book from the array

function deleteBook() {
    //function
}

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

const refreshButton = document.querySelector("#refresh");
refreshButton.addEventListener("click", displayBooks);