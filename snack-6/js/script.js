/*

Calcola la somma e la media dei primi N numeri.
N è un numero scelto dallo user


*/

// Definizione della funzione repeat
function repeat() {
    // Chiedi all'utente di inserire un numero tramite un prompt
    const userNumber = Number(prompt("Inserisci un numero"));

    // Verifica se il numero inserito dall'utente è valido 
    if (isNaN(userNumber)) {
        // Se il numero non è valido, mostra un messaggio di avviso
        alert("Inserisci un numero valido e positivo.");
   
    } else {
        // Inizializzazione della variabile per la somma dei numeri
        let sum = 0;

        // Calcola la somma dei primi numeri, l'iterazione continua fintanto che `i` è minore o uguale a userNumber.
        for (let i = 0; i <= userNumber; i++) {
            sum += i;
        }

        // Calcola la media dei primi numeri(userNumber value)
        const average = sum / userNumber;

        //  somma dei numeri
        document.getElementById('result').innerHTML = `Somma dei primi ${userNumber} numeri: ${sum}`;

        // la media dei numeri
        document.getElementById('result2').innerHTML = `Media dei primi ${userNumber} numeri: ${average}`;
    }
}

// Aggiunge un listener per l'evento click sul pulsante con id "repeat"
// Quando l'utente clicca sul pulsante, la funzione repeat verrà eseguita
document.getElementById("repeat").addEventListener("click", repeat);
