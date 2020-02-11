function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var randomNumber1 = randomInt(1,6);
var randomNumber2 = randomInt(1,6);

var randomName1 = "images/" + "dice" + randomNumber1 + ".png";
var randomName2 = "images/" + "dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute('src', randomName1);
image2.setAttribute('src', randomName1);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

