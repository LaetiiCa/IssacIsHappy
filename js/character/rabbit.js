var rabbit = {
    name: "rabbit",
    velocity : 2,
    armor : 0.5,
    animationsFrames : 8,
    generateSprite : function( position, direction ){
        this.player = {};
        this.player.body = game.add.sprite(position.x, position.y, this.name);
        this.player.body.anchor.setTo(0.5, 0.5);
        this.player.body.scale.setTo(1.5, 1.5);
        game.physics.arcade.enable([this.player.body]);
        this.player.body.body.collideWorldBounds = true;

        // Add animation down
        this.player.body.animations.add('downStatic', [1]);
        this.player.body.animations.add('down', [0, 1 ,2 ]);

        // Add animation up
        this.player.body.animations.add('upStatic', [4]);
        this.player.body.animations.add('up', [3 ,4 , 5 ]);

        // Add animation right
        this.player.body.animations.add('rightStatic', [7]);
        this.player.body.animations.add('right', [6, 7 ,8 ]);

        // Add animation left
        this.player.body.animations.add('leftStatic', [10]);
        this.player.body.animations.add('left', [9, 10 ,11 ]);

        this.player.body.animations.play(direction + 'Static', this.animationsFrames, true);
        this.player.body.checkCollision = true;

        return this.player;
    },
    killSprite: function(){
            this.player.body.kill();
    }
};
