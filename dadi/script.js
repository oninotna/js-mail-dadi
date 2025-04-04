const pcNumber = Math.floor(Math.random() * 7) + 1;
const userNumber = Math.floor(Math.random() * 7) + 1;

console.log(pcNumber);
console.log(userNumber);

if (pcNumber > userNumber) {
  alert("Ha vinto il pc")
}
else {
  alert("Ha vinto l'utente")
}