const express = require("express");

const server = express();
server.use(express.json());

server.get("/api/books");

const PORT = 5500;
server.listen(PORT, () =>
  console.log(`\n** Server is listening on port ${PORT} **\n`)
);
