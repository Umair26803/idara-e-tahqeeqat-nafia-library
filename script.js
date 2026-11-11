
/* =========================================
   1. INITIAL BOOK DATA
========================================= */

const defaultBooks = [
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
    }
];

let books;

const savedBooks = localStorage.getItem("books");

if (savedBooks !== null) {
    books = JSON.parse(savedBooks);
} else {
    books = defaultBooks;
}


/* =========================================
   2. SELECT HTML ELEMENTS
========================================= */

const bookForm = document.querySelector("#bookForm");

const bookTitleInput = document.querySelector("#bookTitle");
const bookAuthorInput = document.querySelector("#bookAuthor");
const bookISBNInput = document.querySelector("#bookISBN");
const bookCategoryInput = document.querySelector("#bookCategory");
const bookSearchInput = document.querySelector("#bookSearch");
const categoryFilterSelect = document.querySelector("#categoryFilterSelect");

const bookMessage = document.querySelector("#bookMessage");
const bookList = document.querySelector("#bookList");

const secondAddBookButton = document.querySelector("#secondAddBookButton");


/* =========================================
   3. DISPLAY SUCCESS OR ERROR MESSAGE
========================================= */

function showMessage(message, type) {
    bookMessage.textContent = message;

    bookMessage.className = type;
}

function populateCategoryFilter() {

    // Get all categories from the books array
    const categories = books.map(function(book) {
        return book.category;
    });

    // Remove duplicate categories
    const uniqueCategories = [...new Set(categories)];

    // Sort categories alphabetically
    uniqueCategories.sort();

    // Remember the currently selected category
    const selectedCategory = categoryFilterSelect.value;

    // Clear existing options
    categoryFilterSelect.replaceChildren();

    // Create the default option
    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "All Categories";

    categoryFilterSelect.appendChild(allOption);

    // Create an option for each unique category
    for (let category of uniqueCategories) {

        const option = document.createElement("option");

        option.value = category;
        option.textContent = category;

        categoryFilterSelect.appendChild(option);
    }

    // Restore the selected category if it still exists
    if (
        selectedCategory === "all" ||
        uniqueCategories.includes(selectedCategory)
    ) {
        categoryFilterSelect.value = selectedCategory;
    } else {
        categoryFilterSelect.value = "all";
    }
}


/* =========================================
   4. DISPLAY BOOKS
========================================= */

function displayBooks(searchTerm = "", selectedCategory = "all") {

    // Clear the previous dynamic book cards
    bookList.replaceChildren();
    const normalizedSearch = searchTerm.toLowerCase().trim();

    const filteredBooks = books.filter(function(book) {

        const matchesSearch =
            book.title.toLowerCase().includes(normalizedSearch) ||
            book.author.toLowerCase().includes(normalizedSearch) ||
            book.isbn.toLowerCase().includes(normalizedSearch);
    
        const matchesCategory =
            selectedCategory === "all" ||
            book.category === selectedCategory;
    
        return matchesSearch && matchesCategory;
    });

    if (filteredBooks.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No books found.";
        bookList.appendChild(message);
        return;
    }
    // Create a card for every book
    for (let book of filteredBooks) {
        if (filteredBooks.length === 0) {
            const message = document.createElement("p");
            message.textContent = "No books found.";
            bookList.appendChild(message);
            return;
        }

        // Main card
        const card = document.createElement("div");
        card.classList.add("book-card");

        // Book cover
        const cover = document.createElement("div");
        cover.classList.add("book-cover");
        cover.textContent = "📚";
        cover.setAttribute("aria-hidden", "true");

        // Book title
        const title = document.createElement("h3");
        title.textContent = book.title;

        // Book author
        const author = document.createElement("p");
        author.textContent = book.author;

        // Book information container
        const meta = document.createElement("div");
        meta.classList.add("book-meta");

        // ISBN
        const isbn = document.createElement("p");
        isbn.textContent = "ISBN: " + (book.isbn || "Not available");

        // Category
        const category = document.createElement("p");
        category.textContent = "Category: " + book.category;

        // Add information to the meta container
        meta.append(isbn, category);

        // Book status
        const status = document.createElement("span");
        status.classList.add("status", "available");
        status.textContent = "Available";

        // Add all elements to the card
        card.append(cover, title, author, meta, status);

        // Add the card to the book list
        bookList.appendChild(card);
    }
}


/* =========================================
   5. VALIDATE ISBN FORMAT
========================================= */

function isValidISBN(isbn) {

    // Remove spaces and hyphens before checking
    const cleanISBN = isbn.replace(/[\s-]/g, "");

    // ISBN-10: 9 digits followed by a digit or X
    const isISBN10 = /^[0-9]{9}[0-9X]$/i.test(cleanISBN);

    // ISBN-13: exactly 13 digits
    const isISBN13 = /^[0-9]{13}$/.test(cleanISBN);

    return isISBN10 || isISBN13;
}


/* =========================================
   6. HANDLE BOOK FORM SUBMISSION
========================================= */

bookForm.addEventListener("submit", function(event) {

    // Stop the browser from reloading the page
    event.preventDefault();

    // Get values from the input fields
    const title = bookTitleInput.value.trim();
    const author = bookAuthorInput.value.trim();
    const isbn = bookISBNInput.value.trim();
    const category = bookCategoryInput.value;


    // Validate title
    if (title === "") {
        showMessage("Please enter the book title.", "error");
        bookTitleInput.focus();
        return;
    }


    // Validate author
    if (author === "") {
        showMessage("Please enter the author's name.", "error");
        bookAuthorInput.focus();
        return;
    }


    // Validate category
    if (category === "") {
        showMessage("Please select a book category.", "error");
        bookCategoryInput.focus();
        return;
    }


    // Validate ISBN only if the user entered one
    if (isbn !== "" && !isValidISBN(isbn)) {
        showMessage(
            "Please enter an ISBN-10 or ISBN-13 in the correct format.",
            "error"
        );

        bookISBNInput.focus();
        return;
    }


    // Add the new book to the array
    const newBook = {
        title: title,
        author: author,
        category: category,
        isbn: isbn === "" ? "Not available" : isbn
    };

    books.push(newBook);

    localStorage.setItem("books", JSON.stringify(books));
    
    displayBooks(
        bookSearchInput.value,
        categoryFilterSelect.value
    );
    showMessage(title + " added to the library successfully!", "success");
    bookForm.reset();

});


/* =========================================
   7. SECOND ADD BOOK BUTTON
========================================= */

secondAddBookButton.addEventListener("click", function() {
    bookForm.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
    bookTitleInput.focus();

});
/* =========================================
   8. LIVE BOOK SEARCH
========================================= */

bookSearchInput.addEventListener("input", function() {
    displayBooks(
        bookSearchInput.value,
        categoryFilterSelect.value
    );
});

categoryFilter.addEventListener("change", function() {
    displayBooks(
        bookSearchInput.value,
        categoryFilterSelect.value
    );
});

/* =========================================
   9. INITIAL PAGE DISPLAY
========================================= */

displayBooks(
    bookSearchInput.value,
    categoryFilter.value
);