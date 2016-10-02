/**
 * Created by rockuo on 2.10.16.
 */

window.onload = function () {

    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-container', {preload: preload, create: create});
    var player, background;
    function preload() {

    }

    function create() {
        game.stage.backgroundColor = '#000000';

        background = game.add.graphics(0, 0);
        background.beginFill(0xffffff);
        background.drawRect(0, 0, 800,300);
        background.endFill();

        game.physics.startSystem(Phaser.Physics.ARCADE);

        player = game.add.graphics(5, 5);
        player.beginFill(0x000000);
        player.drawRect(0,0,20,20);
        player.endFill();

        game.physics.arcade.enable(player);

        player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;
    }

};