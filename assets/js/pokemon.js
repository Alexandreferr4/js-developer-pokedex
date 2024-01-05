const urlParams = new URLSearchParams(window.location.search);
const pokemonNumber = urlParams.get("number");
const pokemonName = decodeURIComponent(urlParams.get("name"));
const pokemonPhoto = decodeURIComponent(urlParams.get("photo"));
const pokemonTypes = JSON.parse(decodeURIComponent(urlParams.get("types")));
// const pokemonNameAbout = JSON.parse(decodeURIComponent(urlParams.get("nomeAbout")));
const pokemonNameAbout = JSON.parse(decodeURIComponent(urlParams.get("nomeAbout")));
const pokemonValueAbout = JSON.parse(decodeURIComponent(urlParams.get("valueAbout")));

// const pokemonNameAbout = decodeURIComponent(urlParams.get("nomeAbout")); Funciona
// const pokemonValueAbout = decodeURIComponent(urlParams.get("valueAbout")); Funciona

console.log(pokemonNameAbout);
console.log(pokemonValueAbout);

// Atualizar o conteúdo da página com base nos parâmetros da URL
document.getElementById("pokemonDetails").style.backgroundColor = getBackgroundColor(pokemonTypes);
document.getElementById("pokemonImage").src = pokemonPhoto;
document.getElementById("pokemonNumber").textContent = `#${pokemonNumber}`;
// document.getElementById("nomeAbout").textContent = pokemonNameAbout; // Funciona
// document.getElementById("valueAbout").textContent = pokemonValueAbout; // Funciona


const typesList = document.getElementById("pokemonTypes");
pokemonTypes.forEach((type) => {
  const typeElement = document.createElement("li");
  typeElement.className = `type ${type.toLowerCase()}`;
  typeElement.textContent = type;
  typesList.appendChild(typeElement);
});

const detailName = document.getElementById("nomeAbout");
const detailValue = document.getElementById("valueAbout");


// Utilizar um Set para armazenar valores únicos
const uniquePokemonNameAbout = new Set(pokemonNameAbout);
// const uniquePokemonValueAbout = new Set(pokemonValueAbout);


uniquePokemonNameAbout.forEach((nameAbout) => {
  const aboutNameElement = document.createElement("li");
  aboutNameElement.className = `nameAbout`;
  aboutNameElement.textContent = `${nameAbout} :`;
  detailName.appendChild(aboutNameElement);
});

pokemonValueAbout.forEach((valueAbout) => {
  const aboutValueElement = document.createElement("li");
  aboutValueElement.className = `valueAbout`;
  aboutValueElement.textContent = valueAbout;
  detailValue.appendChild(aboutValueElement);
});



function getBackgroundColor(types) {
  // Escolher a cor de fundo com base no primeiro tipo do Pokémon
  switch (types[0].toLowerCase()) {
    case "normal":
      return "#a6a877";
    case "grass":
      return "#49d0b0";
    case "fire":
      return "#ee4d30";
    case "water":
      return "#678fee";
    case "electric":
      return "#f7cf2e";
    case "ice":
      return "#98d5d7";
    case "ground":
      return "#dfbf69";
    case "flying":
      return "#a98ff0";
    case "poison":
      return "#a040a0";
    case "fighting":
      return "#bf3029";
    case "psychic":
      return "#f65687";
    case "dark":
      return "#725847";
    case "rock":
      return "#b8a137";
    case "bug":
      return "#a8b720";
    case "ghost":
      return "#6e5896";
    case "steel":
      return "#b9b7cf";
    case "dragon":
      return "#6f38f6";
    case "fairy":
      return "#f9aec7";
    default:
      return "#3498db"; // Azul padrão para tipos desconhecidos
  }
}
