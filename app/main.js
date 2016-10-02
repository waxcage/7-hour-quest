/**
 * Created by rockuo on 2.10.16.
 */

window.onload = function () {



    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-container', {preload: preload, create: create, update:update}, true);
    var player, backgroundWhite, backgroundBlack;
    function preload() {

    }

    function create() {
        game.stage.backgroundColor = '#000000';

        backgroundWhite = game.add.group();
        backgroundWhite.enableBody = true;
        var BCKW1 = game.add.graphics(0,0);
        BCKW1.beginFill(0xffffff);
        BCKW1.drawRect(0, 0, 800,300);
        BCKW1.endFill();
        backgroundWhite.add(BCKW1);
        BCKW1.body.immovable = true;

        backgroundBlack = game.add.group();
        backgroundBlack.enableBody = true;
        var BCKB1 = game.add.graphics(0,300);
        BCKB1.beginFill(0x000000);
        BCKB1.drawRect(0, 0, 800,300);
        BCKB1.endFill();
        backgroundBlack.add(BCKB1);
        BCKB1.body.immovable = true;



        game.physics.startSystem(Phaser.Physics.ARCADE);

        player = game.add.graphics(5, 5);
        player.beginFill(0x000000);
        player.drawRect(0,0,20,20);
        player.endFill();

        game.physics.arcade.enable(player);

        player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;
    }

    function update() {
        var hitPlatform = game.physics.arcade.collide(player, backgroundBlack);
    }
};