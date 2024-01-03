const detalhesPokemon = document.getElementById('detalhesPokemon')



function statusPokemon(pokemon) {
    return `
        <div>
            teste
            "${pokemon.about_name}"
            "${pokemon.about_value}"
        </div>
    `
}


function loadPokemonStatus() {
    pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = onClick.map(statusPokemon).join('')
    detalhesPokemon.innerHTML += newHtml
    })
}

loadPokemonStatus()