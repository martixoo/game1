var game= new Phaser.Game(600, 1000);

var mainState= {
	preload: function (){
		game.load.image('star','star.png');
			//wrzucanie plików z obrazkami i audio


	},

	create: function(){
		game.stage.backgroundColor = '#ff1b0f'; //zmieniliśmy kolor tła 
		game.physics.startSystem(Phaser.Physics.ARCADE); //włączamy fizykę


		this.star =game.add.sprite(100, 500, 'bird');

		game.physics.arcade.enable(this.bird); //grawitacja dotyczy sprita bird

		this.bird.body.gravity.y = 1000; 

		var

			//ustawianie na miejscu obiektów, które mają
			//się pojawić postarcie gry


	},

	upload: function(){
			//co ma się zmieniać w czasie 


	},



};

game.state.add('main',mainState)	
game.state.start('main');










