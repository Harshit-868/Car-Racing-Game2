class Game {
    constructor(){

    }
    getState() {
        var state = database.ref('gameState');
        state.on("value", function(data) {
            gameState: data.val();
        });
    }
    updateState(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
        if (gameState == 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
    }
    play() {
        form.hide();
        textSize(17);
        text("Game Start!", 100, 100);
        Player.getPlayerInfo();
        if (allPlayers != undefined) {
            var displayPos = 130;
            for (var plr in allPlayers) {
                if (plr === "player" + player.index) {
                    fill("red");
                } else {
                    fill("black");
                }
                textSize(12);
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, displayPos);
                displayPos += 20;
            }
        }
        if (keyIsDown(UP_ARROW) && player.index != null) {
            player.dist += 50;
            player.update();
        }
    }
}