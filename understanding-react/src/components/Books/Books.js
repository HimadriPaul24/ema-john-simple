import React from 'react';
import Book from '../Book/Book';

const Books = (props) => {
    const books = props.books;
    return (
        <div>
            {
                books.map(book=> <Book
                key={book.name} 
                name={book.name}
                author={book.author}>

                </Book>)
            }
        </div>
    );
};

export default Books;