console.log("Library website is running!");

let books = [
    "Atomic Habits",
    "The Alchemist",
    "Rich Dad Poor Dad",
];

const addBookButton = document.querySelector("#addBookButton");
const bookMessage = document.querySelector("#bookMessage");
const bookTitleInput = document.querySelector("#bookTitle");
const bookList = document.querySelector("#bookList");

function displayBooks() {

    bookList.innerHTML = "";

    for (let book of books) {
    bookList.innerHTML += "<p>" + book + "</p>";
}
}
displayBooks();

addBookButton.addEventListener("click", function() {

    if (bookTitleInput.value !== "") {
        books.push(bookTitleInput.value);
        displayBooks();
        bookMessage.textContent = bookTitleInput.value + " added to library!";
    } else {
        bookMessage.textContent = "Please enter a book title.";
    }
});
