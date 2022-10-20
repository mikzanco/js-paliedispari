// Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma









let parola = prompt('scrivi una parola e ti dirò se è palindroma');

let parolaInversa = invertiParola(parola);

// add .toLowerCase per rendere la parola completamente minuscola
// add .trim per togliere gli spazi 
if(parola.toLowerCase() == parolaInversa.toLowerCase()){
    document.getElementById('check').innerHTML = 'la parola è palindroma'
  } else {
    document.getElementById('check').innerHTML = 'la parola non è palindroma'
  }
  
function invertiParola(str){
  // in questo punto scompongo in array inverto e ricompongo la parola in array. '' lo uso per indicare il punto di divisione
  var strInversa = str.split('').reverse().join('');  
  return strInversa;
}
