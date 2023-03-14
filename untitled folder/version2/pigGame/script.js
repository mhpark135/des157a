(function(){
	
	"use strict";
	/* 
	This gets the player: gameData.players[gameData.index]
	This gets the first die: gameData.dice[gameData.roll1-1]
	This gets the second die: gameData.dice[gameData.roll2-1]
	This gets the score of the current player: gameData.score[gameData.index]
	*/
	
	const startGame = document.getElementById('startgame');
	const gameControl = document.getElementById('gamecontrol');
	const game = document.getElementById('game');
	const score = document.getElementById('score');
	const actionArea = document.getElementById('actions');
	const beepBtn = document.getElementsByTagName('button');
	const beepSound = new Audio ('sounds/button.mp3');
	const winSound = new Audio ('sounds/win.mp3');


	const gameData = {
		dice: ['images/1die.jpg', 'images/2die.jpg', 'images/3die.jpg', 
			   'images/4die.jpg', 'images/5die.jpg', 'images/6die.jpg'],

		dice2: ['images/1die2.jpg', 'images/2die2.jpg', 'images/3die2.jpg', 
		'images/4die2.jpg', 'images/5die2.jpg', 'images/6die2.jpg'],
		players: ['player 1', 'player 2'],
		score: [30, 30],
		roll1: 0,
		roll2: 0,
		rollSum: 0,
		index: 30,
		gameEnd: 0,
	};


	console.log('reading js');
    document.querySelector('.open2').addEventListener('click',function(event){
        event.preventDefault();
        document.getElementById('overlay2').className = 'showing';
    });

    document.querySelector('.close').addEventListener('click',function(event){
        event.preventDefault();
        document.getElementById('overlay2').className = 'hidden';
    });

	document.querySelector('.close2').addEventListener('click',function(event){
        event.preventDefault();
        document.getElementById('overlayU').className = 'hidden';
    });




    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            document.getElementById ('overlay').className = 'hidden';
        }
    })

	startGame.addEventListener('click', function () {
		gameData.index = Math.round(Math.random());
		console.log(gameData.index);

		gameControl.innerHTML = '<h2>The Game Has Started</h2>';
		gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

		document
			.getElementById('quit').addEventListener('click', function () {
				location.reload();
			});

		setUpTurn();
	});

	function setUpTurn() {
		const attacker = gameData.index
		var defender 
		gameData.index ? (defender = 0) : (defender = 1);
		game.innerHTML = `<p>You are ${gameData.players[defender]} and will attack ${gameData.players[attacker]}</p>`;
		actionArea.innerHTML = `<button id="roll">Attack ${gameData.players[attacker]}!</button>`;
		document.getElementById('roll').addEventListener('click', function(){

			throwDice();

		});
	}

	function throwDice(){
		const attacker = gameData.index
		var defender 
		gameData.index ? (defender = 0) : (defender = 1);
		// WORKIGN WITH THIS AND RENAMING VARIABLES
		actionArea.innerHTML = '';
		gameData.roll1 = Math.floor(Math.random() * 6) + 1; //using ceil could result in a zero
		gameData.roll2 = Math.floor(Math.random() * 6) + 1;
		game.innerHTML = `<p>Roll the dice for the ${gameData.players[defender]}</p>`;
		game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> 
							<img src="${gameData.dice[gameData.roll2-1]}">`;
		gameData.rollSum = gameData.roll1 + gameData.roll2;

		// if two 1's are rolled...
		if( gameData.rollSum === 2 ){ 
			game.innerHTML += '<p>Oh snap! Snake eyes! The enemy is back to full health!</p>';
			gameData.score[gameData.index] = 30;
			gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			showCurrentScore();
			setTimeout(setUpTurn, 2000);
		}

		// if either die is a 1...
		else if(gameData.roll1 === 1 || gameData.roll2 === 1){ 
			gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to  ${
				gameData.players[attacker]
			}</p>`;
			setTimeout(setUpTurn, 2000);
			showCurrentScore() 
		}

		// if neither die is a 1...
		else { 
			gameData.score[gameData.index] = gameData.score[gameData.index] - gameData.rollSum;
			actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

			document.getElementById('rollagain').addEventListener('click', function () {
				//setUpTurn();
				throwDice();
			});

			document.getElementById('pass').addEventListener('click', function () {
				gameData.index ? (gameData.index = 0) : (gameData.index = 1);
				setUpTurn();
			});

			checkWinningCondition();
		}

	}

	function checkWinningCondition() {
		if (gameData.score[gameData.index] < gameData.gameEnd) {

			// PLAY AUDIO HERE Chnage the player display
			score.innerHTML = `<h3>${gameData.players[gameData.index]} 
			wins with ${gameData.score[gameData.index]*(-1)} points!</h3>`;
			winSound.play();

			actionArea.innerHTML = '';
			document.getElementById('quit').innerHTML = 'Start a New Game?';
			
		} else {
			// show current score...
			showCurrentScore();
		}
	}

	function showCurrentScore() {
			player1.innerHTML = `<h4 id="playerOne">${gameData.players[0]}</h4> <h2 id="scoreOne">${gameData.score[0]}</h2>`;
			player2.innerHTML = `<h4 id="playerTwo">${gameData.players[1]}</h4><h2 id="scoreTwo">${gameData.score[1]}</h2>`
		// score.innerHTML = `<div id='scoreBoardO'><h3>SCORE<br> ${gameData.players[0]}:${gameData.score[0]} ${gameData.players[1]}:${gameData.score[1]}</p></div>`;
	}

	(function () {
		document.querySelector('.open').addEventListener('click',function(event){
			event.preventDefault();
			document.getElementById('overlay').className = 'showing';
		});
	
		document.querySelector('.close').addEventListener('click',function(event){
			event.preventDefault();
			document.getElementById('overlay').className = 'hidden';

	
		});
	
		document.addEventListener('keydown', function(event){
			if (event.key === 'Escape') {
				document.getElementById ('overlay').className = 'hidden';
			}
		})


		document.addEventListener('mousedown',function(){
			beepSound.play();
		});
		


	})();
}());