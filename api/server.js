const express = require("express");
const helmet = require("helmet");

const userRouter = require('../users/users-router')

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/users", userRouter);

server.get("/", (req, res) => {
    res.json({ api: "up" });
  });
  
module.exports = server;
