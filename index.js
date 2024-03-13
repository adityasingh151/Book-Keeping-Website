import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import axios from "axios"; // Import Axios
import path from "path";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Books",
    password: "Lucky@123",
    port: 5432,
});
db.connect();

app.set('view engine', 'ejs'); // Set the view engine to EJS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Route to fetch and sort books
app.get('/', async (req, res) => {
    try {
        let sortBy = req.query.sort;
        console.log(sortBy);
        let queryText;

        if (sortBy === 'rating') {
            queryText = `SELECT * FROM books ORDER BY ${sortBy} DESC`;
        } else if(sortBy === 'Time_stamp') {
            queryText = `SELECT * FROM books ORDER BY ${sortBy} ASC`;  
         } else {
            queryText = `SELECT * FROM books ORDER BY rating ASC`;  
         }

        const result = await db.query(queryText);
        const books = result.rows;
        res.render('index', { books });
    } catch (err) {
        console.error('Error fetching books:', err);
        res.status(500).send('Internal Server Error');
    }
});



app.post('/add-book', async (req, res) => {
    try {
        const { title, author, isbn, rating, publishedDate } = req.body;

        // Fetch cover image using Axios
        const coverUrl = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`; // Use -L for larger image

        // Insert the book into the database
        const queryText = `
            INSERT INTO books (title, author, isbn, rating, published_date)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *`;
        const values = [title, author, isbn, rating, publishedDate];

        const result = await db.query(queryText, values);
        const newBook = result.rows[0];

        // Redirect to the homepage after adding the book
        res.redirect('/');
        
    } catch (err) {
        console.error('Error adding book:', err);
        res.status(500).send('Internal Server Error');
    }
});




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
