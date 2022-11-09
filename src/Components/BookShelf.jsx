import React from "react";
import Book from "./Book";

// const Bookshelf = (props) => {
//   // const { shelf, books, onChange } = props;
//   // const bookOnShelf = books.filter((book) => book.shelf === shelf.key);
const Bookshelf = ({ books, shelf, onChange }) => {
  const bookOnShelf = books.filter((book) => book.shelf === shelf);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookOnShelf.map((book) => (
            <Book  
              Key={book.id}
              book={book}
              onChange={onChange}
            />
            // <li key={book.id}>
            //   <book book={book} shelf={shelf.key} onChange={onChange} />
            // </li>
            
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
