//this is good pratice as it makes sure that the library is ready before attempting to load any scripts
//but if u include the script before the closing body, u dont need to do the ready method
// $(document).ready(function () {
// 	$("h1").css("color", "red");
// });

document.querySelector("h1");

//is nwo this in jquery

$("h1");

//if u wanna select all the buttons
document.querySelectorAll("button");

//is now
$("button");

//mannipualte css styles

// $("h1").css("color", "green");

//if u wanna know what smth is, just only include one parameter
console.log($("h1").css("color"));

//add class to element
//if u wanna add mutiple classes, just put a spcae in quotations
$("h1").addClass("big-title margin-50");

//if u want to see if smth has a class
//$("h1").hasClass("margin-50");
//return true/false if it has it

//to manipulate text in jquery
//1st option
$("h1").text("change the text to goodbye");

//innerHTML is now just html
$("button").html("<em>new Button<em>");

//manipulating attributes like an img, anchor tag, etc
//this gets the value
console.log($("a").attr("href"));

//set the attribute
$("a").attr("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");

//class is also an attribute, this will tell us what classes a element has
console.log($("h1").attr("class"));

//how to add event listeners using jquery
$("h1").click(function () {
	$("h1").css("color", "purple");
});

//this is alt way using the on function as click is depriacted
// $("h1").on("click", function(){
//     $("h1").css("color","purple");
// });

//add event listener to all 5 buttons
//to do it beforehand in normal js
// var btn = document.querySelectorAll("button").length;
// for (var i = 0; i < btn; i++) {
// 	document.querySelectorAll("button")[i].addEventListener("click", function () {
// 		document.querySelector("h1").style.color = "purple";
// 	});
// }

//now to do this in jquery
$("button").click(function () {
	$("h1").css("color", "purple");
});

//if u want to detect keystrokes
$("input").keypress(function (event) {
	//returns the key that was typed in
	console.log(event.key);
});

//if u want to do what we did in the drumset and know what was pressed, u just simply have to put in
//body, or document

//this will display whatever key was pressed into our h1
$(document).keypress(function (event) {
	//returns the key that was typed in
	$("h1").text(event.key);
});

//this is better than keypress/click, on

$(document).on("mouseover", function () {
	$("h1").css("color", "purple");
});

//if u want to add a button before the h1
$("h1").before("<button>New</button>");

//after does the same thing but after
$("h1").after("<button>New</button>");

//this does it into the item just after the opening tag
$("h1").prepend("<button>New</button>");

//this does it into the item just before the closing tag
$("h1").append("<button>New</button>");

{
	/* <h1 class="big-title margin-50" style="color: purple;">
	<button>New</button>change the text to goodbye<button>New</button>
</h1>; */
}

//this gets rid of every button
// $("button").remove();

//animate stuff, hide will hide the element we select - h1 here
// $("button").on("click", function () {
// 	$("h1").hide();
// });

//makes it reappear
// $("button").on("click", function () {
// 	$("h1").show();
// });

//toggle will swap back and forth, so u click on a button it hides it, when u click it again
//it reaappears
// $("button").on("click", function () {
// 	$("h1").hide();
// });

//fadeout is less abrupt than hide, fadein does the same but less abrupt than show
// $("button").on("click", function () {
// 	$("h1").fadeOut();
// });

//they all have toggle options

// $("button").on("click", function () {
// 	$("h1").fadeToggle();
// });

//slideup and slidedown collapses the element selected, slidetoggle works good for dropdown
// $("button").on("click", function () {
// 	$("h1").slideToggle();
// });

//animate is a custom css u can do
//within the curly braces, u can only add things that have numeric value
//cant animate to a color or things like that
// $("button").on("click", function () {
// 	$("h1").animate({opacity: .5});
// });

//if u wanna have more than one animations, u can chain them
$("button").on("click", function () {
	$("h1").slideUp().slideDown().animate({ opacity: 0.3 });
});
