const userDice = document.getElementById("user-number");
const computerDice = document.getElementById("computer-number");
const matchWinner = document.getElementById("result");
const playButton = document.getElementById("play-button");
const main = document.getElementById("main");

// bottone che fa partire il gioco
playButton.addEventListener("click", function () {
  
  // user throw the dice
  const userNumber = generateNumberBetweenOneAndSix();
  userDice.innerHTML = generateDice(userNumber);
  
  // computer throw the dice
  const computerNumber = generateNumberBetweenOneAndSix();
  computerDice.innerHTML =  generateDice(computerNumber);

  // stampa in pagina
  matchWinner.innerText = getMatchWinner(userNumber, computerNumber);
  matchWinner.style.display = "inline-block";
});

/**
 * 
 * @returns dice icon equals to the number generated
 */
function generateDice(diceNumber){
    return `<i class="bi bi-dice-${diceNumber}-fill">`
}


function generateNumberBetweenOneAndSix(){
  return Math.floor(Math.random() * (6 - 1 + 1) + 1)
}

function getMatchWinner(userNumber, computerNumber){
    // variabile messaggio stampa
    return userNumber > computerNumber ? "HAI VINTO!" : userNumber < computerNumber ? "IL COMPUTER VINCE!" : "PAREGGIO!";
}