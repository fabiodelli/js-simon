
//Definisco variabili utili

const containerEl = document.querySelector(".container")
const buttonEl = document.querySelector(".btn")
const randomNumberAr = []

//Dichiaro funzione per generare numeri random diversi tra loro e metterli a schermo

function generate (){

while (randomNumberAr.length < 5) {
    const randomNumber = Math.floor(Math.random()*100+1)
    const ceck= randomNumberAr.includes(randomNumber)
    if (ceck !== true) {
       randomNumberAr.push(randomNumber)
       const cell = `<div class="cell">${randomNumber}</div>`
       containerEl.innerHTML += (cell)
    }
}}

//Richiamo funzione tramite click di un bottone

 buttonEl.addEventListener("click",generate) 

 //Creo funzione per far sparire i numeri allo scadere del tempo

 setTimeout 