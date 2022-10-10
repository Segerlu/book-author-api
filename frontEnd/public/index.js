let resultsDiv = document.getElementById('results');
let search = document.getElementById('searchBook');

getAllBooks();

function switchTab(tab) {

    emptyResults(resultsDiv);

    

}

function showAuthors() {

}

function showBooks() {

}

function showAddAuthor() {

}

function showAddBook() {

}

async function getAllBooks() {
    let data = await fetch('http://localhost:8006/books');
    let books = await data.json();

    emptyResults(resultsDiv);

    books.forEach(book => {
        createResultCard(book, resultsDiv);
    });
}

async function searchBooks() {

    let keyWord = search.value === '' ? -1 : search.value;

    let data = await fetch('http://localhost:8006/books/search/' + keyWord);
    let books = await data.json();

    emptyResults(resultsDiv);

    books.forEach(book => {
        createResultCard(book, resultsDiv);
    });
}

function emptyResults(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createResultCard(data, parent) {

    let overlay = document.createElement("div");
    overlay.classList.add("overlay");

    let resultsCard = document.createElement("span");
    resultsCard.classList.add("result-card");

    let title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = data.title;

    let publish_year = document.createElement("h2");
    publish_year.classList.add("publish_year");
    publish_year.textContent = "Published: " + data.publish_year;

    let page_count = document.createElement("h2");
    page_count.classList.add("page_count");
    page_count.textContent = "Page Count: " + data.page_count;

    let author_key = document.createElement("h2");
    author_key.classList.add("author_key");
    author_key.textContent = "Author: " + data.name;

    resultsCard.append(title, publish_year, page_count, author_key, overlay);
    parent.appendChild(resultsCard);
}