// Funzione per confrontare parole
function repeat() {
    // Chiedi all'utente di scrivere due parole
    const writeWord1 = prompt("Scrivi una parola");
    const writeWord2 = prompt("Scrivi un'altra parola");

    // value delle parole
    let word1 = writeWord1;
    let word2 = writeWord2;

   
    const same = word1 + " e " + word2 + " hanno lo stesso numero di lettere!";

    // Controlla quale parola è più lunga o se sono lunghe uguali
    if (word1.length > word2.length) {
        // Se la prima parola è più lunga, mettila nel primo contenitore
        document.getElementById("first-result").innerText = word2;
        // E la seconda nel secondo contenitore
        document.getElementById("second-result").innerText = word1;
    } else if (word1.length < word2.length) {
        // Se la seconda parola è più lunga, mettila nel primo contenitore
        document.getElementById("first-result").innerText = word1;
        // E la prima nel secondo contenitore
        document.getElementById("second-result").innerText = word2;
    } else {
        // Se le parole hanno la stessa lunghezza, stampiamo il valore della variabile same
        document.getElementById("same-result").innerText = same;
       
    }
}

// Aggiungi un event listener al pulsante "Repeat"
document.getElementById("repeat").addEventListener("click", repeat);

// Esegui l'azione iniziale all'avvio dello script
repeat();
