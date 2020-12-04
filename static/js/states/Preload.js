var Match3 = Match3 || {};

// loading the game assets
Match3.PreloadState ={
    // show loading screen
    preload: function(){

        // create a new sprite with specific position
        // will save as an object in Phaser.Sprite 
        // sprite(X, Y, key =image, frame = if texture or sprite sheet is used, then can specify the frame used, group)
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'bar');

        // sets the origin point of the texture
        this.preloadBar.anchor.set(0.5);
        this.preloadBar.scale.setTo(100, 1);

        // set sprite to be preload
        // allows us to easily make loading bars for games.
        // sprite will automatically be made visible when calling this.
        // setPrelaodSprite( sprite, direction)
        this.load.setPreloadSprite(this.preloadBar);

        // load game assets
        this.load.image('block1', 'static/images/bean_blue.png')
        this.load.image('block2', 'static/images/bean_green.png')
        this.load.image('block3', 'static/images/bean_orange.png')
        this.load.image('block4', 'static/images/bean_pink.png')
        this.load.image('block5', 'static/images/bean_purple.png')
        this.load.image('block6', 'static/images/bean_yellow.png')
        this.load.image('block7', 'static/images/bean_red.png')
        this.load.image('block8', 'static/images/bean_white.png')
        this.load.image('deadBlock', 'static/images/bean_dead.png')
        this.load.image('background', 'static/images/backyard2.png');

        
    },

    create: function(){
        this.state.start('Game');
        

    }
}
