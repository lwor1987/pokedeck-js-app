let pokemonList = [
  {name:'Squirtle', height:0.5, types: ['grass','electric']},
  {name:'Drowzee', height: 1, types: ['bug','dragon']},
  {name:'Pidgeotto', height:3.7, types: ['normal','flying']},
];
console.log(pokemonList);

let pokemonName = "Squirtle (height: 0.5)"
document.write(pokemonName);
pokemonName = "Drowzee (height: 1)"
document.write(pokemonName);
pokemonName = "Pidgeotto (height: 3.7)"
document.write(pokemonName);

for(let i=0; i< pokemonList.lenght; i++){
  if (pokemonList[i].height <0 && pokemonList.height[i] >3){
    console.log(pokemonList.height[i].name + "is average");
  }else if (pokemonList[i].height < 1){
    console.log(pokemonList.height[i].name + "is small");
  } else {
    console.log(pokemonList.height[i].name + "Wow that's big!")
  }

}
