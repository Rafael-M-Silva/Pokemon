function randomPokemon() {
  var amountPokemon = 1008
  var pokemonRandom = Math.floor(Math.random() * amountPokemon + 1)

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

document.querySelector("#btn").addEventListener("click", () => {
  randomPokemon()
})
