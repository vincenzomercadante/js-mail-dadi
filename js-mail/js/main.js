const mails = [
  "vincenzo.mercadante0@outlook.it",
  "pinco.pallo@user.it",
  "ziopeppo@ziappeppa.it",
];

// inizializzo le costanti degli elementi dell'HTML
const userInput = document.getElementById("user-mail");
const sendButton = document.getElementById("submit-btn");
const checkResultContainer = document.getElementById("result");
const registerButton = document.getElementById("register");

// event that starts the mail verification
sendButton.addEventListener("click", function () {
  const insertedMail = userInput.value;
  let resultText = "ACCESSO NEGATO - LA TUA MAIL NON E' PRESENTE";
  
  if (insertedMail) {
    removeErrorStyle()
    
    // check if the mail is include in array
    const insertedMailInArray = userInputInArray(insertedMail)

    // changing result based on the result
    if (insertedMailInArray) {
      resultText = "BENVENUTO";
    } else {
      buttonToggleVisibility()
    }

  } else {
    addErrorStyle()
    resultText = "Errore - Si prega di inserire una mail corretta";
  }
  // print the result on page
  checkResult.innerText = resultText;
});

// event handling for the register button which add mail in the array
registerButton.addEventListener("click", function () {
  // get the mail from the input
  const insertedMail = userInput.value;
  // clear the input field
  userInput.value = "";
  // add mail in the array
  mails.push(insertedMail);
  // change result text
  checkResult.innerText = "Ti sei registrato correttamente";
  buttonToggleVisibility()
});

/**
 * 
 * @param {string} userMail represent the mail inserted by the user
 * @returns true or false if the mail is includes in the array or not
 */
function userInputInArray(userMail){
  return mails.includes(userMail)
}


/**
 * Add or remove the register button
 */
function buttonToggleVisibility(){
  if(registerButton.classList.contains('d-none')){
    registerButton.classList.remove("d-none");
    registerButton.classList.add("d-block");
  } else {
    registerButton.classList.add("d-none");
    registerButton.classList.remove("d-block");
  }
}

// add error style in the input and in the result text
function addErrorStyle(){
  checkResult.classList.add("text-danger");
  userInput.classList.add("input-error"); 
}

// remove error styles in the input and in the result text
function removeErrorStyle(){
  checkResult.classList.remove("text-danger");
  userInput.classList.remove("input-error"); 
}


