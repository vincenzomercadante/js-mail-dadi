// dichiarazione costanti con gli elementi di HTML
const userNumberText = document.getElementById("user-number");
const computerNumberText = document.getElementById("computer-number");
const result = document.getElementById("result");
const userButton = document.getElementById("play-button");

// bottone che fa partire il gioco
userButton.addEventListener("click", function () {
  // estraggo il numero dell'utente
  const userNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  userNumberText.innerText = userNumber;
  // estraggo il numero del computer
  const computerNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  computerNumberText.innerText = computerNumber;
  // variabile messaggio stampa
  let gameResult;
  // verifica suò numero maggiore
  if (userNumber > computerNumber) {
    gameResult = "HAi VINTOOOOOO (humans are better)";
  } else if (userNumber < computerNumber) {
    gameResult = "IL COMPUTER VINCEEE (Le macchine ci sostiuranno)";
  } else {
    gameResult = "PAREGGIO! BUUUUUU";
  }
  // stampa in pagina
  result.innerText = gameResult;
});
