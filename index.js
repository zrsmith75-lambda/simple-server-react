const express = require("express");

const server = express();
server.use(express.json());

let books = [
  {
    title: "Vader rocks",
    year: 1975,
    id: 1
  },
  {
    title: "Vader is awesome",
    year: 1977,
    id: 2
  },
  {
    title: "Vader is so cool",
    year: 1981,
    id: 3
  }
];

server.get("/api/books", (req, res) => {
  res.status(200).json(books);
});

const PORT = 5500;
server.listen(PORT, () =>
  console.log(`\n** Server is listening on port ${PORT} **\n`)
);
