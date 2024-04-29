// **********************ES PALINDROMI*****************

// // chiedo al'utente una parola tramite prompt
// let inputUser = prompt("inserisci parola")

// // creo una funzione per controllare se la parola è
// // palindroma
// function controlloParola (parola) {

//  // mi creo una variabile d'appoggio
// let ParolaInversa = ""

// // itero la parola carattere per carattere dall'indice più alto
//     for (let i = parola.length - 1; i >= 0; i--) {
//         // sommo carattere per carattere in ordine decrescente dell'index
//         ParolaInversa += parola.charAt(i)
//     }

// // controllo se la parola è palindroma o no
//     if ( inputUser == ParolaInversa ) {
//         return "è palindroma"
//     } else {
//         return "non è palindroma"
//     }
// }

// console.log(controlloParola(inputUser))


// ************ES PARI E DISPARI********************

// chiedo all'utente se pari o dispari
let scelta = prompt("pari o dispari?")

// chiedo all'utente un numero da 1 a 5
let numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"))
console.log(`hai scelto ${scelta} e il tuo numero è ${numeroUtente}`)

// creo una funzione per il numero del computer
function numeroRandom (num1, num2){
    return Math.floor(Math.random() * (num2 - num1 + 1) + num1)
}

// applico la funzione
let numeroComputer = numeroRandom (1, 5)
console.log("numero computer", numeroComputer)

// creo una funzione per determinare pari o dispari
function pariDispari (num1, num2) {
    let somma = num1 + num2

    // creo la condizione
    if (somma % 2 == 0) {
        return "pari"
    } else {
        return "dispari"
    }
}

// applico la funzione paridispari
let risultatoPOD = pariDispari (numeroUtente, numeroComputer)
console.log("risultato somma", risultatoPOD)

// controllo chi ha vinto
if (scelta == risultatoPOD) {
    console.log("vittoria")
} else {
    console.log("sconfitta")
}