const converterPokemonTypes = (pokemonTypes) => {
  return pokemonTypes.map(
    (typeSlot) => `<li class="type">${typeSlot.type.name}</li>`
  );
};

const convertPokemonToLi = (pokemon) => {
  return `
    <li class="pokemon">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${converterPokemonTypes(pokemon.types).join("")}
                    </ol>
                    
                    <img src="${
                      pokemon.sprites.other.dream_world.front_default
                    }" alt="${pokemon.name}">
                </div>
                
            </li>
    `;
};

const pokemonsList = document.getElementById("pokemonsList");

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonsList.innerHTML += pokemons.map(convertPokemonToLi).join("");
});
