import React from "react";
import cuid from "cuid";
const BooksDisplay = props => {
  return (
    <div>
      {props.books.map(book => (
        <div key={cuid()}>
          <h3>{book.title}</h3>
          <p>Year: {book.year}</p>
        </div>
      ))}
    </div>
  );
};
export default BooksDisplay;
