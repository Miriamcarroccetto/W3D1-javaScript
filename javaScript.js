/* 1- Scrivi una funzione chiamata "crazySum" che riceve 2 numeri interi come parametri. 
La funzione deve ritornare la somma di quei 2 valori, ma se il loro valore è lo stesso, deve ritornare la loro somma moltiplicata per 3.
*/

/*let num1 = 72
let num2 = 25

function crazySum (a,b){
  if (a !== b) {
    console.log ("I tuoi valori sono diversi quindi il risultato è" + " " + ((a + b)))
  
  } else if (a === b) {
    console.log ("I tuoi valori sono uguali quindi il risultato è" + " " + ((a + b)*3))
  }
}

crazySum (num1,num2)
*/




/* 2- Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100
o se è esattamente uguale a 400 */

 
/*let numero = 150

function boundary (number) {
  if (number === 400) {
    console.log ("Il tuo valore è valido e corrisponde a"+ " " + number)
  } else if (number>20) {
    console.log ("Il tuo numero è valido ed è"+ " "+ number)
  } else if (number<20) {
    console.log ("Il tuo numero non è valido perchè è"+" "+ number)
  } else if (number<100) {
    console.log ("Il tuo numero è valido ed è" +" " + number)
  } else if (number>100) {
    console.log ("Il tuo numero non è valido perchè è"+" "+ number)
  } else {
    console.log ("Valore non valido")
  }
}

boundary (numero)
*/


/* 3- Scrivi una funzione chiamata "reverseString" che accetta una stringa come parametro e la ritorna invertita.
Suggerimento: trasforma la stringa in array per poterla invertire facilmente*/

/*const continenti = ["O","c","e","a","n","i","a"]
let mondo = reverseString (continenti)
let inverso = mondo.reverse()



function reverseString (parola) {
  return parola
}

console.log (inverso)
*/


/* 4- Scrivi una funzione chiamata "upperFirst" che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola
*/


/*let parola = "Oceania"
let continente = upperFirst (parola)
let testo = continente.toUpperCase()

function upperFirst (maiuscola) {
  return maiuscola
}

console.log (testo)

*/



/* 5- Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e un array contenente n numeri random contenuti tra 0 e 10*/

/*function giveMeRandom (n, [a,b,c,d]) {
  

} ??????
*/


/* ESERCIZI EXTRA */

/* 1- Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19
Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3
*/

/*let numero = 18
function crazyDiff (n) {
  if (n > 19) { 
    let risultato = (n+19)*3
    console.log ("Il tuo risultato sarà questo" + " " + risultato)
 
  } else {
    console.log ("Il numero da te scelto è" +" " + n)
  }
}

crazyDiff (numero)
*/

/* 2- Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare 
il risultato, ma se la stringa fornita comincia proprio con "code" allora
deve ritornarla senza modifiche*/

/*const word = ["coccodrillo"]

function codify (parola) {
  if (parola.includes("code")) {
    console.log (parola)
  } else {
    console.log (parola.unshift("code"))
  }

}

codify (word)
*/



