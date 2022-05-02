const ExplorerService = require("../services/ExplorerService");
const FizzBuzzService = require("../services/FizzBuzzService");
const FizzbuzzService = require("../services/FizzBuzzService");
const Reader = require("../utils/Reader");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmonutByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static getValidationByNumber(number){
        return FizzbuzzService.applyValidationInNumber(number);
    }

    static getValidationByNumberForBot(number){
        const validation = FizzBuzzService.applyValidationInNumber(number);
        return `Tu número es: ${number}. Validación: ${validation}`
    }
}

module.exports = ExplorerController;
