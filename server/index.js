const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cruddatabase'
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

//listado peliculas
app.get('/api/get', (req,res) => {

    const sqlSelect = "SELECT * FROM movie_reviews";
    db.query(sqlSelect, (err, result) => {
        res.send(result)

    })
})


app.post('/api/insert', (req,res) => {
    console.log(req)
    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;


    const sqlInser = "INSERT INTO movie_reviews (movieName,movieReview) VALUES (?,?)";
    db.query(sqlInser,[movieName, movieReview], (err, result) => {
        console.log(result)
        console.log(err)
    })
})

app.get("/", (req, res) => {
   res.send("<h1>INDEX</h1>")
    
})

app.get("/test", (req, res) => {
    res.send("<h1>test</h1>")
     
 })

app.listen(3001, () =>{

    console.log('listening on 3001');
    console.log('test');
})