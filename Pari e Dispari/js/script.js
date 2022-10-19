// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const pariDispari = prompt('scegli e scrivi o pari o dispari.');
const pickNumberU = prompt ('scegli un numero da 1 a 5');
console.log(pariDispari);
console.log(pickNumberU);
const numeriPc = [1, 2, 3, 4, 5];

const randomIndexPc = Math.floor(Math.random() * numeriPc.length);
    console.log(randomIndexPc);

    let

function pcPickNumber(){
    
    
    if (([pickNumberU + randomIndexPc] % 2 === 0) && (pariDispari === 'pari')) {
        
        return 'hai vinto';
    
    }else if (!([pickNumberU + randomIndexPc] % 2 === 0) && (pariDispari === 'dispari')) {
        
        return 'hai vinto';
    }else{
        return 'ha vinto il pc';
    }
}