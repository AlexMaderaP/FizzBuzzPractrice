const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Unit Tests for ExplorerController Class", () => {
    test("Getting list of explorers", () => {
        const listOfExplorers = ExplorerController.getExplorersByMission("java");
        expect(listOfExplorers).not.toBeUndefined();
    });

    test("Getting list of usernames of explorers by mission", () => {
        const usernamesOfExplorers = ExplorerController.getExplorersUsernamesByMission("node");
        expect(usernamesOfExplorers).not.toBeUndefined();
        expect(usernamesOfExplorers.length).toBeGreaterThan(0);
    });

    

});