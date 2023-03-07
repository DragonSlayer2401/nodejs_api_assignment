const axios = require("axios");
require("dotenv").config();

const jokesService = async () => {
    console.log("Jokes Service is Working");
    return await axios.get(`${process.env.jokesURL}ten`);
}

const jokesServiceById = async (id) => {
    console.log("Jokes Service by Id is Working");
    return await axios.get(`${process.env.jokesURL}${id}`);
}

module.exports = { jokesService, jokesServiceById };