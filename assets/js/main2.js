const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
// const selecaoDePokemon = document.getElementsByClassName('pokemon')
// console.log((selecaoDePokemon));



const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
    <div class="botao">
          <li  class="pokemon ${pokemon.type}">
                  <span class="number">#${pokemon.number}</span>
                  <span class="name">${pokemon.name}</span>
  
                  <div class="detail">
                      <ol class="types">
                          ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                      </ol>
                      <img src="${pokemon.photo}"
                           alt="${pokemon.name}">
                    </div>
          </li>
        </div>
    `
}


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
        // const selecaoDePokemon = document.getElementsByClassName('pokemon')
        // console.log((selecaoDePokemon));

        return selecaoDePokemon, pokemonList;
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit
    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

// pokemonSelecionado = [];

// selecaoDePokemon.addEventListener('click', () => {
//     console.log((selecaoDePokemon));

// })