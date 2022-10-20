// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const pariDispari = prompt('scegli e scrivi o pari o dispari.');
// add parseInt per rendere il numero inserito nel prompt un vero numero e non una stringa
const pickNumberU = parseInt(prompt ('scegli un numero da 1 a 5'));

// numPc 
const numPc = getRandomNumber(1, 5);
const somma = pickNumberU + numPc;
const risultato = checkPariDispari(somma);
const vincitore = checkWinner(pariDispari, risultato);

console.log(pickNumberU, numPc, somma, risultato,);
console.log(vincitore);

function getRandomNumber(max, min){
    return Math.floor(Math.random() * (max - min +1)) + min;
    // const randomIndexPc = Math.floor(Math.random() * numeriPc.length);
}

function checkPariDispari(num){
    // operatore ternario: (condizione) ? 'se è vera'  : 'se è falsa';
    if(num % 2) return 'DISPARI';
    return 'PARI';
}

function checkWinner(pariDispari, risultato){
    if(pariDispari.toUpperCase() === risultato) return 'Vince l\'utente';
    return 'Vince il computer';
}