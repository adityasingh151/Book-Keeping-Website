# Bookkeeping Website

Welcome to the Bookkeeping Website, a web application for managing and organizing books. This project provides features to display books, sort them, and add new books to the database.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- Display books with their details including title, author, rating, and published date.
- Sort books by rating or recency.
- Add new books with their details including title, author, ISBN, rating, and published date.
- Dynamically fetch cover images using Open Library API.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your local machine.
- PostgreSQL installed and running locally.
- Basic knowledge of Express.js, EJS, and SQL.

## Installation

To install and set up the project, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/bookkeeping-website.git
    ```

2. Navigate to the project directory:

    ```bash
    cd bookkeeping-website
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up the PostgreSQL database. Create a database named `Books` and import the provided SQL schema file.

5. Create a `.env` file in the project root and add the following environment variables:

    ```plaintext
    DB_USER=postgres
    DB_HOST=localhost
    DB_NAME=Books
    DB_PASSWORD=your_database_password
    DB_PORT=5432
    ```

## Usage

To run the project, use the following command:

```bash
npm start
```
The server will start on http://localhost:3000. You can access the website in your web browser.

## File Structure

The project structure is organized as follows:

```BookNotes/
├── node_modules/
├── input.css
├── output.css
├── views/
│   └── index.ejs
├── JS/
│   └── index.js
├── package-lock.json
├── package.json
├── queries.sql
├── tailwind.config.js
```
## Dependencies

The main dependencies used in this project are:

- Express.js
- EJS (Embedded JavaScript templates)
- pg (PostgreSQL client for Node.js)
- Axios

## Contributing

Contributions are welcome! To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
