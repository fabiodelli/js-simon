
//Definisco variabili utili

const containerEl = document.querySelector(".container")
const playEl = document.querySelector(".btn")
const controlEl = document.getElementById("control")


//Dichiaro funzione per generare numeri random diversi tra loro e metterli a schermo

function generate() {
   const randomNumberAr = []
   while (randomNumberAr.length < 5) {
      const randomNumber = Math.floor(Math.random() * 100 + 1)
      const ceck = randomNumberAr.includes(randomNumber)
      if (ceck !== true) {
         randomNumberAr.push(randomNumber)
         const cell = `<div class="cell">${randomNumber}</div>`
         containerEl.innerHTML += (cell)
      }
      console.log(randomNumberAr)
   }
   return randomNumberAr
}


//Creo funzione per far sparire i numeri allo scadere del tempo

function disapper() {
   setTimeout(countDown, 5000)
   function countDown() {
      containerEl.innerHTML = ("")
   }
}

//Chiedo all' utente di inserire i numeri precedentemente visualizzati e li pusho in un array
function startGetNumber() {
   let numberArray = []
   setTimeout(getNumber, 5100)
   function getNumber() {
      for (let i = 1; i <= 5; i++) {
         const number = Number(prompt(`inserisci il ${i}° numero`))
         numberArray.push(number)
      }
      console.log(numberArray)
   }
   return numberArray
}

//Scorro i numeri inseriti e controllo se sono all' interno del array dei numeri random
function control() {
   let correct = []
   for (let i = 0; i < numberArray.length; i++) {
      const currentNumber = numberArray[i];
      const includes = randomNumberAr.includes(currentNumber)
      console.log(includes);
      if (includes === true) {
         correct.push(currentNumber)
      }
      console.log(correct)
   }
   if (correct.length == 5) {
      console.log("hai vinto")
   } else {
      console.log("hai perso")
   }
}


//Richiamo funzione tramite click di un bottone

playEl.addEventListener("click", generate)

playEl.addEventListener("click", disapper)

playEl.addEventListener("click", startGetNumber)

controlEl.addEventListener("click", control)

