console.log("Library website is running!");
let books = ["Atomic Habits", "The Alchemist", "Rich Dad Poor Dad", "The Psychology Of Money", "Deep Work"];

const addBookButton = document.querySelector("#addBookButton");
const bookMessage = document.querySelector("#bookMessage");
const bookTitleInput = document.querySelector("#bookTitle");

addBookButton.addEventListener("click", function() {
    addBookButton.addEventListener("click", function() {

        if (bookTitleInput.value !== "") {
            books.push(bookTitleInput.value);
            console.log(books);
            bookMessage.textContent = bookTitleInput.value + " added to library!";
        } else {
            bookMessage.textContent = "Please enter a book title.";
        }
    
    });
});