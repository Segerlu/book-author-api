let resultsDiv = document.getElementById('results');
let search = document.getElementById('searchBook');
let searchAuthor = document.getElementById('searchAuthor');
let searchArea = document.getElementById('searchArea');
let authorSearch = document.getElementById('authorSearch');
let bookSearch = document.getElementById('bookSearch');
let addAuthor = document.getElementById('addAuthor');
let addBook = document.getElementById('addBook');
let home = document.getElementById('home');
let menu = document.getElementById('menuArea');
let booksearchfields = document.getElementsByClassName('bookSearchfield');
let authorsearchfields = document.getElementsByClassName('authorSearchfield');
let homefields = document.getElementById('homeArea');
let addAuthorButton = document.getElementById('addAuthorButton');
let deleteAuthorButton = document.getElementById('deleteAuthorButton');
let updateBooks = document.getElementById('updateAuthorsBooksButton');
let inputSearchAuthor = document.getElementById('searchAuthor');
let inputSearchBook = document.getElementById('searchBook');
let authorToAdd = '';
let resultSelected;
let authorList = [];

const url = 'https://bookauthorsearchbackend.onrender.com'
//let url = 'http://localhost:8006'

menu.addEventListener('click', (e) => {

    e.target !== menu ? switchTab(e.target.textContent) : false;
})

addAuthorButton.addEventListener('click', e => {
    addNewAuthor(prompt("Name of the author you wish to add!"));
})

deleteAuthorButton.addEventListener('click', e => {
    deleteAuthor();
    getAllAuthors();
})

updateBooks.addEventListener('click', e => {
    resultSelected ? addNewBooks(resultSelected) : false;
})

resultsDiv.addEventListener('click', e => {

    if (e.target !== resultsDiv) {

        resultSelected = e.target.parentElement;
        for (let i = 0; i < resultsDiv.children.length; i++) {
            resultsDiv.children[i].style.border = 'black solid 1px'
            resultsDiv.children[i].style.backgroundColor = 'rgb(245, 245, 220, 75%)'
        }
        resultSelected.style.border = 'black solid 3px'
        resultSelected.style.backgroundColor = 'lightBlue'
    }
})

inputSearchAuthor.addEventListener('keypress', e => {

    if (e.key === 'Enter') {
        searchAuthors();
    }
})

inputSearchBook.addEventListener('keypress', e => {

    if (e.key === 'Enter') {
        searchBooks();
    }
})

switchTab(home.textContent);

function switchTab(tab) {

    emptyResults(resultsDiv);
    searchArea.style.display = 'none';
    resultsDiv.style.display = 'none';
    homefields.style.display = 'none';

    for (let i = 0; i < menu.children.length; i++) {
        menu.children[i].style.border = 'solid black 2px';
    }

    for (let i = 0; i < authorsearchfields.length; i++) {

        authorsearchfields[i].style.display = 'none'
    }
    for (let i = 0; i < booksearchfields.length; i++) {

        booksearchfields[i].style.display = 'none'
    }

    tab === 'Author Search' ? showAuthors() :
        tab === 'Book Search' ? showBooks() :
            tab === 'Add Author' ? showAddAuthor() :
                tab === 'Add Book' ? showAddBook() :
                    tab === 'Home' ? showHome() : console.log(tab);

}

function showHome() {
    home.style.border = 'solid black 4px';
    homefields.style.display = 'block';
}

function showAuthors() {

    for (let i = 0; i < authorsearchfields.length; i++) {

        authorsearchfields[i].style.display = 'flex'
    }

    authorSearch.style.border = 'solid black 4px';

    searchArea.style.display = 'flex';
    resultsDiv.style.display = 'grid';

    getAllAuthors();

}

function showBooks() {

    for (let i = 0; i < booksearchfields.length; i++) {

        booksearchfields[i].style.display = 'flex'
    }

    bookSearch.style.border = 'solid black 4px';

    searchArea.style.display = 'flex';
    resultsDiv.style.display = 'grid';
    getAllBooks();

}

function addNewAuthor(authorToAdd) {

    if (authorList.includes(authorToAdd.toLowerCase())) {
        alert("This author is already in the database!")
        return;
    }

    fetch(`https://openlibrary.org/search/authors.json?q=${authorToAdd}`)
        .then(author => author.json())
        .then(details => {

            fetch(url + '/authors', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    key: details.docs[0].key,
                    name: details.docs[0].name,
                    birth_date: details.docs[0].birth_date,
                    top_work: details.docs[0].top_work,
                    work_count: details.docs[0].work_count
                })
            })
                .then(results => {
                    console.log("Added new author")
                    getAllAuthors();
                })
                .catch(er => {
                    console.log(er);
                })
        })
}

function deleteAuthor() {
    let author = resultSelected.firstChild.textContent;

    fetch(url + `/authors/delete/${author}`)
        .then((response) => console.log(response))
        .catch(er => console.log(er))
}

function addNewBooks() {

    fetch(`https://openlibrary.org/search.json?author=${resultSelected.firstChild.textContent}&fields=title,first_publish_year,number_of_pages_median,author_key&key`)
        .then(author => author.json())
        .then(details => {

            fetch(url + '/books', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(details.docs)
            })
                .then(stuff => {
                    alert(`${details.docs.length} books have been added to the database!`)
                })
                .catch(er => {
                    console.log(er);
                })
        })
}

async function getAllBooks() {
    let data = await fetch(url + '/books');
    let books = await data.json();

    emptyResults(resultsDiv);

    if (books.length > 0) {
        books.forEach(book => {
            createResultCardBook(book, resultsDiv);
        });
    } else {
        createEmptyResultCard(resultsDiv)
    }
}

function getAllAuthors() {
    authorList = [];
    fetch(url + '/authors')
        .then(data => data.json())
        .then(authors => {
            emptyResults(resultsDiv);

            if (authors.length > 0) {
                console.log(authors)
                authors.forEach(author => {
                    authorList.push(author.name.toLowerCase());
                    createResultCardAuthor(author, resultsDiv);
                });
            } else {

                createEmptyResultCard(resultsDiv)
            }
        });
}

async function searchBooks() {

    let keyWord = search.value === '' ? -1 : search.value;
    search.value = "";

    let data = await fetch(url + '/books/search/' + keyWord);
    let books = await data.json();

    emptyResults(resultsDiv);

    if (books.length > 0) {
        books.forEach(book => {
            createResultCardBook(book, resultsDiv);
        });
    } else {
        createEmptyResultCard(resultsDiv)
    }
}

async function searchAuthors() {

    let keyWord = searchAuthor.value === '' ? -1 : searchAuthor.value;
    searchAuthor.value = ""

    let data = await fetch(url + '/authors/search/' + keyWord);
    let authors = await data.json();

    emptyResults(resultsDiv);

    if (authors.length > 0) {
        authors.forEach(author => {
            createResultCardBook(author, resultsDiv);
        });
    } else {
        createEmptyResultCard(resultsDiv)
    }
}

function emptyResults(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createResultCardAuthor(data, parent) {

    let overlay = document.createElement("div");
    overlay.classList.add("overlay");

    let resultsCard = document.createElement("span");
    resultsCard.classList.add("result-card");

    let name = document.createElement("h1");
    name.classList.add("name");
    name.textContent = data.name;

    let birth_date = document.createElement("h2");
    birth_date.classList.add("birth_date");
    birth_date.textContent = "Born: " + data.birth_date;

    let top_book = document.createElement("h2");
    top_book.classList.add("top_book");
    top_book.textContent = "Top Book: " + data.top_book;

    let num_books_written = document.createElement("h2");
    num_books_written.classList.add("num_books_written");
    num_books_written.textContent = "Number of books written: " + data.num_books_written;

    resultsCard.append(name, birth_date, top_book, num_books_written, overlay);
    parent.appendChild(resultsCard);
}

function createResultCardBook(data, parent) {

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

function createEmptyResultCard(parent) {

    let overlay = document.createElement("div");
    overlay.classList.add("overlay");

    let resultsCard = document.createElement("span");
    resultsCard.classList.add("result-card");

    let title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = 'No results found!';

    resultsCard.append(title, overlay);
    parent.appendChild(resultsCard);
}