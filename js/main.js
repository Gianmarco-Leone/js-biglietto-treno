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
price = price.toFixed(2);
console.log("Il prezzo del biglietto è € " + price);


// CREAZIONE SCONTO UNDER 18
const smallDiscountValue = (price * 20) / 100;
let priceUnder = price - smallDiscountValue;


// CREAZIONE SCONTO OVER 65
const bigDiscountValue = (price * 40) / 100;
let priceOver = price - bigDiscountValue;



// APPLICARE SCONTO UNDER 18
if (userAge < 18) {
    let priceUnder = price - smallDiscountValue;
    priceUnder = priceUnder.toFixed(2);
    console.log("Il prezzo scontato per l'under 18 è €" + priceUnder);
    // Scrivo nell'HTML
    document.getElementById("price_calculated").innerHTML = ("Usufruendo dello sconto Under 18, il prezzo del suo biglietto è € " + priceUnder);
}
// APPLICARE SCONTO OVER 65
else if (userAge > 65) {
    let priceOver = price - bigDiscountValue;
    priceOver = priceOver.toFixed(2);
    console.log("Il prezzo scontato per l'over 65 è €" + priceOver);
    // Scrivo nell'HTML
    document.getElementById("price_calculated").innerHTML = ("Usufruendo dello sconto Over 65, il prezzo del suo biglietto è € " + priceOver);
}
// PREZZO PER TUTTI GLI ALTRI UTENTI CHE NON HANNO DIRITTO A SCONTO
else {
    let price = (userTravelKm * 0.21);
    price = price.toFixed(2);
    console.log("Il prezzo non scontato è €" + price);
    // Scrivo nell'HTML
    document.getElementById("price_calculated").innerHTML = ("Il prezzo del suo biglietto è € " + price);
}