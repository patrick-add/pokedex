const pokeApi = {};

const converterPokemonDetalhadoParaPokemon = (pokemonDetalhado) => {
  const pokemon = new Pokemon();

  pokemon.numero = pokemonDetalhado.id;
  pokemon.nome = pokemonDetalhado.name;

  const tipos = pokemonDetalhado.types.map((typeSlot) => typeSlot.type.name);
  const [type] = tipos;

  pokemon.tipos = tipos;
  pokemon.tipoPrincipal = type;

  pokemon.foto = pokemonDetalhado.sprites.other.dream_world.front_default;

  return pokemon;
};

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(converterPokemonDetalhadoParaPokemon);
};

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detalhesPokemon) => Promise.all(detalhesPokemon))
    .then((pokemonsDetalhe) => pokemonsDetalhe);
};
