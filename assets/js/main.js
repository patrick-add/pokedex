const pokemonsList = document.getElementById("pokemonsList");
const carregarMais = document.getElementById("carregarMais");

const limit = 10;
let offset = 0;

const convertPokemonToLi = (pokemon) => {
  return `
    <li class="pokemon ${pokemon.tipoPrincipal}">
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

const carregandoMaisPokemons = (offset, limit) => {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const novoHtml = pokemons.map(convertPokemonToLi).join("");
    pokemonsList.innerHTML += novoHtml;
  });
};

carregarMais.addEventListener("click", () => {
  carregandoMaisPokemons(offset, limit);
  offset += limit;
});
