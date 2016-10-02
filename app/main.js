/**
 * Created by rockuo on 2.10.16.
 */

window.onload = function () {

    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

    var game = new Phaser.Game(stageWidth, stageHeight, Phaser.AUTO, 'game-container', {preload: preload, create: create, update:update}, true);
    var
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

        backgroundWhite = ObjectFactory.createBackgroundWhite();
        backgroundBlack = ObjectFactory.createBackgroundBlack();

        worldBlack = ObjectFactory.createWorldBlack();

        cursors = game.input.keyboard.createCursorKeys();
        user = new SHQPlayer(game,cursors);

    }

    function update() {
        game.physics.arcade.collide(user.player, backgroundBlack);
        game.physics.arcade.collide(user.player, backgroundWhite);
        user.playerMovement();


        var playerHitWorld = game.physics.arcade.collide(user.player, worldBlack);


        if (playerHitWorld && user.player.body.touching.right) {
            user.player.body.velocity.x = -1*gameSpeed;
        }

    }
};