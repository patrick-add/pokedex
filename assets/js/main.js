// const pokeApiDet = require("./mainDetalhado");

const pokemonsList = document.getElementById("pokemonsList");
const carregarMais = document.getElementById("carregarMais");
const maximoDePokemon = 151;
const limit = 10;
let offset = 0;

const convertPokemonToLi = (pokemon) => {
  return `
    <li class="pokemon ${pokemon.tipoPrincipal} " >
                <span class="number">#${pokemon.numero}</span>
                <span class="name" onclick="showPokemonDetails('${
                  pokemon.nome
                }')">${pokemon.nome}</span>

                <div class="detail">
                    <ol class="types">
                    ${pokemon.tipos
                      .map((tipo) => `<li class="type ${tipo}">${tipo}</li>`)
                      .join("")}
                    </ol>
                    <img src="${pokemon.foto}" alt="${pokemon.nome}" id="pok">
                </div>
                
            </li>
    `;
};

const carregandoMaisPokemons = (offset, limit) => {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const novoHtml = pokemons.map(convertPokemonToLi).join("");
    pokemonsList.innerHTML += novoHtml;
  });
};

carregandoMaisPokemons(offset, limit);

carregarMais.addEventListener("click", () => {
  offset += limit;
  const total = offset + limit;

  if (total >= maximoDePokemon) {
    const novoLimite = maximoDePokemon - offset;
    carregandoMaisPokemons(offset, novoLimite);

    carregarMais.parentElement.removeChild(carregarMais);
  } else {
    carregandoMaisPokemons(offset, limit);
  }
});

const showPokemonDetails = (pokemonName) => {
  // Redirecionar para a página de detalhes do Pokémon
  window.location.href = `html/pokemonDetalhado.html?pokemon=${encodeURIComponent(
    pokemonName
  )}`;
};
