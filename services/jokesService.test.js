const {jokesService, jokesServiceById} = require("./jokesService");

jest.mock("./jokesService");

describe("Jokes Service Tests", () => {
    test("Tests that all 10 jokes get returned", async () => {
        const result = await jokesService();
        expect(result.data).toHaveLength(10);
    });

    test("Tests that jokes can be returned by ID", async () => {
        const result = await jokesServiceById(114);
        expect(result.data).toEqual({type: "general", setup: "How can you tell a vampire has a cold?", punchline: "They start coffin.", id: 114});
    });
});