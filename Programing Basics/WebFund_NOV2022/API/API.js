a sync function displayPokemonData(){
    var pokemon = await getPokemonData(document.querySelector('#pokeSearch').value);
    var pokeDiv = document.querySelector('.pokemonData')
    pokeDiv.Div.innerHTML += '<h1> ${pokemon.name} <h1>';
    pokeDiv.innerHTML += '<img src='${pokemon.sprites.front_default}' alt='${pokemon.name}'>'
}