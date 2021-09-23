fetch('https://pokeapi.co/api/v2/pokemon/?limit=150').then
(function (response) {
  return response.json();
}).then(function (pokemonList) {
  console.log(pokemonList);
}).catch(function () {

});
