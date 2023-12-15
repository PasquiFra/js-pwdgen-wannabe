console.log("JS OK");

//! Step 1 / 2

const firstName = prompt("Qual è il tuo nome?" , "Francesco");
const surname = prompt("Il tuo cognome?" , "Pasquinoni");
const color = prompt("Qual è il tuo colore preferito?" , "blu");
let random_Val = ("23");

/* Validazione */
console.log(firstName, surname, color, random_Val);

//! Step 3

const password = firstName + surname + color + random_Val;

/* Validazione */
console.log(password);

//! Step 4 

/* 1 */

const span = document.getElementById("secret-psw");

console.log(span);

/* 2 */ 

span.innerText += password

console.log(span);
