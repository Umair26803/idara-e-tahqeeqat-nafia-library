console.log("Library website is running!");

const addBookButton = document.querySelector("#addBookButton");
const bookMessage = document.querySelector("#bookMessage");
const bookTitleInput = document.querySelector("#bookTitle");

let bookTitle = "Atomic Habits";

addBookButton.addEventListener("click", function() {
    bookMessage.textContent = bookTitleInput.value;
});
