// Definizione della funzione repeat
function repeat() {
    // Chiedi all'utente di inserire un numero tramite un prompt
    const number = prompt("Inserisci un numero");

    //  riferimento all'elemento <ul>
    const listElement = document.querySelector("ul");

    // Ciclo per calcolare e visualizzare i cubi dei primi N numeri, dove N è il numero inserito dall'utente
    for (let i = 1; i <= number; i++) {
        // Calcola il cubo del numero corrente
        const cube = i ** 3;

        // Crea un nuovo elemento <li> per ogni cubo calcolato
        const newEl = document.createElement("li");
        newEl.innerText = cube;

        // Aggiungi l'elemento alla lista
        listElement.append(newEl);
    }

    // Aggiorna il testo dell'elemento <h2> per indicare i numeri visualizzati
    document.querySelector("h2").innerText = `Ecco i cubi dei primi ${number} numeri`;
}

// Aggiungi un listener per l'evento click sul pulsante con id "repeat"
// Quando l'utente clicca sul pulsante, la funzione repeat verrà eseguita
document.getElementById("repeat").addEventListener("click", repeat);
