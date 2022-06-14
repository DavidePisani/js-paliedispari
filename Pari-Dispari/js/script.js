// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let evenOrOdd = prompt('Dimmi pari o dispari');

while (evenOrOdd !== 'pari' && evenOrOdd !== 'dispari') {  
        evenOrOdd = prompt('Dimmi pari o dispari?');
     } 

let userNumber = parseInt(prompt('Dimmi un numero'));

while (userNumber < 1 || userNumber > 5) {    
        userNumber = parseInt(prompt('Dimmi un numero'));
}

let somma = sommaDueNumeri(userNumber, getRndInteger(1, 5));
const sommaEvenOrOdd = pariDispari(somma);

if(sommaEvenOrOdd === evenOrOdd) {
    alert('Hai vinto');
} else {
    alert('Hai perso');
}
// Funzione che genera un numero random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;   
}
// funzione per fare la somma del userNumber e del getRndInteger
function sommaDueNumeri(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

// Funzione che verifica se la somma di userNumber e getRndInteger è pari o dispari
function pariDispari (number) {
    let evenOrOdd;
    
    if(number % 2 === 0) {
        evenOrOdd = 'pari'
    } else {
        evenOrOdd = 'dispari';
    }

    return evenOrOdd;
}




