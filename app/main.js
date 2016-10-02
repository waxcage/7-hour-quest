/**
 * Created by rockuo on 2.10.16.
 */

window.onload = function () {

    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-container', {preload: preload, create: create});
    var player, graphics;
    function preload() {

    }

    function create() {
        game.stage.backgroundColor = '#000000';

        graphics = game.add.graphics(0, 0);
        graphics.beginFill(0xffffff);
        graphics.drawRect(0, 0, 800,300);
        graphics.endFill();

        player = new Phaser.Physics.P2.Body(this.game, null, 0, 0);
        player.setRectangle(20,20);
    }

};