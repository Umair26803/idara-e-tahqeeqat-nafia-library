console.log("Library website is running!");

let books = [
    "Talk to Allah",
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
        bookList.innerHTML += '<p class="dynamic-book">' + book + "</p>";
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