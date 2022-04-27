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

    test("Getting Amount of explorers by mission", () => {
        const amountOfExplorers = ExplorerController.getExplorersAmonutByMission("node");
        expect(amountOfExplorers).toBeGreaterThan(0);
    });

    test("Using FizzBuzz Service method", () => {
        expect(ExplorerController.getValidationByNumber(1)).toEqual(1);
        expect(ExplorerController.getValidationByNumber(6)).toBe("FIZZ");
        expect(ExplorerController.getValidationByNumber(10)).toBe("BUZZ");
        expect(ExplorerController.getValidationByNumber(30)).toBe("FIZZBUZZ");
    });
});
