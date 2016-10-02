/**
 * Created by rockuo on 2.10.16.
 */

window.onload = function () {

    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

    var game = new Phaser.Game(stageWidth, stageHeight, Phaser.AUTO, 'game-container', {preload: preload, create: create, update:update}, true);
    var
        gameStarted = false,
        welcomeText,
        user,
        backgroundWhite,
        backgroundBlack,
        cursors,
        worldBlack;

    var ObjectFactory = new GameObjectFactory(game);

    function preload() {

    }

    function create() {
        game.stage.backgroundColor = '#000000';
        game.physics.startSystem(Phaser.Physics.ARCADE);

        cursors = game.input.keyboard.createCursorKeys();

        backgroundWhite = ObjectFactory.createBackgroundWhite();
        backgroundBlack = ObjectFactory.createBackgroundBlack();

        createWelcome();
    }

    function createWelcome() {
        var style = { font: "32px Arial", fill: "#000000", wordWrap: true, wordWrapWidth: stageWidth, align: "center", boundsAlignH: "center", boundsAlignV: "middle" };

        welcomeText = game.add.text(0, 0, "Press any cursor to start game", style);
        welcomeText.setTextBounds(0, 0, stageWidth, stageHeight/2);

    }


    function startGame() {
        gameStarted = true;
        welcomeText.destroy();
        createGame();
    }

    function createGame() {
        worldBlack = ObjectFactory.createWorldBlack();

        user = new SHQPlayer(game,cursors);
    }

    function update() {
        if (!gameStarted) {
            if (cursors.left.isDown || cursors.right.isDown || cursors.up.isDown || cursors.down.isDown){
                startGame();
            }

        } else {
            game.physics.arcade.collide(user.player, backgroundBlack);
            game.physics.arcade.collide(user.player, backgroundWhite);
            user.playerMovement();

            var playerHitWorld = game.physics.arcade.collide(user.player, worldBlack);

            if (playerHitWorld && user.player.body.touching.right) {
                user.player.body.velocity.x = -1*gameSpeed;
            }

            if (playerHitWorld && user.player.body.touching.right && user.player.body.x <= 0) {
                gameOver();
            }
        }
    }

    function gameOver() {
        gameStarted = false;
        alert('GAME OVER');
        worldBlack.destroy();
        user.player.destroy();
        createWelcome();
    }
};