// Funzione per far ripetere l'operazione all'utente
function repeat() {
    // Chiedo all'utente di inserire un numero di 4 cifre
    let number = prompt("Inserisci un numero di 4 cifre max");

    // Controllo se il numero inserito ha effettivamente 4 cifre
    if (number.length === 4) {
        // Variabile per la somma delle cifre 
        let sum = 0;

        // Utilizzo un ciclo che itera attraverso le cifre del numero quindi per tutta la lunghezza del numero inserito
        for (let i = 0; i < number.length; i++) {
            // Prendo la cifra ad ogni iterazione e la converto da stringa a numero
            sum = sum + (number[i] * 1);
        }

            // Se 'sum' non è un numero, mostro un alert di errore

        if (isNaN(sum)) {
            alert("HAI INSERITO CARATTERI NON CONSENTITI. INSERIRE UNICAMENTE NUMERI.");
        } else {
            // Altrimenti, mostro la somma delle cifre 
            document.getElementById("result").innerHTML = sum;
        }
    } else {
        // Se il numero inserito non ha 4 cifre, mostro un alert di errore
        alert("Inserisci un numero di 4 cifre valido!");
    }
}

//   listener per pulsante "repeat"
document.getElementById("repeat").addEventListener("click", repeat);

// ripete la funzione al click
repeat();
