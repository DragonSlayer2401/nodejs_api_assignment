const express = require("express");
const { jokesService, jokesServiceById } = require("../services/jokesService");
const jokesRouter = express.Router();

jokesRouter.get("/", (req, res, next) => {
    jokesService().then(result => {
        res.status(200).json(result.data);
    }).catch(err => {
        res.status(500).json({
            error: {
                message: err.message
            }
        });
    });
});

jokesRouter.get("/:id", (req, res, next) => {
    jokesServiceById(req.params.id).then(result => {
        res.status(200).json(result.data);
    }).catch(err => {
        res.status(500).json({
            error: {
                message: err.message
            }
        });
    });
});

module.exports = jokesRouter;