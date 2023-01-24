// IL PROGRAMMA DOVRA' CHIEDERE ALL'UTENTE IL NUMERO DI CHILOMETRI CHE VUOLE
// PERCORRERE E L'ETA' DEL PASSEGGERO.
// SULLA BASE DI QUESTE INFORMAZIONI DOVRA' CALCOLARE IL PREZZO TOTALE DEL VIAGGIO,
// SAPENDO CHE:
//
//  1) IL PREZZO DEL BIGLIETTO E' DEFINITO IN BASE AI KM (0.21€ AL KM)
//  2) SCONTO 20% PER I MINORENNI
//  3) SCONTO 40% PER OVER 65
//  4) IL PREZZO DOVRA' ESSERE INDICATO CON MASSIMO DUE DECIMALI


// SVOLGIMENTO
let outputMessage;
const pricePerKm = 0.21;


// CHIEDERE ALL'UTENTE NUMERO KM
const userTravelKm = parseFloat(prompt("Quanti kilometri devi percorrere?"));
// console.log("I chilometri da percorrere sono " + userTravelKm);


// CHIEDERE ALL'UTENTE ETA'
const userAge = parseInt(prompt("Quanti anni hai?"));
// console.log("L'età dell'utente è " + userAge);


if (!isNaN(userAge) && !isNaN(userTravelKm)) {
    // PREZZO BIGLIETTO CALCOLATO IN BASE AI KM
    let price = userTravelKm * pricePerKm;
    // console.log("Il prezzo del biglietto è € " + price);


    // APPLICARE SCONTO UNDER 18
    if (userAge < 18) {

        // CREAZIONE SCONTO UNDER 18
        const smallDiscountValue = (price * 20) / 100;
        price = price - smallDiscountValue;
        price = price.toFixed(2);

        outputMessage = `Il prezzo scontato per gli under 18 è € ${price}`
        console.log(outputMessage);

    }

    // APPLICARE SCONTO OVER 65
    else if (userAge > 65) {

        // CREAZIONE SCONTO OVER 65
        const bigDiscountValue = (price * 40) / 100;
        price = price - bigDiscountValue;
        price = price.toFixed(2);

        outputMessage = `Il prezzo scontato per gli over 65 è € ${price}`
        console.log(outputMessage);
    }

    // PREZZO PER TUTTI GLI ALTRI UTENTI CHE NON HANNO DIRITTO A SCONTO
    else {
        price = price.toFixed(2);

        outputMessage = `Il prezzo non scontato è € ${price}`
        console.log(outputMessage);
    }

} else {
    outputMessage = "I valori inseriti non sono validi"
    console.log(outputMessage);
}

// SCRIVO NELL'HTML
document.getElementById("price_calculated").innerHTML = outputMessage;