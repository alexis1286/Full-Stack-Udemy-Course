

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
   
  

	if (randomNumber1 > randomNumber2) {
		document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
	} else if (randomNumber1 < randomNumber2) {
		document.querySelector("h1").textContent = "🚩 Player 2 Wins!";
	} else {
		document.querySelector("h1").textContent = "it's a draw!";
	}
 
    var dice = document.querySelectorAll(".dice img");

	dice[0].setAttribute("src", `./images/dice${randomNumber1}.png`);
	dice[1].setAttribute("src", `./images/dice${randomNumber2}.png`);
    