const express = require("express");

const projectsRouter = require("../endpoints/projectsRouter");
const actionsRouter = require("../endpoints/actionsRouter");


const server = express();


server.use(express.json());
server.use("/projects", projectsRouter);
server.use("/actions", actionsRouter);




server.get("/", (req, res) => {
    res.status(200).json({ message: "This is the sprint challenge API" });
});

module.exports = server;
