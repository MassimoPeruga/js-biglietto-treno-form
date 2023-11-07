'use strict';

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Previene il comportamento predefinito del modulo

    const inputChilometri = parseFloat(document.getElementById("chilometri").value);
    const inputEta = parseInt(document.getElementById("etaPasseggero").value);
    const prezzoFinale = document.getElementById("prezzoFinale");

    if (!isNaN(inputChilometri) && !isNaN(inputEta)) {
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
        } else if (inputEta >= 65) {
            scontoBiglietto = (prezzoBiglietto / 100) * percentualeScontoOver65;
        }

        prezzoBiglietto -= scontoBiglietto;
        prezzoFinale.textContent = "Prezzo del biglietto: " + prezzoBiglietto.toFixed(2) + " euro";
    } else {
        alert("Non hai inserito un numero.");
    }
});

// Quando viene fatto clic sul pulsante di reset, reimposta il contenuto del paragrafo prezzoFinale
document.getElementById("form").addEventListener("reset", function () {
    document.getElementById("prezzoFinale").textContent = "Prezzo del biglietto: ";
});