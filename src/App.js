import "./App.css";
import { useState, useEffect } from "react";

import React from "react";
import * as BooksAPI from "./BooksAPI";
import Navbar from "./Components/Navbar";
import ShelfChange from "./Components/ShelfChange";
import BookShelf from "./Components/BookShelf";
import BooksFetch from "./Components/BooksFetch";
import Book from "./Components/Book";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [searchBooks, setSearchBooks] = useState([]);
  const [books, setBooks] = useState([]); // books

  // const BookShelf = (book, bookshelf) => {
  //   BooksAPI.update(book, bookshelf);
  //   if (bookshelf === "none") {
  //     // SetBooksFetch(BooksFetch.filter((book) => book.id !== book.id));
  //   } else {
  //     book.bookshelf = bookshelf;
  //     // SetBooksFetch(
  //     //   BooksFetch.filter((book) => book.id !== book.id).concat(book)
  //     // );
  //   }
  // };

  const onBookChange = (book, shelf) => {
    console.log("book", book);
    console.log("shelf", shelf);

    const updatedBooks = books
      .filter((b) => {
        if (b.id !== book.id) {
          return true;
        }
        return false;
      })
      .concat({
        ...book,
        shelf: shelf,
      });

    setBooks(updatedBooks);

    // [Book1, Book2] -> [Book1, Book2, Book3] :: Concat
    // [Book1, Book2] -> [Book1] :: Filter
    // [Book1, Book2] -> [Book1+, Book2] :: Map
  };

  useEffect(() => {
    const FetchBooks = async () => {
      try {
        const response = await BooksAPI.getAll();
        setBooks(response);
      } catch (err) {
        console.log("Please Try Again");
      }
    };

    FetchBooks();
  }, []);

  const searchingBooks = async (e) => {
    try {
      const response = await BooksAPI.search(e.target.value, 0);
      if (Array.isArray(response)) {
        setSearchBooks(response);
      } else {
        setSearchBooks([]);
      }
    } catch (err) {
      console.log("Please Try Again");
      setSearchBooks([]);
    }
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              onClick={() => setShowSearchpage(!showSearchPage)}
              className="close-search"
            >
              Close function
            </a>

            <div className="search-books-input-wrapper">
              <input
                onChange={searchingBooks}
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {searchBooks.map((book) => (
                <Book Key={book.id} book={book} onChange={onBookChange} />
              ))}
            </ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <Navbar />
          <div className="list-books-content">
            <div>
              <div className="open-search">
                <a to="/search">
                  <button>Add a book</button>
                </a>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <BookShelf
                  books={books}
                  shelf="currentlyReading"
                  onChange={onBookChange}
                />
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <BookShelf
                  books={books}
                  shelf="wantToRead"
                  onChange={onBookChange}
                />
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <BookShelf books={books} shelf="read" onChange={onBookChange} />
              </div>
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
            {/* <BooksFetch /> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
