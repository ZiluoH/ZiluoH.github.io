new Vue({
	el:'#app',
	data:{
		playerHealth: 70,
		monsterHealth: 80,
		gameIsRunning: false,
		turns:[]
	},
	methods:{
		startGame:function(){
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = [];
		},
		// attack 
		attack: function () {
			// player damage range is [3 - 10]
			var playerDamage = this.calculateDamage(3, 10);
			this.monsterHealth -= playerDamage;
			this.turns.unshift({
				isPlayer:true,
				text:'Player hits Monster for ' + playerDamage
			});
			if (this.checkWin()){
				return;
			}
			// monster attack
			this.monsterAttack();
			
		},
		// special attack 
		specialAttack: function(){
			// player damage range is [8 - 15]
			var playerDamage = this.calculateDamage(8, 15);
			this.monsterHealth -= playerDamage;
			this.turns.unshift({
				isPlayer:true,
				text:'Player hits Monster with Special Attack for ' + playerDamage
			})
			if (this.checkWin()){
				return;
			}
			// monster attack
			this.monsterAttack();
		},
		// heal 
		heal: function(){
			if( this.playerHealth <= 90){
				this.playerHealth += 10;
			} else {
				this.playerHealth = 100;
			}
			this.turns.unshift({
				isPlayer:true,
				text:'Player Heals for 10'
			})
			this.monsterAttack();
		},
		// give up
		giveUp: function(){
			this.gameIsRunning = false;
		},
		// damage calculate
		calculateDamage: function(min, max) {
			return Math.max(Math.floor(Math.random() * max), min);
		},
		monsterAttack: function(){
			// monster damage range is [5 - 11]
			var monsterDamage = this.calculateDamage(5, 11);
			this.playerHealth -= monsterDamage;
			// check if player lost
			this.checkWin();
			// update damage log
			this.turns.unshift({
				isPlayer:false,
				text: 'Monster hits Player for ' + monsterDamage
			})
		},
		// check win or lost
		checkWin: function(){
			// check if player win
			if (this.monsterHealth <= 0){
				if (confirm('You Win! New Game?')){
					this.startGame();
				} else {
					this.gameIsRunning = false;
				} 
				return true;

				// alert('You Win!!');
				// this.gameIsRunning = false;
				// this.monsterHealth = 0;
				// return;
			} else if (this.playerHealth <= 0) {
				if (confirm('You Lost! New Game?')){
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			}
			return false;
		}

	}
});