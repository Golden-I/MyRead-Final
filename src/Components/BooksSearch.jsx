import React from "react";
import { useState } from "react";
import * as BooksAPI from "../BooksAPI";
// import Book from "./Book"


const BooksSearch = ({ shelf, onChange, BooksFetch }) => {
  const bookShelf = book.filter((book) => book.shelf === shelf.key);
  const [book, setBooks] = useState([]);
  const [term, setTerm] = useState("");


  const BooksSearch = (term )=> {
    if (term.length !== 0) {
      BooksAPI.search().then((book) => {
        if (!book.error) {
          setBooks(book);
        } else {
          setBooks([]);
        }
      });
    } else {
      setBooks([]);
    }
  };
  BooksSearch();
    return (
        <div className="search-books">
        <div className="search-books-bar">
          <a to="/" className="close-search">Close</a>
          <div className="search-books-input-wrapper">
            <input 
            type="text" 
            value={term}
            onChange={(e) =>setTerm(e.target.value)} />
           placeholder='Search by title or author'
          </div>
        </div>
        <div className="search-books-results">
          <BooksFetch
          BooksSearch={BooksAPI}
          BooksFetch={BooksFetch}
          onChange={onChange}
/>
    
            </div>
            </div>
);
};
            
export default BooksSearch;