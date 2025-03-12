
function rollDice() {
    var diceRoll1 = Math.floor(Math.random() * 6) + 1;

    var diceRoll2 = Math.floor(Math.random() * 6) + 1;
   
  

	if (diceRoll1 > diceRoll2) {
		document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
	} else if (diceRoll1 < diceRoll2) {
		document.querySelector("h1").textContent = "🚩 Player 2 Wins!";
	} else {
		document.querySelector("h1").textContent = "it's a draw!";
	}
 
    var dice = document.querySelectorAll(".dice img");

    dice[0].src = changeImg(diceRoll1);
    dice[1].src = changeImg(diceRoll2);
    
}

function changeImg(dice) {
	if (dice === 1) {
		return "./images/dice1.png";
	} else if (dice === 2) {
		return "./images/dice2.png";
	} else if (dice === 3) {
        return  "./images/dice3.png";
	} else if (dice === 4) {
		return  "./images/dice4.png";
	} else if (dice === 5) {
		return  "./images/dice5.png";
	} else if (dice === 6) {
		return "./images/dice6.png";
	}
}

window.onload = rollDice;
