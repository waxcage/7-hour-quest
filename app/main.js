/**
 * Created by rockuo on 2.10.16.
 */

window.onload = function () {
    
    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-container', {preload: preload, create: create, update:update}, true);
    var player, backgroundWhite, backgroundBlack, cursors;
    var ObjectFactory = new GameObjectFactory(game);
    function preload() {

    }

    function create() {
        game.stage.backgroundColor = '#000000';
        game.physics.startSystem(Phaser.Physics.ARCADE);

        backgroundWhite = ObjectFactory.createBackgroundWhite();
        backgroundBlack = ObjectFactory.createBackgroundBlack();

        player = ObjectFactory.createPlayer();

        cursors = game.input.keyboard.createCursorKeys();
    }

    function update() {
        var hitPlatform = game.physics.arcade.collide(player, backgroundBlack);
        if (cursors.up.isDown && player.body.touching.down && hitPlatform)
        {
            player.body.velocity.y = -350;
        }
    }

};