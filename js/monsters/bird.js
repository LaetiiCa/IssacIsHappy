class bird extends monster {

    constructor() {
        super({
            name : 'bird',
            damage : 0.5,
            life : 4
        })
    }

    create() {
        this.sprite = game.add.sprite(10, game.world.centerY, this.name);
        this.sprite.animations.add('up', [3, 4, 5, 4]);
        this.sprite.animations.add('down', [0, 1, 2, 1]);
        this.sprite.animations.add('left', [6, 7, 8, 7]);
        this.sprite.animations.add('right', [9, 10, 11, 10]);
        this.sprite.anchor.setTo(0.5, 0.5);
        this.sprite.scale.setTo(1, 1);
        game.physics.arcade.enable([this.sprite]);
        this.sprite.body.checkCollision = true;
        this.sprite.body.collideWorldBounds = true;
    }

    moveToPlayer() {
        game.physics.arcade.moveToObject(this.sprite, player.player.body.body, 80);
        var tmpX = this.sprite.body.position.x - player.player.body.body.position.x;
        var tmpY = this.sprite.body.position.y - player.player.body.body.position.y;
        if (tmpX > -100 && tmpX < 100 && tmpY > -80 && tmpY < 100) {
            this.sprite.body.velocity.x = 0;
            this.sprite.body.velocity.y = 0;
            this.attackPossible = true;
        }
        else {
            var tmpY = this.sprite.body.position.y - player.player.body.body.position.y;
            if (this.sprite.body.velocity.y < 0 && (tmpY > 100 || tmpY < -100)) {
                this.sprite.animations.play('up', 7, true);
            } else if (this.sprite.body.velocity.y > 0 && (tmpY > 100 || tmpY < -100)) {
                this.sprite.animations.play('down', 7, true);
            } else if (this.sprite.body.velocity.x < 0) {
                this.sprite.animations.play('left', 7, true);
            } else {
                this.sprite.animations.play('right', 7, true);
            }
            this.attackPossible = false;
        }
    }
}
