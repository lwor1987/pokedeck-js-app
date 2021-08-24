let pokemonList = [
  {
    name:"Squirtle (height: 0.7)",
    height: 0.7,
   types: ['grass','electric']
 },
  {
    name:"Drowzee (height: 1)",
    height: 1,
   types: ['bug','dragon']
 },
  {
    name:"Pidgeotto (height: 3.7)",
    height: 3.7,
    types: ['normal','flying']
  },
];
console.log(pokemonList);


pokemonList.forEach(function(user) {
  console.log(pokemonList.Name + 'is' + pokemonList.height + 'this tall.')
});
