// chiedo al'utente una parola tramite prompt
let inputUser = prompt("inserisci parola")

// creo una funzione per controllare se la parola è
// palindroma
function controlloParola (parola) {

 // mi creo una variabile d'appoggio
let ParolaInversa = ""

// itero la parola carattere per carattere dall'indice più alto
    for (let i = parola.length - 1; i >= 0; i--) {
        // sommo carattere per carattere in ordine decrescente dell'index
        ParolaInversa += parola.charAt(i)
    }

// controllo se la parola è palindroma o no
    if ( inputUser == ParolaInversa ) {
        return "è palindroma"
    } else {
        return "non è palindroma"
    }
}

console.log(controlloParola(inputUser))
