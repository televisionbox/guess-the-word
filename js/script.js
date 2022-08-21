const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButt = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordProgress = doucment.querySelector(".word-progress");
const remainingGuessesEl = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining-span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

const word = "magonlia";

const placeholder = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
  }
  wordProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButt.addEventListener("click", function (e) {
  e.preventDefault();
  const guess = letterInput.value;
  console.log(guess);
  letterInput.value = "";
});
