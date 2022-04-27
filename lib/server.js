const express = require("express");
const { response } = require("express");
const ExplorerController = require("./controllers/ExplorerController");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({ message: "FizzBuzz Api welcome!" });
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

app.get("/v1/explorers/:mission", (request, response) => {
    const { mission } = request.params;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const { mission } = request.params;
    const amountOfExplorers = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({ mission: request.params.mission, quantity: amountOfExplorers });
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const { mission } = request.params;
    const usernamesOfExplorers = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({ mission: request.params.mission, explorers: usernamesOfExplorers });
});

app.get("/v1/fizzbuzz/:number", (request, response) => {
    const number = request.params.number;
    const validation = ExplorerController.getValidationByNumber(number);
    response.json({ score: request.params.number, trick: validation })
})