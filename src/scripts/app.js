"use strict";

const pokeName = document.querySelector("#pokeName");
const pokeNameDisplay = document.querySelector("#pokeNameDisplay");
const form = document.querySelector("#pokeForm");
const pokeInfo = document.querySelector("#pokeInfo");
const pokeImg = document.querySelector("#pokeImg");
const pokeType = document.querySelector("#pokeType");
const pokeHeight = document.querySelector("#pokeHeight");
const pokeWeight = document.querySelector("#pokeWeight");
const pokeAbilities = document.querySelector("#pokeAbilities");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const pokeValue = pokeName.value;
  fetch(`https://web.mayfly.ovh/proxy/pokeapi.php?endpoint=pokemon/${pokeValue}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      displayPokeInfo(data);
    });
    
});
  
function displayPokeInfo(pokemon) {
  pokeImg.setAttribute("src", pokemon.sprites.front_default);
  pokeImg.setAttribute("alt", pokemon.name);
  pokeNameDisplay.innerText = `Name: ${pokemon.name}`;
  pokeHeight.innerText = `Height: ${pokemon.height}`;
  pokeWeight.innerText = `Weight: ${pokemon.weight}`;
  pokemon.types.forEach((type) => {
    let pokeLi = document.createElement("li");
    pokeLi.innerText = type.type.name;
    pokeType.appendChild(pokeLi);
  });
}