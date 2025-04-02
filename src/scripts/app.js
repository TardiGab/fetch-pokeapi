"use strict";

const pokeName = document.querySelector("#pokeName");
// const pokeValue = pokeName.value;
const searchButton = document.querySelector("#searchButton");
const form = document.querySelector("#pokeForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const pokeValue = pokeName.value;
  console.log(pokeValue);
  fetch(`https://web.mayfly.ovh/proxy/pokeapi.php?endpoint=pokemon/${pokeValue}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
});