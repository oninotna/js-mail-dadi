const emailNumber = parseInt(prompt("Quante email vuoi inserire alla lista?"));
const emailList = [];

for (i = 0; i < emailNumber; i++) {
let newEmail = prompt("Inserisci l'email");
emailList.push(newEmail);
}

console.table(emailList);

const userEmail = prompt("Ciao, inserisci la tua email");
let isUserEmailPresent = false;

for (i = 0; i < emailList.length; i++) {
  if (userEmail === emailList[i]) {
    isUserEmailPresent = true;
  }
}

if (isUserEmailPresent === true) {
  alert("Bene sei un utente registrato!!");
}
else {
  alert("Purtroppo non sei un utente registrato!!");
}

console.log(userEmail);
console.log(isUserEmailPresent);
