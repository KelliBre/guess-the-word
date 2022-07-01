//global variables
const guessedLetters = document.querySelector(".guessed-letters");// list where players guessed letters will appear
const guessButton = document.querySelector(".guess");//button 
const guessForm = document.querySelector(".letter"); //entry form for players to enter letters
const remainingGuesses = document.querySelector(".remaining");//paragraph where remaining guesses will appear
const wordProgress = document.querySelector(".word-in-progress")// where guessed correctly guessed letters form word
const remainingGuessSpan = document.querySelector("span");//number of guess remaining span
const messageForGuess = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");//button that will appear to prompt new game
const word = "magnolia";//orginal word before api generator added
//console.log(remainingGuesses);


//function to add placeholder symbols for each individual letter
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
      console.log(letter);
      placeholderLetters.push("●");
    }
    wordProgress.innerText = placeholderLetters.join("");
  };
  
  placeholder(word);

  guessButton.addEventListener("click", function (e) {
    e.preventDefault();//this overides default button reloading behavior
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";
  });//event listener for button click
