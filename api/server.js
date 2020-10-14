const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
    res.json({ api: "up" });
  });
  
module.exports = server;
