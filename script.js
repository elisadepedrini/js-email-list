/* Descrizione

Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus

- Abbellire con CSS o Bootstrap
- Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre) */



const ulEl = document.querySelector('ul')
const btnEl = document.getElementById('btn')
const tdEl = document.querySelectorAll('td')

// 👉🏼ESERCIZIO BASE

/* for (let i = 0; i < 10; i++) {
    
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => response.json())
    .then(data => {
        const email = data.response

        const listEl = document.createElement('li')
        ulEl.appendChild(listEl)
        listEl.innerHTML = email
    }  
)} */


// 👉🏼ESERCIZIO CON BUTTON

/* btnEl.addEventListener("click", function() {
    for (let i = 0; i < 10; i++) {
        
        ulEl.innerHTML = " "
        fetch("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response => response.json())
        .then(data => {
            const email = data.response
            
            const listEl = document.createElement('li')
            ulEl.appendChild(listEl)
            listEl.innerHTML = email
        }  
    )}
}) */


// 👉🏼ESERCIZIO CON TABLE

btnEl.addEventListener("click", function() {
    for (let i = 0; i < 10; i++) {
        
        ulEl.innerHTML = " "
        fetch("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response => response.json())
        .then(data => {
            const email = data.response
            
            tdEl[i].innerHTML = email
        }  
    )}
})