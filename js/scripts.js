let pokemonList = [
  {name:'Squirtle', height:0.5, types: ['grass','electric']},
  {name:'Drowzee', height: 1, types: ['bug','dragon']},
  {name:'Pidgeotto', height:3.7, types: ['normal','flying']},
];
console.log(pokemonList);

pokemonList = "Squirtle (height: 0.5)"
document.write(pokemonList);
pokemonList = "Drowzee (height: 1)"
document.write(pokemonList);
pokemonList = "Pidgeotto (height: 3.7)"
document.write(pokemonList);




for (let i = 0 ; i < pokemonList.length; i++){
  //document.write("<p>" + pokemonList[i].name + "</p>");
  if (pokemonList[i].height <3 && pokemonList[i].height >1) {
    console.log(pokemonList[i].height  + "is average");
  }
  else if (pokemonList[i].height < 1){
    console.log(pokemonList[i].height + "is small");
  } else {
    console.log(pokemonList[i].height + "Wow that's big!")
  }
}
