/**
 * Created by rockuo on 2.10.16.
 */


function SHQPlayer(game, cursors) {
    this.gravity = gravity;
    var _createPlayer = function () {
        var player = game.add.graphics(stageWidth / 4, stageHeight / 8);
        player.beginFill(0x000000);
        player.drawRect(0, 0, playerWidth, playerHeight);
        player.endFill();

        game.physics.arcade.enable(player);

        player.body.gravity.y = this.gravity;
        player.body.collideWorldBounds = true;
        return player;
    };
    this.player = _createPlayer();
    this.isWhiteWorld = true;

    this.playerMovement = function () {
        var jumpKey = this.isWhiteWorld? cursors.up : cursors.down,
            switchKey = this.isWhiteWorld? cursors.down : cursors.up;

        if (jumpKey.isDown && this.player.body.touching.down) {
            this.player.body.velocity.y = -playerJump;
        }
        if(switchKey.isDown){
            _switchWorldHandler.call(this);
        }
        if (cursors.left.isDown) {
            //  Move to the left
            this.player.body.velocity.x = -playerSpeed;
        }
        else if (cursors.right.isDown && this.player.x < stageWidth * 3 / 4) {
            //  Move to the right
            this.player.body.velocity.x = playerSpeed;
        } else {
            this.player.body.velocity.x = 0;
        }
    };

    var _switchWorldHandler = function () {
        this.gravity = -this.gravity;
    };
}