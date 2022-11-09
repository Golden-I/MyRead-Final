import React from "react";
import ShelfChange from "./ShelfChange";

const Book = ({ book, onChange }) => {
  return (
    <li key={book.id}>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks?.thumbnail})`,
          }}
        />
        <ShelfChange book={book} onChange={onChange} />
        {/* <div className="book-shelf-changer"> */}
        {/* <BookshelfChanger book={book} shelf={shelf} onChange={onChange} /> */}
          {/* <select>
            <select
              defaultValue={book.shelf ? book.shelf : "none"}
              onChange={(event) => bookShelfChange(book, event.target.value)}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </select> */}
        {/* </div> */}
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
</li>
)};

export default Book;
