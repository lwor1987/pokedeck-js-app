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

for (let i = 0 ; i < pokemonList.length; i++){

  document.write('<p>' + pokemonList[i].name + '</p>');
  if (pokemonList[i].height > 3)
  document.write('<p>' + "Wow that's big!" + '</p>');
}

pokemonList.forEach(pokemon => {
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
    pokemonList.push(pokemon);
  }
  function getAll(){
    return pokemonList;
  }

  return {
    add : add,
    getAll: getAll
  };
})();

pokemonRepository.get
