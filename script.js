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

let testLibrary = [
    {
        title: "Book A",
        author: "Author A"
    }
];

testLibrary.push({
    title: "Book B",
    author: "Author B"
});

console.log(testLibrary);
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
        books.push({
            title: title,
            author: "Unknown",
            category: "Uncategorized"
        });
        displayBooks();
        bookMessage.textContent = title + " added to library!";

        bookTitleInput.value = "";
    } else {
        bookMessage.textContent = "Please enter a book title.";
    }
});