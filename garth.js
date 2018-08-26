M.AutoInit();

// Trainers container class object
class Trainers {
  constructor() {
    this.all = []
  }

  add(trainer) {
    this.all.push(trainer)
  }

  get(name) {
    return this.all.find((element) => {
      return element.name == name
    })
  }
}

// Trainer class object
class Trainer {
  constructor(name, gender, hometown, occupation, pokemon) {
    this.name = name;
    this.gender = gender;
    this.hometown = hometown;
    this.occupation = occupation;
    this.pokemon = [];
  }

  add(pokemon) {
    this.pokemon.push(pokemon)
  }

  get(name) {
    return this.pokemon.find((element) => {
      return element.name == name
    })
  }

}

//new instance of Trainer class 
const naruto = new Trainer("Naruto", "male", "Konaha", "Hokage / Gym Leader / Trainer");

// Pokeball container object
class Pokeball {
  constructor() {
    this.all = []
  }

  add(pokemon) {
    this.all.push(pokemon)
  }

  get(name) {
    return this.all.find((element) => {
      return element.name = name
    })
  }

}

// new instance of pokeball object
const pokeball = new Pokeball();

// Pokemon class object
class Pokemon {
  // constructor(id, name, weight, height, type, hp, attack, defense, abilities) {
  constructor(data, info) {
    // console.log(data);
    this.id = data.id;
    this.name = data.name;
    this.weight = data.weight;
    this.height = data.height;
    this.type = data.types[0].type.name;
    this.hp = data.stats[5].base_stat;
    this.attack = data.stats[4].base_stat;
    this.defense = data.stats[3].base_stat;
    this.abilities = [];
    this.moves = data.move;
    this.info = info;

    // this loops through the abilites array in the promise data and pushes it pushes into the abilities array in the pokemon class object
    for (let i = 0; i < data.abilities.length; i++) {
      this.abilities.push(data.abilities[i].ability.name)
    }
  }
}

// this variable targets an existing element on the index page by ID
let divBox = document.getElementById("box");

// this function displays the pokemon to screen
function myPokemom(pokemon) {
  let myDiv = document.createElement("div");

  let panelColor = "card-panel grey";

  if (pokemon.type === "grass") {
    panelColor = "card-panel green lighten-4";
  } else if (pokemon.type === "electric") {
    panelColor = "card-panel blue lighten-4";
  } else if (pokemon.type === "water") {
    panelColor = "card-panel blue lighten-2";
  } else if (pokemon.type === "fighting") {
    panelColor = "card-panel brown lighten-2";
  } else if (pokemon.type === "normal") {
    panelColor = "card-panel purple lighten-4";
  }

  myDiv.innerHTML = `<div class="row">

      <div class="col l6 s12">
        <div class="${ panelColor }">
          <div class="card">
            <div class="card-image">
              <img src="images/${ pokemon.id }${ pokemon.name }.png" width="400" height="400" alt="">
              <span class="card-title">${ pokemon.name }</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col l6 s12">
        <div class="${ panelColor }">
          <ul class="collapsible">
            <li class="active">
              <div class="collapsible-header">
                <i class="material-icons">star_outline</i>Stats</div>
              <div class="collapsible-body">
                <span>
                  <ul>
                    <li><strong>Name:</strong>   ${ pokemon.name }</li>
                    <li><strong>HP:</strong>  ${ pokemon.hp }</li>
                    <li><strong>Attack:</strong> ${ pokemon.attack }</li> 
                    <li><strong>Defense:</strong> ${ pokemon.defense }</li>
                    <li><strong>Abilities:</strong> ${ pokemon.abilities }</li>
                  </ul>
                </span>
              </div>
            </li>
            <li>
              <div class="collapsible-header">
                <i class="material-icons">list</i>Moves</div>
              <div class="collapsible-body">
                <span>
                  <ul id="moves">
                    <li><strong>Moves:</strong></li>
                    <li>${ pokemon.moves[0] }</li>
                    <li>${ pokemon.moves[1] }</li>
                    <li>${ pokemon.moves[2] }</li>
                    <li>${ pokemon.moves[3] }</li> 
                  </ul>
                </span>
              </div>
            </li>
            <li>
              <div class="collapsible-header">
                <i class="material-icons">info_outline</i>About</div>
              <div class="collapsible-body">
                <span>${ pokemon.info }</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>`;

  divBox.appendChild(myDiv);

  M.AutoInit();

}

// Create constants to hold the three ajax requests
const chooseRaichu = axios.get("https://fizal.me/pokeapi/api/26.json");
const chooseLeafeon = axios.get("https://fizal.me/pokeapi/api/470.json");
const chooseArceus = axios.get("https://fizal.me/pokeapi/api/493.json");

let poke1 = []; // create constants for each promise which represents a different pokemon
let poke2 = [];
let poke3 = [];

// Use axios.all to call all three promises at once. Thank you Pablo.
axios.all([chooseRaichu, chooseLeafeon, chooseArceus])
  .then(catchEm => {
    poke1 = catchEm[0].data; // create constants for each promise which represents a different pokemon
    poke2 = catchEm[1].data;
    poke3 = catchEm[2].data;

    // new ajax request to get moves list for each pokemon - this code was written by Rich but I fully understand how it works 
    function getMoves(element) {
      let makingMoves = element.moves;
      let move = [];
      let ctr = makingMoves.length;

      for (let i = 0; i < 4; i++) {
        let randMoves = Math.floor(Math.random() * ctr);
        axios.get(makingMoves[randMoves].move.url)
          .then(function(catchEmBonus) {
            let pokemoves = catchEmBonus.data;
            console.log(pokemoves);
            console.log(`Moves${i}: ${ makingMoves[randMoves].move.name }
                    Accruacy: ${ pokemoves.accuracy }
                    Power: ${ pokemoves.power }
                    Priority: ${ pokemoves.priority }`);

            move.push(`${ makingMoves[randMoves].move.name }: Accuracy: ${ pokemoves.accuracy }, Power: ${ pokemoves.power }, Priority: ${ pokemoves.priority }`);

            element.move = move;

          }).catch(function (response) {
            console.error(response);
        })
      }
    }

    getMoves(poke1);
    getMoves(poke2);
    getMoves(poke3);

    setTimeout(() => {
    
      // the text in the species json is was identical and the ajax call is unreliable similar to the move url -- https://
    let raichuInfo = "It becomes aggressive when it has electricity stored up. At such times, even its Trainer has to take care to avoid being attacked."

    // These create an instance of my pokemon objects, displays them to console and adds them to the pokeball container and my trainer object
    let raichu = new Pokemon(poke1, raichuInfo);
    console.log(raichu);
    pokeball.add(raichu);
    naruto.add(raichu);

    let leafeonInfo = "It lives a quiet life deep in forests where clean rivers flow."

    let leafeon = new Pokemon(poke2, leafeonInfo);
    console.log(leafeon);
    pokeball.add(leafeon);
    naruto.add(leafeon);

    let arceusInfo = "It is told in mythology that this Pokémon was born before the universe even existed."

    let arceus = new Pokemon(poke3, arceusInfo);
    console.log(arceus);
    pokeball.add(arceus);
    naruto.add(arceus);

    myPokemom(arceus);
    myPokemom(leafeon);
    myPokemom(raichu);
    }, 3000);

  }).catch((error) => {
    console.log(error);
});
