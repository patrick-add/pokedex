const pokemonsList = document.getElementById("pokemonsList");

const convertPokemonToLi = (pokemon) => {
  return `
    <li class="pokemon ${pokemon.types[0].type.name}">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                    ${pokemon.types
                      .map(
                        (tipo) =>
                          `<li class="type ${tipo.type.name}">${tipo.type.name}</li>`
                      )
                      .join("")}
                    </ol>
                    <img src="${
                      pokemon.sprites.other.dream_world.front_default
                    }" alt="${pokemon.name}">
                </div>
                <div class="dados">
                    <h2> Sobre </h2>
                    <hr color="grey" size="1" width="100%" >
                    <h3 class="info"> Altura: </h3> <h3 class="dado"> ${(
                      pokemon.height / 10
                    ).toFixed(2)} cm </h3>
                    <h3 class="info"> Peso: </h3> <h3 class="dado"> ${(
                      pokemon.weight / 10
                    ).toFixed(1)} kg </h3>
                    <h3 class="info"> Habilidades: </h3>
                    <ul class="habilidades">
                    ${pokemon.abilities
                      .map(
                        (habilidade) => `<li>${habilidade.ability.name}</li>`
                      )
                      .join("")}
                    </ul>
                    
                    
                </div>

            </li>
    `;
};

const pokeApiDet = {};

pokeApiDet.getPokemons = (name) => {
  const url = `https://pokeapi.co/api/v2/pokemon/4`;
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => convertPokemonToLi(jsonBody))
    .then((pokemon) => (pokemonsList.innerHTML += pokemon));
};

pokeApiDet.getPokemons();
