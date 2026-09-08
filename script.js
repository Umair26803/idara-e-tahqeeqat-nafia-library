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

const addBookButton = document.querySelector("#addBookButton");
const bookMessage = document.querySelector("#bookMessage");
const bookTitleInput = document.querySelector("#bookTitle");
const bookList = document.querySelector("#bookList");
const bookAuthorInput = document.querySelector("#bookAuthor");
const bookCategoryInput = document.querySelector("#bookCategory");

console.log(bookAuthorInput);

function displayBooks() {
    bookList.innerHTML = "";

    for (let book of books) {
        let card = "<div class='dynamic-card'><h3>" +book.title+ "</h3>"+"<p>" +book.author+ "</p>"+"<p>" +book.category+ "</p>"+"</div>";
        bookList.innerHTML += card
    }
}

displayBooks();

addBookButton.addEventListener("click", function() {

    let title = bookTitleInput.value.trim();
    let author = bookAuthorInput.value.trim();
    let category = bookCategoryInput.value;

    if (title !== "") {
        books.push({
            title: title,
            author: author,
            category: category
        });
        
        displayBooks();
        bookMessage.textContent = title + " added to library!";

        bookTitleInput.value = "";
    } else {
        bookMessage.textContent = "Please enter a book title.";
    }
});