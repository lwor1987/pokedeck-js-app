fetch('https://pokeapi.co/api/v2/pokemon/').then(function (response) {
  return response.json();
}).then(function (pokemonList) {
  console.log(pokemonList);
}).catch(function () {
  
});
