var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

//detects when a button was clicked, and will append the selected button to our empty array
$(".btn").on("click", function (event) {
	var userChosenColor = event.target.id;
	userClickedPattern.push(userChosenColor);
	playSound(userChosenColor);
	animatePress(userChosenColor);
	checkAnswer(userClickedPattern.length - 1);
});
//function that passes in the color, and plays the sound corresponding with the color
function playSound(name) {
	//select specific music file and play it based on color selected
	var music = new Audio("sounds/" + name + ".mp3");
	music.play();
}

function nextSequence() {
	userClickedPattern = [];

	level++;
	$("#level-title").text("Level " + level);
	//generate random num between 0 and 3
	var randomNumber = Math.floor(Math.random() * 4);
	//select random color from our array
	var randomChosenColor = buttonColors[randomNumber];
	//push the random color onto the array
	gamePattern.push(randomChosenColor);

	//concatanate btn class and color selected and pass into animate
	var selectedButton = ".btn." + randomChosenColor;
	$(selectedButton).fadeOut(100).fadeIn(100);

	//plays sound when random color is chosen
	playSound(randomChosenColor);

	animatePress(randomChosenColor);
}

//function to animate the button with our pressed class
function animatePress(currentColor) {
	var but = $("#" + currentColor).addClass("pressed");
	setTimeout(function () {
		but.removeClass("pressed");
	}, 100);
}

$(document).on("keypress", function () {
	if (started == false) {
		$("h1").text("Level " + level);
		nextSequence();
		started = true;
	}
});

function checkAnswer(currentLevel) {
	if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
		if (userClickedPattern.length === gamePattern.length) {
			setTimeout(function () {
				nextSequence();
			}, 1000);
		}
	} else {
		var music = new Audio("sounds/wrong.mp3");
		music.play();
		var but = $("body").addClass("game-over");
		setTimeout(function () {
			but.removeClass("game-over");
		}, 200);

        $("h1").text("Game Over, Press Any Key to Restart");
		startOver();
	}
}


function startOver(){
    level =0;
    gamePattern = [];
    started = false;
}