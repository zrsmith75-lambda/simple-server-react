import React from "react";
const BooksForm = props => {
  return (
    <div>
      <button onClick={props.getBooks}>
        Get the best books ever about {props.name}!
      </button>
    </div>
  );
};
export default BooksForm;
