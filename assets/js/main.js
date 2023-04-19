const convertPokemonToLi = (pokemon) => {
  return `
    <li class="pokemon">
                <span class="number">#${pokemon.numero}</span>
                <span class="name">${pokemon.nome}</span>

                <div class="detail">
                    <ol class="types">
                    ${pokemon.tipos
                      .map((tipo) => `<li class="type ${tipo}">${tipo}</li>`)
                      .join("")}
                    </ol>
                    <img src="${pokemon.foto}" alt="${pokemon.nome}">
                </div>
                
            </li>
    `;
};

const pokemonsList = document.getElementById("pokemonsList");

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonsList.innerHTML += pokemons.map(convertPokemonToLi).join("");
});
