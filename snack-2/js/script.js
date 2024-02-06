/*

Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/



// creo una funzione per poter ripetere il ciclo ad ogni click dell'utente sul button
function repeat() {
// Variabile per la somma 
let sum = 0;

// Ciclo 'for'fino a quando il prompt non viene ripetuto per 10 volte
for (let i = 0; i < 10; i++) {
    // Prompt per l'inserimento dati
    let number = (prompt("Inserisci un valore"));

    // conversione della stringa in numeri e somma finale 
    sum = sum + number;
}

// inserisco una condizione 
if (isNaN(sum)) {
        // stampo il risultato 

    // se sum non è un numero allora appare un alert con il seguente messaggio
    alert("HAI INSERITO CARATTERI NON CONSENTITI. INSERIRE UNICAMENTE NUMERI.");
} else {
    // stampo il risultato 
    document.getElementById("result").innerHTML = sum;
}
}
// evento listener per il pulsante
document.getElementById("repeat").addEventListener("click", repeat);

// ripete la funzione al click
repeat();