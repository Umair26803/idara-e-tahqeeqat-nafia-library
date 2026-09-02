console.log("Library website is running!");

const addBookButton = document.querySelector("#addBookButton");
const bookMessage = document.querySelector("#bookMessage");

addBookButton.addEventListener("click", function() {
    addBookButton.textContent = "Book Added!";
});