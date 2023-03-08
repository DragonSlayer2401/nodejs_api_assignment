const axios = require("axios");
require("dotenv").config();

const jokesService = async () => {
    console.log("Mocked Jokes Service is Working");
    return Promise.resolve({
        data:[
            {
                type: "general",
                setup: "How can you tell a vampire has a cold?",
                punchline: "They start coffin.",
                id: 114
            },
            {
                type: "general",
                setup: "Ever wondered why bees hum?",
                punchline: "It's because they don't know the words.",
                id: 109
            },
            {
                type: "general",
                setup: "Why did the Clydesdale give the pony a glass of water?",
                punchline: "Because he was a little horse",
                id: 44
            },
            {
                type: "general",
                setup: "Why do wizards clean their teeth three times a day?",
                punchline: "To prevent bat breath!",
                id: 360
            },
            {
                type: "general",
                setup: "Did you hear about the guy who invented Lifesavers?",
                punchline: "They say he made a mint.",
                id: 89
            },
            {
                type: "general",
                setup: "How come the stadium got hot after the game?",
                punchline: "Because all of the fans left.",
                id: 116
            },
            {
                type: "general",
                setup: "How much does a hipster weigh?",
                punchline: "An instagram.",
                id: 146
            },
            {
                type: "general",
                setup: "What do you call a dad that has fallen through the ice?",
                punchline: "A Popsicle.",
                id: 201
            },
            {
                type: "general",
                setup: "What's the best time to go to the dentist?",
                punchline: "Tooth hurty.",
                id: 11
            },
            {
                type: "general",
                setup: "What does an angry pepper do?",
                punchline: "It gets jalapeño face.",
                id: 240
            }
        ]
    });
}

const jokesServiceById = async (id) => {
    console.log("Mocked Jokes Service by Id is Working");
    return Promise.resolve({
        data:{
            type: "general",
            setup: "How can you tell a vampire has a cold?",
            punchline: "They start coffin.",
            id: 114
    }});
}

module.exports = { jokesService, jokesServiceById };