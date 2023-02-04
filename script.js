var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var h2 = document.querySelector("h2");
var button = document.querySelector("button");


function colorToHex(color) {
    const hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function RGBtoHex(red, green, blue){
    return "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue);
}

function matchGradient(){
	var currentcolor = getComputedStyle(body).backgroundImage;
	var matches = currentcolor.match(/\d+/g);
    color1.value = RGBtoHex(Number(matches[0]), Number(matches[1]), Number(matches[2]));
	color2.value = RGBtoHex(Number(matches[3]), Number(matches[4]), Number(matches[5]));
}

function currentGradient(){
	css.textContent = getComputedStyle(body).backgroundImage + ";";
}

function setGradient(){
body.style.background = "linear-gradient(to right," 
	+ color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function randomGradient(){
 const tempcolor1 = Math.floor(Math.random()*16777215).toString(16);
 const tempcolor2 = Math.floor(Math.random()*16777215).toString(16);
 
 body.style.background = "linear-gradient(to right," 
	+ "#" + tempcolor1 + "," + "#" + tempcolor2 + ")";
	css.textContent = body.style.background + ";";

	color1.value = "#" + tempcolor1;
	color2.value = "#" + tempcolor2;
}

matchGradient();

currentGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomGradient);