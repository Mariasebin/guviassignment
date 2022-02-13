const getPokemon = function getPokemon(number) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector(
        ".detail-img"
      ).innerHTML = ` <img class="detail-image-info" src="
        https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png
      " />`;
      document.querySelector(
        ".detail-info"
      ).innerHTML = ` <div class="info-Name">
      <div><p>Name :</p></div>
      <div><p class="name-value re-but">${data.name}</p></div>
    </div>
    <div class="info-Ability">
      <div><p>Ability :</p></div>
      <div><p class="ability-value re-but">${data.abilities["0"].ability.name}</p></div>
    </div>
    <div class="info-Moves">
      <div><p>Moves :</p></div>
      <div><p class="moves-value re-but">${data.moves["0"].move.name}</p></div>
    </div>
    <div class="info-Weight">
      <div><p>Weight :</p></div>
      <div><p class="weight-value re-but">${data.weight}</p></div>
    </div>`;
    });
};
