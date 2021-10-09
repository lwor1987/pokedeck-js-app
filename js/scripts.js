let pokemonRepository = (function(){
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150%22';


  function getAll(){
    return pokemonList;
  }

  function add (pokemon) {
    if (
     typeof pokemon === 'object') {
     pokemonList.push(pokemon);
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    listPokemon.classList.add(
      'group-list-item'
    );

    let button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target','#pokemonModal');
    listPokemon.classList.add('group-list-item');
    button.innerText = pokemon.name;

    listpokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);

    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json){
      json.results.forEach(function (item) {
        let pokemon={
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e){
      console.error(e);
    });
  }


// create load function to fetch data
function loadDetails(pokemon) {
  let url = pokemon.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    console.log(details);
    pokemon.imageUrl = details.sprites.front_default;
    pokemon.height = details.height;
    pokemon.weight = details.weight;
    pokemon.types = [...details.types];

  }).catch(function (e) {
    console.error(e);
  });
}


  function showDetails (pokemon) {
    pokemonRepository.loadDetails(pokemon).then
    (function () {
      loadDetails(pokemon).then(function(){
            showModal(pokemon);
      });
    });
  }

  //show modal function

  function showModal(pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');

    modalBody.empty();
    modalTitle.empty();


    let modal= document.createElement('div');
    modal.classList.add('modal');

    modalTitle.text(pokemon.name);

    let titleElement = document.querySelector('.modal-title');
    titleElement.innerText = pokemon.name;

    let pokemonImage = document.createElement('img');
    pokemonImage.classList.add('img-fluid');
    pokemonImage.src = pokemon.imagerUrl;

    let pokemonHeight = document.createElement('p');
     pokemonHeight.innerText = 'Height: ' + pokemon.height;

     let pokemonWeight = document.createElement('p');
     pokemonWeight.innerText = 'Weight: ' + pokemon.weight;

let pokemonTypes = document.createElement('p');
pokemonTypes.innerText = 'Types:  ' + ' ' + pokemon.types.map((t)=> t.type.name).join(',');



    modalBody.append(pokemonHeight);
    modal.append(pokemonWeight);
    modal.append(pokemonImage);
    modal.append(pokemonTypes);

    $('#pokemonModal').modal('toggle');

  }


return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails,
  showModal: showModal,
 };
})();




pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function
    (pokemon){
    pokemonRepository.addListItem(pokemon);
 });
});
