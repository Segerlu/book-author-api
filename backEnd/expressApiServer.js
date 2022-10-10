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

    client.query('SELECT * FROM books JOIN authors on author_key = author_key;')
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

    client.query(`SELECT * FROM books JOIN authors on author_key = author_key WHERE title ILIKE '%${keySearch}%' ORDER BY title;`)
    .then(data => {
        console.log("request received")
        res.send(data.rows)
    })
    .catch(er => {
        console.log(er)
        res.send(er)
    })    
})


app.listen(PORT, console.log('listening'));