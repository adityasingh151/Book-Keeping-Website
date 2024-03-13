-- Retrieve all books sorted by rating in descending order
SELECT * FROM books ORDER BY rating DESC;

-- Retrieve all books sorted by timestamp in ascending order
SELECT * FROM books ORDER BY Time_stamp ASC;

-- Retrieve all books sorted by rating in ascending order (default sorting)
SELECT * FROM books ORDER BY rating ASC;

-- Insert a new book into the database
INSERT INTO books (title, author, isbn, rating, published_date)
VALUES ($1, $2, $3, $4, $5)
RETURNING *;
