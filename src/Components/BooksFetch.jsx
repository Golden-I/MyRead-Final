import React from "react";
import BookItem from "./Book";
// import (useEffect) 


// useEffect (() => {
// 	const url: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")";

// })

const FetchBooks = ({ Book, searchedBooks, fetchedBooks, onChange }) => {
	return (
		<ol className='books-grid'>
			{searchedBooks.length > 0 &&
				searchedBooks.map((book) => {
					const bookShelf = fetchedBooks.find(
						(foundShelfBook) => foundShelfBook.id === book.id
					);
					bookShelf ? (book.shelf = bookShelf.shelf) : (book.shelf = "none");
					return (
						<BookItem
							key={book.id}
							book={book}
							onChange={onChange}
						/>
					);
				})}
			{searchedBooks.length === 0 && <h1>Book not found!</h1>}
		</ol>
	);
};

export default FetchBooks;