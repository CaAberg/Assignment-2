const secretWords = ["apple", "banana", "orange", "grape", "pear"];

let secretWord = secretWords[Math.floor(Math.random() * secretWords.length)];
let attemptsLeft = secretWord.length;
let secretWordDisplay = "";
let restartCount = 0;
let guessedLetters = [];

for (let i = 0; i < secretWord.length; i++) {
  secretWordDisplay += "_ ";
}
document.getElementById("secretWordDisplay").textContent = secretWordDisplay;

document.getElementById("attemptsLeft").textContent = attemptsLeft;

function isValidInput(input) {
  return /^[a-zA-Z]+$/.test(input);
}

function guessLetter() {
    let guessedLetter = document.getElementById("guessInput").value.toLowerCase();
  
    if (!isValidInput(guessedLetter)) {
      alert("Invalid input! Please enter letters only.");
      return;
    }

    if (guessedLetters.includes(guessedLetter)) {
      alert("You've already guessed this letter!");
      return;
    }

    guessedLetters.push(guessedLetter);
  
    let correctGuess = false;
    let updatedSecretWordDisplay = "";
    for (let i = 0; i < secretWord.length; i++) {
      if (secretWord[i] === guessedLetter) {
        correctGuess = true;
        updatedSecretWordDisplay += guessedLetter + " ";
      } else {
        updatedSecretWordDisplay += secretWordDisplay[i * 2] + " ";
      }
    }
  
    if (correctGuess) {
      alert("Correct guess!");
      secretWordDisplay = updatedSecretWordDisplay;
      document.getElementById("secretWordDisplay").textContent = secretWordDisplay;
    } else {
      alert("Incorrect guess!");
      attemptsLeft--;
      document.getElementById("attemptsLeft").textContent = attemptsLeft;
  
      if (attemptsLeft === 0) {
        alert(`You ran out of attempts! The secret word was: ${secretWord}`);
        restartGame();
      }
    }
  
    if (secretWord === secretWordDisplay.replace(/ /g, "")) {
      alert("Congratulations! You guessed the word!");
      restartGame();
    }
  
    document.getElementById("guessInput").value = "";
  }
  

function restartGame() {

    restartCount++;
    attemptsLeft = secretWord.length;
    document.getElementById("attemptsLeft").textContent = attemptsLeft;
  
    secretWord = secretWords[Math.floor(Math.random() * secretWords.length)];
    secretWordDisplay = "";
    for (let i = 0; i < secretWord.length; i++) {
      secretWordDisplay += "_ ";
    }
    document.getElementById("secretWordDisplay").textContent = secretWordDisplay;
    document.getElementById("guessInput").value = "";
    guessedLetters = [];

    if (restartCount === 10) {
        alert("Are you having fun?");
      }

    if (restartCount === 20) {
        alert("It's time to stop :)")
    }
  }
  

