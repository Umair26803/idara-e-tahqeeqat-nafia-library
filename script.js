console.log("Library website is running!");

let books = [
    {
        title: "Talk to Allah",
        author: "Ayesha Syahire",
        category: "Islamic Studies"
    },

    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction"
    },

    {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        category: "Finance"
    }
];

let students = [
    {
        name: "Ali",
        age: 20
    },

    {
        name: "Ahmed",
        age: 22
    }
];

console.log(students);
console.log(students[0]);
console.log(students[0].name);

let libraryBooks = [
    {
        title: "Deep Work",
        author: "Cal Newport",
        category: "Productivity"
    },

    {
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self Development"
    },

    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction"
    }
];

console.log(libraryBooks);
console.log(libraryBooks[0].title);
console.log(libraryBooks[1].author);

let testBooks = [
    {
        title: "Deep Work",
        author: "Cal Newport"
    },

    {
        title: "Atomic Habits",
        author: "James Clear"
    }
];

console.log(testBooks);
console.log(testBooks[0].title);
console.log(testBooks[1].author);

const addBookButton = document.querySelector("#addBookButton");
const bookMessage = document.querySelector("#bookMessage");
const bookTitleInput = document.querySelector("#bookTitle");
const bookList = document.querySelector("#bookList");

function displayBooks() {
    bookList.innerHTML = "";

    for (let book of books) {
        bookList.innerHTML += '<p class="dynamic-book">' + book.title + "</p>";
    }
}

displayBooks();

addBookButton.addEventListener("click", function() {

    let title = bookTitleInput.value.trim();

    if (title !== "") {
        books.push(title);
        displayBooks();
        bookMessage.textContent = title + " added to library!";

        bookTitleInput.value = "";
    } else {
        bookMessage.textContent = "Please enter a book title.";
    }
});