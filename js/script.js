//global variables
const guessedLetterElement = document.querySelector(".guessed-letters");// list where players guessed letters will appear
const guessButton = document.querySelector(".guess");//button 
const guessForm = document.querySelector(".letter"); //entry form for players to enter letters
const remainingGuesses = document.querySelector(".remaining");//paragraph where remaining guesses will appear
const wordProgress = document.querySelector(".word-in-progress")// where guessed correctly guessed letters form word
const remainingGuessSpan = document.querySelector(".remaining span");//number of guess remaining span
const messageForGuess = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");//button that will appear to prompt new game
const word = "magnolia";//orginal word before api generator added
const guessedLetters = [];//empty array for player's guesses
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
  messageForGuess.innerText = "";
  const guess = guessForm.value;
  const goodGuess = validateInput(guess);

  if (goodGuess){
      makeGuess(guess);
  };
  guessForm.value = "";
});//event listener for button click



//function to check player's input in form
const validateInput = function(input){
  const acceptedLetter = /[a-zA-Z]/; //regular expression
  if ( input.length === 0){ //checks if input is not empty
    messageForGuess.innerText ="Please enter a letter.";
  } else if(input.length > 1) { //checks if player enters a single letter
    messageForGuess.innerText = "Please enter single letter.";
  } else if(!input.match(acceptedLetter)){//checks to see it if is a letter
    messageForGuess.innerText = "Please enter a letter from A-Z."
  }else {
  return input;//conditions met player has entered an accepted input
  }
};

const makeGuess = function(guess){
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)){
    messageForGuess.innerText = "You already guessed this letter";
  }else{
    guessedLetters.push(guess);
    console.log(guessedLetters);
  }
}
