var loadState = {
    preload: function () {
        var loadLabel = game.add.text(game.world.centerX, game.world.centerY, "Loading...", {
            font: "35px Impact",
            fill: "#ffffff"
        });
        loadLabel.anchor.setTo(0.5, 0.5);

        var progressBar = game.add.sprite(game.world.centerX, game.world.centerY + 50, 'progressBar');
        progressBar.anchor.setTo(0.5, 0.5);
        game.load.setPreloadSprite(progressBar);

        var spritebgText = "Sprite and Background assets from opengameart.com [bevouliin.com].\n";
        this.spritebgAssets = game.add.text(game.world.centerX, game.world.centerY + 150, spritebgText, {
            font: "16px 'Comic Sans MS'",
            fill: "#ffffff"
        });
        this.spritebgAssets.anchor.setTo(0.5, 0.5);


        var soundcredText = "Sound assets from freesound.org.\n";
        this.soundAssets = game.add.text(game.world.centerX, game.world.centerY + 180, soundcredText, {
            font: "16px 'Comic Sans MS'",
            fill: "#ffffff"
        });
        this.soundAssets.anchor.setTo(0.5, 0.5);

        game.load.image('chutiyalogo', 'http://fatpixels.me/games/ChutiyaChidiya/assets/chutiyalogo.png');
        game.load.spritesheet('chutiya', 'http://fatpixels.me/games/ChutiyaChidiya/assets/chutiyasheet.png', 118, 84);
        game.load.image('pipe', 'http://fatpixels.me/games/ChutiyaChidiya/assets/pipe.png');
        game.load.image('star', 'http://fatpixels.me/games/ChutiyaChidiya/assets/star.png');
        game.load.image('chutiyabg', 'http://fatpixels.me/games/ChutiyaChidiya/assets/chutiyabg.png');
        game.load.spritesheet('muteButtons', 'http://fatpixels.me/games/ChutiyaChidiya/assets/mutesheet.png', 64, 64);
        game.load.audio('chutiyajump', 'http://fatpixels.me/games/ChutiyaChidiya/assets/sounds/breathing_jumping.wav');
        game.load.audio('chutiyamelody', 'http://fatpixels.me/games/ChutiyaChidiya/assets/sounds/singing_melody.wav');
        game.load.audio('chutiyadead', 'http://fatpixels.me/games/ChutiyaChidiya/assets/sounds/death_blood_splatter.mp3');
        game.load.audio('chutiyahorn', 'http://fatpixels.me/games/ChutiyaChidiya/assets/sounds/bike_horn.wav');
    },

    create: function () {
        this.chutiyaMelody = game.add.audio('chutiyamelody', 0.3, true);
        this.chutiyaMelody.play();
        game.time.events.add(1000, this.nextState, this);
    },

    nextState: function () {
        game.state.start('menu');
    }

};
