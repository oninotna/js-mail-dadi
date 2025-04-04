let emailNumber = parseInt(prompt("Quante email vuoi inserire alla lista?"));
const emailList = [];

while (isNaN(emailNumber) || emailNumber <= 0) {
  alert("Devi inserire un carattere numerico!!");
  emailNumber = parseInt(prompt("Quante email vuoi inserire alla lista?"));
}

for (i = 0; i < emailNumber; i++) {
let newEmail = prompt("Inserisci l'email");
emailList.push(newEmail.toLowerCase());
}

console.table(emailList);

const userEmail = prompt("Ciao, inserisci la tua email");
let isUserEmailPresent = false;

for (i = 0; i < emailList.length; i++) {
  if (userEmail.toLowerCase() === emailList[i]) {
    isUserEmailPresent = true;
  }
}

if (isUserEmailPresent === true) {
  console.log(`Ciao ${userEmail}!! sei un utente registrato!!`);
}
else {
  console.log(`Ciao ${userEmail}!! Purtroppo non sei un utente registrato!!`);
}
