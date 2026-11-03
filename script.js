console.log("Library website is running!");

let books = [
    {
        title: "Talk to Allah",
        author: "Ayesha Syahire",
        category: "Islamic Studies",
        isbn: "971-0624122183"
    },

    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction",
        isbn: "981-0926377843"
    },

    {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        category: "Finance",
        isbn: "978-1473639421"
    },
    {
        title: "The Psychology Of Money",
        author: "Morgan Housel",
        category: "Finance",
        isbn: "978-0857197689"
    },
];

const addBookButton = document.querySelector("#addBookButton");
const bookMessage = document.querySelector("#bookMessage");
const bookTitleInput = document.querySelector("#bookTitle");
const bookList = document.querySelector("#bookList");
const bookAuthorInput = document.querySelector("#bookAuthor");
const bookCategoryInput = document.querySelector("#bookCategory");
const bookISBNInput = document.querySelector("#bookISBN");

console.log(bookAuthorInput);

function displayBooks() {
    bookList.innerHTML = "";

    for (let book of books) {
        let card = "<div class='book-card'><h3>" +book.title+ "</h3>"+"<p>" +book.author+ "</p>"+"<p>" +book.category+ "</p>"+"<p>" +book.isbn+ "</p>" +"</div>";
        bookList.innerHTML += card
    }
}

displayBooks();

addBookButton.addEventListener("click", function() {

    let title = bookTitleInput.value.trim();
    let author = bookAuthorInput.value.trim();
    let isbn = bookISBNInput.value.trim();
    let category = bookCategoryInput.value;

    if (title !== "") {
        books.push({
            title: title,
            author: author,
            category: category,
            isbn: isbn
        });
        
        displayBooks();
        bookMessage.textContent = title + " added to library!";

        bookTitleInput.value = "";
    } else {
        bookMessage.textContent = "Please enter a book title.";
    }
});