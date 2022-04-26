class ExplorerService {
    static filterByMission(explorers, mission) {
        return explorers.filter((explorer) => explorer.mission == mission);
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const ExplorersByMisison = explorers.filter((explorer) => explorer.mission == mission);
        return ExplorersByMisison.length;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersInMission = ExplorerService.filterByMission(explorers, mission);
        return explorersInMission.map((explorer) => explorer.githubUsername);
    }
}

module.exports = ExplorerService;
