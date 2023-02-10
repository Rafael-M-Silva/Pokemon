function randomPokemon() {
  var idPokemon = 1008
  var pokemonRandom = Math.floor(Math.random() * idPokemon + 1)

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonRandom}`

  fetch(url)

    .then((response) => {
      return response.json();
    })

    .then((data) => {
     /*  const urlPokemon = data.species.url
          =============== FAZER O ABOUT DO POKEMON ==================
      console.log(urlPokemon); */

      const namePokemon = data.name
      const idPokemon = data.id

      function cardPokemon() {

        document.querySelector("#name").innerHTML = namePokemon
        document.querySelector("#id").innerHTML = 'ID ' + idPokemon
        document.querySelector("img").setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonRandom}.png`)

      }
      return cardPokemon()
    })
}



var i = 1
document.querySelector("#btn").addEventListener("click", () => {
  randomPokemon()
  btnCard.classList.remove("altura")
  btnPlus.classList.remove("btn-none")
  btnPlusMinus.setAttribute("src", "./assets/plus.svg")
  if (i == 2){
    i--
  }
})

const btnCard = document.querySelector("#btn-card")
const btnPlus = document.querySelector("#btn-card")
const btnPlusMinus = document.querySelector("#btn-card button img")

function plusCard() {
  btnPlusMinus.setAttribute("src", "./assets/minus.svg")
  btnCard.classList.toggle("altura")
  if(i == 1){
    btnPlusMinus.setAttribute("src", "./assets/minus.svg")
    i++
  }else {
    btnPlusMinus.setAttribute("src", "./assets/plus.svg")
    i--
  }
}

btnCard.addEventListener("click", () => {
  plusCard()
})


