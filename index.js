var randomNumber1 = Math.floor(Math.random() * 6) + 1;    // 1-6 range
var randomDiceImg = "dice" + randomNumber1 + ".png";      //dice1.png - dice6.png
var randomImgSrc = "images/" + randomDiceImg;             // images/dice1.png - images/dice6.png
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImgSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;         // 1-6 range
randomImgSrc2 = "images/dice" + randomNumber2 + ".png";    // Line 2 + 3 combined
document.querySelectorAll("img")[1].setAttribute ("src", randomImgSrc2);  // Line 4 + 5 combined

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";     //Player 1 wins
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";     //Player 2 wins
}
else {
    document.querySelector("h1").innerHTML = "🎌 Draw 🎌";              // Draw
}