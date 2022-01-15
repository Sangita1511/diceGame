//To create a random number we are using math.random()
//1-6 no it will give us
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//concatination dice1.png - dice6.png
var randomDiceImage = "dice" + randomNumber1 + ".png";

//To add the image file by concatination
//images/dice1.png - images/dice6.png
var randomImageSource = "images/" + randomDiceImage;

//selecting the element to change the attribute
var image1 = document.querySelectorAll("img")[0];

//src==what attribute we want to change
//randomImageSource==we want to change to what attribute
image1.setAttribute("src", randomImageSource);

//for image 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

//To show the result
//if player 1 wins
if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "player 1 wins🥳";
}
//if player 2 wins
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "player 2 wins🥳";
}
else
{
    document.querySelector("h1").innerHTML = "Draw";
}