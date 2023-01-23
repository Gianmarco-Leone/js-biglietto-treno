// IL PROGRAMMA DOVRA' CHIEDERE ALL'UTENTE IL NUMERO DI CHILOMETRI CHE VUOLE
// PERCORRERE E L'ETA' DEL PASSEGGERO.
// SULLA BASE DI QUESTE INFORMAZIONI DOVRA' CALCOLARE IL PREZZO TOTALE DEL VIAGGIO,
// SAPENDO CHE:
//
//  1) IL PREZZO DEL BIGLIETTO E' DEFINITO IN BASE AI KM (0.21€ AL KM)
//  2) SCONTO 20% PER I MINORENNI
//  3) SCONTO 40% PER OVER 65
//  4) IL PREZZO DOVRA' ESSERE INDICATO CON MASSIMO DUE DECIMALI


// CHIEDERE ALL'UTENTE NUMERO KM
let userTravelKm = parseFloat(prompt("Quanti kilometri devi percorrere?"));
console.log("I chilometri da percorrere sono " + userTravelKm);

// CHIEDERE ALL'UTENTE ETA'
let userAge = parseInt(prompt("Quanti anni hai?"));
console.log("L'età dell'utente è " + userAge);

// PREZZO BIGLIETTO CALCOLATO IN BASE AI KM
let price = (userTravelKm * 0.21);
console.log("Il prezzo del biglietto è € " + price);

// CREAZIONE SCONTO UNDER 18
const smallDiscount = "20%";
smallDiscountNumeric = parseFloat(smallDiscount);
console.log(typeof smallDiscountNumeric);

// CREAZIONE SCONTO OVER 65
const bigDiscount = "40%";
bigDiscountNumeric = parseFloat(bigDiscount);
console.log(typeof bigDiscountNumeric);



// APPLICARE SCONTO UNDER 18


// APPLICARE SCONTO OVER 65
// INDICARE PREZZO CON MAX 2 DECIMALI