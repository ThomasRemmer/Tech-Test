import pokemonArr from "./data/pokemon.js"

const container = document.querySelector(".card-container")






pokemonArr.forEach(element => {

    

    if (element.types.length > 1) {
        
        container.innerHTML += `<div class="card">
        <img src="${element.sprite}">
        <div class="card__content">
        <h2 class="card__heading">${element.name.charAt(0).toUpperCase()}${element.name.slice(1)}</h2>
        <p class="card__text">${element.name} (#${element.id}) is a ${element.types[0]} & ${element.types[1]} type pokemon.</p>
        </div>
        <div>`
        
    }
    
    else {
        container.innerHTML += `<div class="card">
        <img src="${element.sprite}">
        <div class="card__content">
        <h2 class="card__heading">${element.name.charAt(0).toUpperCase()}${element.name.slice(1)}</h2>
        <p class="card__text">${element.name} (#${element.id}) is a ${element.types[0]} type pokemon.</p>
        </div>
        <div>`

    }
    

})




