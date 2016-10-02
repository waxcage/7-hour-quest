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

}

