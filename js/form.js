class Form {
    constructor() {
        this.inp = createInput("Enter your name");
        this.button = createButton("Submit");
        this.greeting = createElement('h2');
    }
    hide() {
        this.inp.hide();
        this.button.hide();
        this.button.hide();
    }
    display() {
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(150, 0);
        this.inp.position(150, 160);
        this.button.position(150, 200);
        this.button.mousePressed( () => {
            this.inp.hide();
            this.button.hide();
            player.name = this.inp.value();
            playerCount++;
            player.index = playerCount;
            player.updateCount(playerCount);
            player.update();
            this.greeting.html("Hello, " + player.name + "! Welcome to the game");
            this.greeting.position(130, 160);
        })
    }
}