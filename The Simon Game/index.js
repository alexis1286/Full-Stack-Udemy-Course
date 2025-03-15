// Game variables
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

// Handles user button clicks
$(".btn").on("click", function (event) {
	var userChosenColor = event.target.id;
	userClickedPattern.push(userChosenColor);

	playSound(userChosenColor);
	animatePress(userChosenColor);
	checkAnswer(userClickedPattern.length - 1);
});

// Plays sound based on the given color
function playSound(name) {
	var music = new Audio("sounds/" + name + ".mp3");
	music.play();
}

// Generates the next color in the sequence
function nextSequence() {
	userClickedPattern = [];
	level++;
	$("#level-title").text("Level " + level);

	var randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
	gamePattern.push(randomChosenColor);

	$(".btn." + randomChosenColor).fadeOut(100).fadeIn(100);
	playSound(randomChosenColor);
	animatePress(randomChosenColor);
}

// Animates button press effect
function animatePress(currentColor) {
	var but = $("#" + currentColor).addClass("pressed");
	setTimeout(() => but.removeClass("pressed"), 100);
}

// Starts the game on keypress
$(document).on("keypress", function () {
	if (!started) {
		$("h1").text("Level " + level);
		nextSequence();
		started = true;
	}
});

// Checks user input against the game sequence
function checkAnswer(currentLevel) {
	if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
		if (userClickedPattern.length === gamePattern.length) {
			setTimeout(nextSequence, 1000);
		}
	} else {
		new Audio("sounds/wrong.mp3").play();
		$("body").addClass("game-over");
		setTimeout(() => $("body").removeClass("game-over"), 200);

		$("h1").text("Game Over, Press Any Key to Restart");
		startOver();
	}
}

// Resets game state
function startOver() {
	level = 0;
	gamePattern = [];
	started = false;
}
