// dichiaro il mio array database
const mailList = [
  "vincenzo.mercadante0@outlook.it",
  "pinco.pallo@user.it",
  "ziopeppo@ziappeppa.it",
];

// inizializzo le costanti degli elementi dell'HTML
const userInput = document.getElementById("user-mail");
const sendButton = document.getElementById("submit-btn");
const checkResult = document.getElementById("result");
const registerButton = document.getElementById("register");

// Creo l'event listener sul buttone
sendButton.addEventListener("click", function () {
  const insertedMail = userInput.value;
  let resultText = "ACCESSO NEGATO - LA TUA MAIL NON E' PRESENTE";

  if (insertedMail) {
    // controllo presenza mail all'interno dell'array
    for (let i = 0; i < mailList.length && resultText !== "BENVENUTO"; i++) {
      if (insertedMail === mailList[i]) {
        resultText = "BENVENUTO";
      }
      console.log(i);
      registerButton.classList.add("d-none");
      registerButton.classList.remove("d-block");
    }

    if (resultText !== "BENVENUTO") {
      registerButton.classList.remove("d-none");
      registerButton.classList.add("d-block");
    }

    checkResult.classList.remove("text-danger");
    userInput.classList.remove("input-error");
  } else {
    checkResult.classList.add("text-danger");
    userInput.classList.add("input-error");
    resultText = "Errore - Si prega di inserire una mail corretta";
  }
  // stampo sulla pagina il risultato
  checkResult.innerText = resultText;
});

registerButton.addEventListener("click", function () {
  const insertedMail = userInput.value;
  mailList.push(insertedMail);
  userInput.value = "";
  checkResult.innerText = "Ti sei registrato correttamente";
  console.log(mailList);
  registerButton.classList.remove("d-block");
  registerButton.classList.add("d-none");
});
