// const choosePikachu = axios.get("https://fizal.me/pokeapi/api/25.json")
// const choosePsyduck = axios.get("https://fizal.me/pokeapi/api/54.json")
// const chooseMienshao = axios.get("https://fizal.me/pokeapi/api/620.json")

// document.getElementById("btn").onclick = function (event) {
//     alert("Subscribed")
// }

// // Use axios.all to call all three promises at once. Thank you Pablo.
// axios.all([choosePikachu, chooseMienshao, choosePsyduck])
//   .then(catchem => {
//     poke4 = catchem[0].data; // create constants for each promise which represents a different pokemon
//     poke5 = catchem[1].data;
//     poke6 = catchem[2].data;

//     // new ajax request to get moves list for each pokemon - this code was written by Rich but I fully understand how it works 
//     // function getMoves(element) {
//     //   let makingMoves = element.moves;
//     //   let move = [];
//     //   let ctr = makingMoves.length;

//     //   for (let i = 0; i < 4; i++) {
//     //     let randMoves = Math.floor(Math.random() * ctr);
//     //     axios.get(makingMoves[randMoves].move.url)
//     //       .then(function(catchemBonus) {
//     //         let pokemoves = catchemBonus.data;
//     //         // console.log(pokemoves);
//     //         // console.log(`Moves${i}: ${ makingMoves[randMoves].move.name }
//     //         //         Accruacy: ${ pokemoves.accuracy }
//     //         //         Power: ${ pokemoves.power }
//     //         //         Priority: ${ pokemoves.priority }`);

//     //         move.push(`${ makingMoves[randMoves].move.name }: Accuracy: ${ pokemoves.accuracy }, Power: ${ pokemoves.power }, Priority: ${ pokemoves.priority }`);


//     //       }).catch(function (response) {
//     //         console.error(response);
//     //       })
//     //   }
//     //   return element.move = move;
//     // }

//     console.log(poke4);

//     // the text in the species json is was identical and the ajax call is unreliable similar to the move url -- https://
//     let pikachuInfo = "It becomes aggressive when it has electricity stored up. At such times, even its Trainer has to take care to avoid being attacked."

//     // These create an instance of my pokemon objects, displays them to console and adds them to the pokeball container and my trainer object
//     let pikachu = new Pokemon(poke4, pikachuInfo);
//     console.log(pikachu);
//     // getMoves(pikachu, poke4);
//     pokeball.add(pikachu);
//     reynaldo.add(pikachu);

//     let mienshaoInfo = "It lives a quiet life deep in forests where clean rivers flow."

//     let mienshao = new Pokemon(poke5, mienshaoInfo);
//     console.log(mienshao);
//     pokeball.add(mienshao);
//     reynaldo.add(mienshao);

//     let psyduckInfo = "It is told in mythology that this Pokémon was born before the universe even existed."

//     let psyduck = new Pokemon(poke6, psyduckInfo);
//     console.log(psyduck);
//     pokeball.add(psyduck);
//     reynaldo.add(psyduck);

//     myPokemom(pikachu);
//     myPokemom(psyduck);
//     myPokemom(mienshao);
    
//     setTimeout(() => {
//       myMoves(pikachu);
//     }, 9000);    
    
//   }).catch((error) => {
//     console.log(error);
// });
