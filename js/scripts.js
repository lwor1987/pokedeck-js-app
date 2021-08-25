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


pokemonList.forEach(pokemon => {
  document.write('<p>' + pokemon.name + '</p>');
  if (pokemon.height > 3)
  document.write('<p>' + "Wow that's big!" + '</p>');
  console.log(pokemon);
});

var pokemonRepository = (function () {
  var pokemonList = [
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

  function add (pokemon) {
    pokemonRepository.add(item);
  }
  function getAll(){
    return pokemonList;
    pokemonList.getAll();
  }

  return {
    add : add,
    getAll: getAll
  };
})();

pokemonRepository.forEach(pokemon => {
  console.log(pokemon);
});
