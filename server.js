const express = require("express");


const server = express();


server.use(express.json());




server.get("/", (req, res) => {
    res.status(200).json({ message: "This is the sprint challenge API" });
});

module.exports = server;
