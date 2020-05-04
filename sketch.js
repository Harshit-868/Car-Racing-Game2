var form, game, player;
var database;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;

function setup() {
    database = firebase.database();
    console.log(database);
    var canvas = createCanvas(400, 400);
    game = new Game();
    game.getState();
    game.start();
    console.log(allPlayers);
}

function draw() {
    if (playerCount === 4) {
        game.updateState(1);
        // console.log("Hello!");
    }
    if (gameState === 1) {
        clear();
        console.log("Game Started!");
        game.play();
    }
}