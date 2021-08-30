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
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");

    let listpokemon = document.createElement("li");

    let button = document.createElement("button")
    button.addEventListener('click', () => console.log(pokemon.name));

    button.innerText = pokemon.name;

    button.classList.add("button-class");
    listpokemon.appendChild(button);

    pokemonList.appendChild(listpokemon);
  }
  

  function showDetails(pokemon){
    console.log(pokemon);
  }

  return {
    add : add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
  console.log(pokemon);
});
