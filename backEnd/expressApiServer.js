let express = require('express');
let app = express();
let cors = require('cors')
const PORT = 8006;

app.use(express.json());
app.use(cors());

let { Client } = require('pg');
// let client = new Client({
//     host: 'localhost:5432',
//     user: 'postgres',
//     password: 'docker',
//     database: 'booksauthorapidb',
// });

let client = new Client(
    {
        connectionString : 'postgresql://postgres:docker@127.0.0.1:5432/booksauthorapidb'
    }
)

client.connect();

app.get('/books', (req, res)=> {

    client.query('SELECT * FROM books JOIN authors ON authors.id = books.author_key ORDER BY title LIMIT 100;')
    .then(data => {
        console.log("request received")
        res.send(data.rows)
    })
    .catch(er => {
        console.log(er)
        res.send(er)
    })
    
})

app.get('/books/search/:key', (req, res)=> {

    let keySearch = req.params.key === -1 ? 'e' : req.params.key;   

    client.query(`SELECT * FROM books JOIN authors ON authors.id = books.author_key WHERE title ILIKE '%${keySearch}%' ORDER BY title LIMIT 100;`)
    .then(data => {
        console.log("request received")
        res.send(data.rows)
    })
    .catch(er => {
        console.log(er)
        res.send(er)
    })    
})

app.get('/authors', (req, res)=> {

    client.query('SELECT * FROM authors ORDER BY name LIMIT 100;')
    .then(data => {
        console.log("request received")
        res.send(data.rows)
    })
    .catch(er => {
        console.log(er)
        res.send(er)
    })
    
})

app.get('/authors/search/:key', (req, res)=> {

    let keySearch = req.params.key === -1 ? 'e' : req.params.key;   

    client.query(`SELECT * FROM authors WHERE name ILIKE '%${keySearch}%' ORDER BY name LIMIT 100;`)
    .then(data => {
        console.log("request received")
        res.send(data.rows)
    })
    .catch(er => {
        console.log(er)
        res.send(er)
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
        console.log(data.rows[0])
    })
    .catch(e => console.error(e.stack))

})

app.post('/books', (req, res) => {
    let books = req.body;

    books.forEach(book => {
        let text = `INSERT INTO books (title, publish_year, page_count, author_key) VALUES ($1, $2, $3, $4);`
        let values = [book.title, book.first_publish_year, book.number_of_pages_median, book.author_key[0]]

        client
        .query(text, values)
        .then(data => {
    })
    .catch(e => console.error(e.stack)) 
    })
    

})


app.listen(PORT, console.log('listening'));