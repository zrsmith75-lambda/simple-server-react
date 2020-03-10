import React, { useState } from "react";
import axios from "axios";
import BooksForm from "./components/BooksForm.js";
import BooksDisplay from "./components/BooksDisplay.js";

import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    console.log("books button pushed");
    axios
      .get("http://localhost:5500/api/books")
      .then(response => {
        console.log(response.data);
        setBooks(response.data);
      })
      .catch(error => {
        console.log(`Error: ${error}`);
      });
  };

  return (
    <div className="App">
      <h2>Best books on the market!</h2>
      <BooksForm name={"vader"} getBooks={getBooks} />
      <BooksDisplay topic={"awesome vader"} books={books} />
    </div>
  );
};

export default App;
