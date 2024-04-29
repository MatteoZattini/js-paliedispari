// chiedo al'utente una parola tramite prompt
let inputUser = prompt("inserisci parola")
console.log(inputUser)
// creo una funzione per controllare se la parola è
// palindroma

let carattere;
let parolaInversa = '';
let i = inputUser.length - 1
while(i >= 0) {
    carattere = inputUser[i];
    parolaInversa += carattere;
    i--;
    console.log(carattere)
}
if (inputUser === parolaInversa){
    console.log("è palindroma")
}
else {
    console.log("non è palindroma")
}

