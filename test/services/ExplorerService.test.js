const Reader = require('./../../lib/utils/Reader');
const ExplorerService = require("./../../lib/services/ExplorerService")

describe("Unit Tests for ExplorerService Class", () => {
    test('Filter Explorers by Mission', () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInJava = ExplorerService.filterByMission(explorers, "java")

        expect(explorersInJava[0].mission).not.toBe("node");
        expect(explorersInJava[0].mission).toBe("java");
    });

    test('Get number of Explorers by Mission', () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const numberExplorersInJava = ExplorerService.getAmountOfExplorersByMission(explorers, "java")
        expect(numberExplorersInJava).toBeGreaterThan(0);
    });

    test('Get Usernames of Explorers by Mission', () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const UsernamesExplorersInJava = ExplorerService.getExplorersUsernamesByMission(explorers, "java")
        expect(UsernamesExplorersInJava).toContain("ajolonauta6");
    });
    

  })