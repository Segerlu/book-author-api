let express = require('express');
let app = express();
let cors = require('cors')

app.use(express.json());
app.use(cors());

let { Client } = require('pg');

//const PORT = process.env.PORT ? process.env.PORT : 8006;
const PORT = process.env.PORT;
//const CONNECT_STRING = process.env.CONNECT_STRING ? process.env.CONNECT_STRING + '?ssl=true' :'postgresql://postgres:docker@127.0.0.1:5432/booksauthorapidb'
const CONNECT_STRING = process.env.CONNECT_STRING
console.log(CONNECT_STRING)

let client = new Client(
    {
        connectionString: CONNECT_STRING,
        ssl: {
            rejectUnauthorized: false
        }
    }
)

client.connect();

app.get('/books', (req, res) => {

    client.query('SELECT * FROM books JOIN authors ON authors.id = books.author_key ORDER BY title LIMIT 10;')
        .then(data => {
            console.log("request received")
            res.send(data.rows)
        })
        .catch(error => {
            console.log(error)
            res.send(error)
        })

})

app.get('/books/search/:key', (req, res) => {

    let keySearch = req.params.key === -1 ? 'e' : req.params.key;

    client.query(`SELECT * FROM books JOIN authors ON authors.id = books.author_key WHERE title ILIKE '%${keySearch}%' ORDER BY title LIMIT 10;`)
        .then(data => {
            console.log("request received")
            res.send(data.rows)
        })
        .catch(error => {
            console.log(error)
            res.send(error)
        })
})

app.get('/authors', (req, res) => {

    client.query('SELECT * FROM authors ORDER BY name LIMIT 10;')
        .then(data => {
            console.log("request received")
            res.send(data.rows)
        })
        .catch(error => {
            console.log("issue in author search", error)
            res.send(error)
        })

})

app.get('/authors/search/:key', (req, res) => {

    let keySearch = req.params.key === -1 ? 'e' : req.params.key;

    client.query(`SELECT * FROM authors WHERE name ILIKE '%${keySearch}%' ORDER BY name LIMIT 10;`)
        .then(data => {
            console.log("request received")
            res.send(data.rows)
        })
        .catch(error => {
            console.log(error)
            res.send(error)
        })
})

app.get('/authors/delete/:key', (req, res) => {

    let keySearch = req.params.key === -1 ? '' : req.params.key;

    console.log(keySearch)

    client.query(`DELETE FROM authors WHERE name = '${keySearch}';`)
        .then(data => {
            console.log("author deleted")
            res.send("author deleted")
        })
        .catch(error => {
            console.log(error)
            res.status(500)
            res.send(error)
        })
})

app.post('/authors', (req, res) => {
    let author = req.body;
    let text = `INSERT INTO authors (id, name, birth_date, top_book, num_books_written) VALUES ($1, $2, $3, $4, $5);`
    let values = [author.key, author.name, author.birth_date, author.top_work, author.work_count]

    console.log(author)

    client
        .query(text, values)
        .then(data => {
            res.status(201)
            res.send('Author Added')
        })
        .catch(error => {
            console.log(error)
        })

})

app.post('/books', (req, res) => {
    let books = req.body;

    books.forEach(book => {
        let text = `INSERT INTO books (title, publish_year, page_count, author_key) VALUES ($1, $2, $3, $4);`
        let values = [book.title, book.first_publish_year, book.number_of_pages_median, book.author_key[0]]

        client
            .query(text, values)
            .then(data => {
                res.send("books updated")
            })
            .catch(error => {
                console.log(error)
            })
    })


})


app.listen(PORT, console.log(`listening on ${PORT}`));