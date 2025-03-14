//event listenr targets this button, it has two parameters, the type, so "click" second is listener
//which is normally a fucntion that is called when the click is decected
// u dont need paranthesis  bc if u do, itll call the function BEFORE the click happens, bc its a method call

//can also be written as anonymous functions like so:
// document.querySelector("button").addEventListener(
// 	"click", function () {
// 		alert("I got clicked");
// 	}
// );


//switch statemnt to detech which key was pressed and make the sound
function makeSound(key) {
	switch (key) {
		case "w":
			var tom1 = new Audio("./sounds/tom-1.mp3");
			tom1.play();
			break;

		case "a":
			var tom2 = new Audio("./sounds/tom-2.mp3");
			tom2.play();
			break;

		case "s":
			var tom3 = new Audio("./sounds/tom-3.mp3");
			tom3.play();
			break;

		case "d":
			var tom4 = new Audio("./sounds/tom-4.mp3");
			tom4.play();
			break;

		case "j":
			var snare = new Audio("./sounds/snare.mp3");
			snare.play();
			break;

		case "k":
			var crash = new Audio("./sounds/crash.mp3");
			crash.play();
			break;

		case "l":
			var kickbass = new Audio("./sounds/kick-bass.mp3");
			kickbass.play();
			break;
		default:
			console.log(btnhtml);
	}
}

var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function () {
		//this is the identiy of the button that triggers the event listener
		var buttonInnerHTML = this.innerHTML;

		makeSound(buttonInnerHTML);
	});
}

//event listener to the keyboard strokes
//passing in "Event" thru a function will let us know which key was pressed on our keytboard

//functions can be passed in, but they can also be callbacks - things called back after an event 
//already happened
document.addEventListener("keydown", function (event) {
	makeSound(event.key);
});
