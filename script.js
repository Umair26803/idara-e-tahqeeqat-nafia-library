console.log("Library website is running!");
let books = ["Atomic Habits", "The Alchemist", "Rich Dad Poor Dad"];

const addBookButton = document.querySelector("#addBookButton");
const bookMessage = document.querySelector("#bookMessage");
const bookTitleInput = document.querySelector("#bookTitle");

addBookButton.addEventListener("click", function() {
    addBookButton.addEventListener("click", function() {
    
        if (bookTitleInput.value !== "") {
            bookMessage.textContent = bookTitleInput.value;
        }else {
            bookMessage.textContent = "Please enter a book title.";
        }
    
    });
});
