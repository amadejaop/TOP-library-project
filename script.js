const myLibrary = [
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        pages: 530,
        read: "read",
    },
    {
        title: "Sense and Sensibility",
        author: "Jane Austen",
        pages: 420,
        read: "read",
    },
    {
        title: "The count of Monte Cristo",
        author: "Alexandre Dumas",
        pages: 1130,
        read: "unread",
    },
];

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
                deleteButton.bookTitle = book.title;
                newCell.appendChild(deleteButton);

                let newCell2 = newRow.insertCell(i + 1);
                let statusButton = document.createElement("button");
                statusButton.innerText = "Change status";
                statusButton.addEventListener("click", changeStatus);
                statusButton.bookTitle = book.title;
                newCell2.appendChild(statusButton);

                break;
            }
        }
    }
}

function deleteBook(event) {
    let deleteIndex = myLibrary.map(function(e) {return e.title}).indexOf(event.target.bookTitle);
    if (deleteIndex > -1) {
        myLibrary.splice(deleteIndex, 1);
    }
    displayBooks();
}

// change status button that changes the status of the book between read and unread

function changeStatus(event) {
    let changeIndex = myLibrary.map(function(e) {return e.title}).indexOf(event.target.bookTitle);
    if (myLibrary[changeIndex].read === "read") {
        myLibrary[changeIndex].read = "unread";
    } else {
        myLibrary[changeIndex].read = "read"
    }
    displayBooks();
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#show-dialog");
const closeButton = document.querySelector("#close-dialog");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
    displayBooks();
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