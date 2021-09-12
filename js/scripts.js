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


let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add (pokemon) {
    pokemonList.add(item);
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

  function loadList () {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json){
      json.results.forEach(function (item) {
        let pokemon = {
          name:item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e){
      console.error(e);
    })
  }

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemoRepository.addListItem(pokemon);
  });



function loadDetails(item) {
  let url=item.detailsUrl;
  return Fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    item.imageUrl = details.sprites.front_default;
    item.height = details.types;
  }).catch(function (e) {
    console.erroe(e);
  });
}

function showDetails (item) {
  pokemonRepository.loadDetails(item).then(function () {
    console.log(item);
  });
}

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails
};
})();
