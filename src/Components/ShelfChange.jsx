import React from "react";
// import { Component } from "react";
import { useState } from "react";

// class BookShelfChange extends Component {
// state = {
//     value: this.props.shelf
// };
// changeEvent = event => {
//     const { value } = event.target;
//     this.props.onChange(this.props.book, value);
// }


function BookShelfChange({ book, onChange }) {
    // const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
    // const wantToRead = books.filter((book) => book.shelf === "wantToRead");
    // const read = books.filter((book) => book.shelf === "read");

    return (
        <div className="book-shelf-changer">
       <select
              defaultValue={book.shelf ? book.shelf : "none"}
              onChange={(event) => onChange(book, event.target.value)}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
        </div>
    );
};

export default BookShelfChange;