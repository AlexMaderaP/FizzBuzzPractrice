const ExplorerService = require("../services/ExplorerService")
const FizzbuzzService = require("../services/FizzBuzzService")
const Reader = require("../utils/Reader")

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json")
        return ExplorerService.filterByMission(explorers,mission)
    }

}

module.exports = ExplorerController;