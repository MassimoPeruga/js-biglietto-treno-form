'use strict';

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Previene il comportamento predefinito del modulo

    const inputChilometri = parseFloat(document.getElementById("chilometri").value);
    const inputEta = parseInt(document.getElementById("etaPasseggero").value);
    const prezzoFinale = document.getElementById("prezzoFinale");

    const inputNome = document.getElementById("inputNome").value;
    const inputCognome = document.getElementById("inputCognome").value;
    const infoUtente = document.getElementById("infoUtente");
    const carrozza = document.getElementById("carrozza");
    const codice = document.getElementById("codice");
    let offerta = document.getElementById("offerta");

    let visible = document.getElementById("visible");

    if ((!isNaN(inputChilometri) && !isNaN(inputEta)) && ((inputChilometri > 0) && (inputEta >= 0 && inputEta <= 100))) {
        const prezzoKm = 0.21;
        let prezzoBiglietto = prezzoKm * inputChilometri;
        let scontoBiglietto = 0;

        /* sconti */
        //sconto minorenni
        const percentualeScontoMinorenni = 20;
        //sconto over 65
        const percentualeScontoOver65 = 40;

        if (inputEta < 18) {
            scontoBiglietto = (prezzoBiglietto / 100) * percentualeScontoMinorenni;
            offerta.textContent = "Silver";
        } else if (inputEta >= 65) {
            scontoBiglietto = (prezzoBiglietto / 100) * percentualeScontoOver65;
            offerta.textContent = "Gold";
        }
        else {
            offerta.textContent = "Standard";
        }

        prezzoBiglietto -= scontoBiglietto;
        prezzoFinale.textContent = prezzoBiglietto.toFixed(2) + "€";

        // Mostra nome e cognome inseriti
        infoUtente.textContent = `${inputNome} ${inputCognome}`;

        // Genera un numero casuale da 1 a 20
        const numeroCasuale1a20 = Math.floor(Math.random() * 20) + 1;
        carrozza.textContent = numeroCasuale1a20;

        // Genera un numero casuale di sei cifre
        const numeroCasuale6Cifre = Math.floor(100000 + Math.random() * 900000);
        codice.textContent = numeroCasuale6Cifre;

        visible.className = ("col-12 col-lg-7 p-3 my-auto");
    } else {
        alert("Non hai inserito un numero valido.");
    }
});

// Quando viene fatto clic sul pulsante di reset, reimposta il contenuto del paragrafo
document.getElementById("form").addEventListener("reset", function () {
    visible.classList.add("d-none");

    document.getElementById("prezzoFinale").textContent = "";
    offerta.textContent = "";
    infoUtente.textContent = "";
    carrozza.textContent = "";
    codice.textContent = "";
});