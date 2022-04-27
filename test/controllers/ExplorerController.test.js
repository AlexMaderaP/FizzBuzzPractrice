const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Unit Tests for ExplorerController Class", () => {
    test("Getting list of explorers", () => {
        const listOfExplorers = ExplorerController.getExplorersByMission("java");
        expect(listOfExplorers).not.toBeUndefined();
    });
    

});