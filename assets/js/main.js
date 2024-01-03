const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const detailHtml = document.getElementsByClassName("content");

const pokemonDetailsContainer = document.getElementById("pokemonDetails");
// const selecaoDePokemon = document.getElementsByClassName('pokemon')
// console.log((selecaoDePokemon));

const maxRecords = 151;
const limit = 10;
let offset = 0;

const onClick = (pokemon) => {
  // console.log(pokemon);
  abrirPaginaDetalhesPokemon(pokemon);
  console.log(abrirPaginaDetalhesPokemon);
}

function abrirPaginaDetalhesPokemon(pokemon) {
  // Construa a URL com parâmetros de consulta para passar os detalhes do Pokémon
  const detalhesPaginaURL = `detalhes_pokemon.html?number=${pokemon.number}&name=${encodeURIComponent(pokemon.name)}&photo=${encodeURIComponent(pokemon.photo)}&types=${encodeURIComponent(JSON.stringify(pokemon.types))}&nomeAbout=${encodeURIComponent(JSON.stringify(pokemon.about_name))}&valueAbout=${encodeURIComponent(JSON.stringify(pokemon.about_value))}`;

  // Abra a página de detalhes em uma nova aba ou janela
  window.open(detalhesPaginaURL, '_blank');
}

function convertPokemonToLi(pokemon, onClick) {
  const div = document.createElement("div");
  div.id = pokemon.number;
  div.className = "botao";

  div.innerHTML = `
      <a class="linkRed" href="detalhes_pokemon.html" target="_blank" rel="noopener noreferrer">
          <li class="pokemon ${pokemon.type}">
              <span class="number">#${pokemon.number}</span>
              <span class="name">${pokemon.name}</span>
              <div class="detail">
                  <ol class="types">
                      ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                  </ol>
                  <img src="${pokemon.photo}" alt="${pokemon.name}">
              </div>
          </li>
      </a>
  `;

  div.addEventListener("click", () =>(onClick(pokemon)));

  return div;
}

function loadPokemonItens(offset, limit, onClick) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
      pokemons.forEach((pokemon) => {
          const pokemonElement = convertPokemonToLi(pokemon, onClick);
          pokemonList.appendChild(pokemonElement);
      });
  });
}

loadPokemonItens(offset, limit, onClick);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const qtdRecordsWithNexPage = offset + limit;
  if (qtdRecordsWithNexPage >= maxRecords) {
      const newLimit = maxRecords - offset;
      loadPokemonItens(offset, newLimit, onClick);
      loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
      loadPokemonItens(offset, limit, onClick);
  }
});




// document.onclick = function(){
//     myFunction();
//    }
   
//    function myFunction() {
//    open("http://google.com.br");
//    }