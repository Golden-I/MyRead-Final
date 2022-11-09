import React from "react";
// import { Component } from "react";
import { Link } from 'react';
import Shelf from './BookShelf'

    const BooksList = ({shelves, books, onChange}) => { 
        return (
            <div className="List-books">
                {/* <div className="List-books-title">
                    <h1>MyReads</h1>
                </div> */}
                <div className="List-books-Content">
                    <div>
                        {shelves.map(shelf => (
                            <Shelf
                            key={shelf.key}
                            shelf={shelf}
                            book={books}
                            onChange={onChange}
                            />
                        ))}
                    </div>
            </div>
            <div className="open-search">
                <Link to="search">
                <button>Add a Book</button>
                </Link>
            </div>
            </div>
        );
    }


export default BooksList;