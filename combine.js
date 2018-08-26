const choosePikachu = axios.get("https://fizal.me/pokeapi/api/25.json")
const choosePsyduck = axios.get("https://fizal.me/pokeapi/api/54.json")
const chooseMienshao = axios.get("https://fizal.me/pokeapi/api/620.json")

document.getElementById("btn").onclick = function (event) {
    alert("Thank you for joining our community. We hope you enjoy your stay!")
}

// Use axios.all to call all three promises at once. Thank you Pablo.
axios.all([choosePikachu, chooseMienshao, choosePsyduck])
  .then(catchem => {
    poke4 = catchem[0].data; // create constants for each promise which represents a different pokemon
    poke5 = catchem[1].data;
    poke6 = catchem[2].data;

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

    getMoves(poke4);
    getMoves(poke5);
    getMoves(poke6);

    setTimeout(() => {
    
    // the text in the species json is was identical and the ajax call is unreliable similar to the move url -- https://
    let pikachuInfo = "It lives in forests with others. It stores electricity in the pouches on its cheeks."

    // These create an instance of my pokemon objects, displays them to console and adds them to the pokeball container and my trainer object
    let pikachu = new Pokemon(poke4, pikachuInfo);
    console.log(pikachu);
    // getMoves(pikachu, poke4);
    pokeball.add(pikachu);
    // reynaldo.add(pikachu);

    let mienshaoInfo = "Using the long fur on its arms like whips, it launches into combo attacks that, once started, no one can stop."

    let mienshao = new Pokemon(poke5, mienshaoInfo);
    console.log(mienshao);
    pokeball.add(mienshao);
    // reynaldo.add(mienshao);

    let psyduckInfo = "This Pokémon is troubled by constant headaches. The more pain it’s in, the more powerful its psychokinesis becomes."

    let psyduck = new Pokemon(poke6, psyduckInfo);
    console.log(psyduck);
    pokeball.add(psyduck);
    // reynaldo.add(psyduck);

    myPokemom(pikachu);
    myPokemom(psyduck);
    myPokemom(mienshao);
    }, 4000);    
    
  }).catch((error) => {
    console.log(error);
});
