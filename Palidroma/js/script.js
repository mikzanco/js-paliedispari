// Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma





// trasformo la parola in un array di lettere che compongono la parola.


// parolaDivisa che ora è un array lo giro con il metodo revese


// console.log(parolaDivisa_g);
// unisco di nuovo le lettere che componog l'array per comporre la parola girata.


// console.log(parolaInvertita);
// adesso confornto le due parole.




let parola = prompt('scrivi una parola e ti dirò se è palindroma');

let parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    document.getElementById('check').innerHTML = 'la parola è palindroma'
  } else {
    document.getElementById('check').innerHTML = 'la parola non è palindroma'
  }
  
function invertiParola(str){
  var strInversa = str.split('').reverse().join('');  
  return strInversa;
}



// console.log(parola);