/**
 * Created by rockuo on 2.10.16.
 */


function GameObjectFactory(game) {

    this.createBackgroundWhite = function(){
        var background = game.add.group();
        background.enableBody = true;
        var BCK1 = game.add.graphics(0,0);
        BCK1.beginFill(0xffffff);
        BCK1.drawRect(0, 0, stageWidth, stageHeight/2);
        BCK1.endFill();
        background.add(BCK1);
        BCK1.body.immovable = true;
        return background;
    };

    this.createBackgroundBlack = function(){
        var background = game.add.group();
        background.enableBody = true;

        var BCK1 = game.add.graphics(0,300);
        BCK1.beginFill(0x000000);
        BCK1.drawRect(0, 0, stageWidth, stageHeight/2);
        BCK1.endFill();

        background.add(BCK1);
        BCK1.body.immovable = true;
        return background;
    };

    this.createWorldBlack = function() {
        var world = game.add.group();
        world.enableBody = true;

        var worldItem1 = game.add.graphics(0,0);
        var worldItemHeight = 50;
        var worldItemWidth = 50;

        worldItem1.beginFill(0x000000);
        worldItem1.drawRect(2*stageWidth/3, stageHeight/2 - worldItemHeight, worldItemWidth, worldItemHeight);
        worldItem1.endFill();

        world.add(worldItem1);

        worldItem1.body.velocity.x = -1*gameSpeed;

        return world;
    };
}

