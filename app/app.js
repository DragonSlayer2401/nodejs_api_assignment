const express = require("express");
const jokesRouter = require("../router/jokesRouter");

const app = express();

app.get("/",(req,res,next) => {
    res.status(200).json({message:"service is up"});
});

app.use("/jokes", jokesRouter);

app.use((req, res, next) => {
    const error = new Error("NOT FOUND!");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error:{
            message: error.message,
            status: error.status,
            method: req.method
        }
    });
});

module.exports = app;