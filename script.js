console.log("Library website is running!");

const addBookButton = document.querySelector("#addBookButton");
const bookMessage = document.querySelector("#bookMessage");
const bookTitleInput = document.querySelector("#bookTitle");

addBookButton.addEventListener("click", function() {
    bookMessage.textContent = bookTitleInput.value;
});