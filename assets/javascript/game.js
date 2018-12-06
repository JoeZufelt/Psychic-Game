// Array for letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables
var wins = 0;
var losses = 0;
var guesses = 9;
var compGuess = [];
var userGuessA = [];

// HTML variables
var textWins = document.getElementById("textWins");
var textLosses = document.getElementById("textLosses");
var textGuessesLeft = document.getElementById("textGuesses");
var yourGuesses = document.getElementById("yourGuesses");

document.onkeyup = function(event) {
    var userGuess = event.key;
    if (userGuessA.includes(userGuess) === false) {
    var compGuess = letters[Math.floor(Math.random() * letters.length)];

    userGuessA.push(userGuess);

    if (userGuess === compGuess) {
        wins++;
        guesses = 9;
        userGuessA = [];
    } else {
        guesses--;
        if (guesses === 0) {
            losses++;
            userGuessA = [];
            guesses = 9;
        }
    }
    
    textWins.textContent = "Wins: " + wins;
    textLosses.textContent = "Losses: " + losses;
    textGuessesLeft.textContent = "Guesses left: " + guesses;
    yourGuesses.textContent = "Your guesses: " + userGuessA;
    }
};