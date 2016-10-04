/**
 * Created by rockuo on 2.10.16.
 */

var isAllowedToJump = true;

function SHQPlayer(game, cursors) {
    this.gravity = gravity;
    this.player = _createPlayer(game);
    this.isWhiteWorld = true;

    this.playerMovement = function () {
        var jumpKey = this.isWhiteWorld ? cursors.up : cursors.down,
            switchKey = this.isWhiteWorld ? cursors.down : cursors.up;

        if (switchKey.isDown) {
            isAllowedToJump = false;
            _switchWorldHandler(this);
        } else if (jumpKey.isDown && isAllowedToJump && this.player.body.touching[this.isWhiteWorld ? 'down' : 'up']) {
            this.player.body.velocity.y = this.isWhiteWorld ? -playerJump : playerJump;
        } else if (!isAllowedToJump && !jumpKey.isDown) {
            isAllowedToJump = true;
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
}


function _createPlayer(game) {
    var player = game.add.graphics(stageWidth / 4, stageHeight / 8);
    player.beginFill(0x000000);
    player.drawRect(0, 0, playerWidth, playerHeight);
    player.endFill();

    game.physics.arcade.enable(player);

    player.body.gravity.y = gravity;
    player.body.collideWorldBounds = true;
    return player;
}

function _switchWorldHandler(instance) {
    instance.gravity = -instance.gravity;

    var newY = instance.isWhiteWorld ? stageHeight / 2 - (instance.player.body.y + playerHeight) + stageHeight / 2 :
    stageHeight / 2 - (instance.player.body.y - stageHeight / 2) - playerHeight;

    instance.isWhiteWorld = !instance.isWhiteWorld;
    instance.player.body.gravity.y = instance.gravity;
    instance.player.body.y = newY;
    instance.player.beginFill(instance.isWhiteWorld ? 0x000000 : 0xffffff);
    instance.player.drawRect(0, 0, playerWidth, playerHeight);
    instance.player.endFill();
}