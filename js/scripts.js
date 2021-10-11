let pokemonRepository = (function(){
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150%22';
  let filter = document.querySelector('#filter');


filter.addEventListener('input', function () {
  let pokemons = document.querySelectorAll(".list-item");
  let value = filter.value.toLowerCase();

  pokemons.forEach(function (pokemon) {
    if (pokemon.innerText.toLowerCase().indexOf(value) > -1) {
      pokemon.style.display = '';
    } else {
      pokemon.style.display = 'none';
    }
  });
});



  function add (pokemon) {
     pokemonList.push(pokemon);
  }

  function getAll(){
    return pokemonList;
}




  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('item-button');
    button.classList.add('btn', 'btn-primary');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target','#pokemonModal');
   listItem.classList.add('group-list-item');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);


    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon){
    pokemonRepository.loadDetails(pokemon).then(function () {
      loadDetails(pokemon).then(function (){
      showModal(pokemon);
    });
  });
}



  function showModal(pokemon) {
      //modal title is defined
      let modalBody = $('.modal-body');
      let modalTitle = $('.modal-title');

      modalBody.empty();
      modalTitle.empty();

      let modal = document.createElement('div');
      modal.classList.add('modal');

      modalTitle.text(pokemon.name);

      let titleElement = document.querySelector('.modal-title');
      titleElement.innerText = pokemon.name;

      let pokemonImage = document.createElement('img');
      pokemonImage.classList.add('img-fluid');
      pokemonImage.src = pokemon.imageUrl;

      let pokemonHeight = document.createElement('p');
      pokemonHeight.innerText = 'Height: ' + pokemon.height;

      let pokemonWeight = document.createElement('p');
      pokemonWeight.innerText = 'Weight: ' + pokemon.weight;

      let pokemonTypes = document.createElement('p');
      pokemonTypes.innerText = 'Types: ' + ' ' + pokemon.types.map((t)=> t.type.name).join(',')

      modalBody.append(pokemonHeight);
      modalBody.append(pokemonWeight);
      modalBody.append(pokemonImage);
      modalBody.append(pokemonTypes);

      $('#pokemonModal').modal('toggle');

    }


  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json){
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    })
    .catch(function (e){
      console.error(e);
    });
  }


// create load function to fetch data
function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    console.log(details);
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.weight = details.weight;
    item.types = details.types;

  }).catch(function (e) {
    console.error(e);
  });
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
