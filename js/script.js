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

//! PILLS

// PILL 1:  Dichiara una variabile chiamata greet e assegnale il valore "Ciao, Mondo!". Stampa il valore della variabile in console.

/*
const greet = ("Ciao, Mondo!")

console.log(greet)
*/

/* PILL 2: Dichiara una variabile chiamata greet assegnandole il valore "Ciao Mondo" e stampa il valore in console. 
Poi modifica il valore della variabile greet in modo da ottenere la stringa "Ciao, Mondo! Come stai?". 
Stampa il valore della variabile in console. 
Bonus: Prova a eseguire questo esercizio sia con la concatenazione di stringhe sia con i template literals.
*/

/*
let greet = ("Ciao Mondo")

console.log(greet)

greet = greet + " Come stai?"

console.log(greet)
*/

//PILLS 3 Crea una variabile comparison e assegnale il risultato del confronto tra due numeri per verificare se il primo numero è maggiore del secondo. Stampa sulla console il valore di comparison
/*
const firstNumber = 1;
const secondNumber = 2;

const comparison = firstNumber > secondNumber;
console.log(comparison)
*/