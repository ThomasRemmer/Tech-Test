import pokemonArr from "./data/pokemon.js"

const container = document.querySelector(".card-container")






pokemonArr.forEach(element => {

    if (element.types.length > 1) {
        
        container.innerHTML += `<div>
        <img src="${element.sprite}">
        <h2>${element.name}</h2>
        <p>${element.name} (#${element.id}) is a ${element.types[0]} & ${element.types[1]} type pokemon.</p>`
        
    }
    
    else {
        container.innerHTML += `<div>
        <img src="${element.sprite}">
        <h2>${element.name}</h2>
        <p>${element.name} (#${element.id}) is a ${element.types[0]} type pokemon.</p>`

    }
    

})

const card = document.querySelectorAll("div")
const text = document.querySelectorAll("p")
const names = document.querySelectorAll("h2")
console.log(text)

card.forEach(block => {
    block.classList.add("card")
    block.classList.add("card__content")

})

text.forEach(content => {
    content.classList.add("card__text")
})

names.forEach(name => {
    name.classList.add("card__heading")
})


