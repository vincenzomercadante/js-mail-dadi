// dichiarazione costanti con gli elementi di HTML
const userNumberText = document.getElementById("user-number");
const computerNumberText = document.getElementById("computer-number");
const result = document.getElementById("result");
const userButton = document.getElementById("play-button");
const main = document.getElementById("main");

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
  let coriandoli;

  // verifica suò numero maggiore
  if (userNumber > computerNumber) {
    gameResult = "HAI VINTOOOOOO (humans are better)";
    coriandoli = true;
    main.classList.add("coriandoli");
  } else if (userNumber < computerNumber) {
    gameResult = "IL COMPUTER VINCEEE (Le macchine ci sostiuranno)";
  } else {
    gameResult = "PAREGGIO! BUUUUUU";
  }

  if (coriandoli) {
    main.classList.add("coriandoli");
  } else {
    main.classList.remove("coriandoli");
  }
  // stampa in pagina
  result.innerText = gameResult;
});
