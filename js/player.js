class Player {
    constructor() {
        this.name = null;
        this.dist = 0;
        this.index = null;
    }
    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data) {
            playerCount = data.val();
        })
    }
    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }
    update() {
        var playerIndex = "player/players" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.dist
        });
    }
    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
}