M.AutoInit();

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
            // console.log(pokemoves);
            // console.log(`Moves${i}: ${ makingMoves[randMoves].move.name }
            //         Accruacy: ${ pokemoves.accuracy }
            //         Power: ${ pokemoves.power }
            //         Priority: ${ pokemoves.priority }`);

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
    // console.log(pikachu);
    // getMoves(pikachu, poke4);
    pokeball.add(pikachu);
    reynaldo.add(pikachu);

    let mienshaoInfo = "Using the long fur on its arms like whips, it launches into combo attacks that, once started, no one can stop."

    let mienshao = new Pokemon(poke5, mienshaoInfo);
    // console.log(mienshao);
    pokeball.add(mienshao);
    reynaldo.add(mienshao);

    let psyduckInfo = "This Pokémon is troubled by constant headaches. The more pain it’s in, the more powerful its psychokinesis becomes."

    let psyduck = new Pokemon(poke6, psyduckInfo);
    // console.log(psyduck);
    pokeball.add(psyduck);
    reynaldo.add(psyduck);

    myPokemom(pikachu);
    myPokemom(psyduck);
    myPokemom(mienshao);
    }, 4000);    
    
  }).catch((error) => {
    console.log(error);
});

let trainer1 = document.getElementById("trainer-one");

trainer1.innerHTML = (`<li><strong>Name:</strong>${ naruto.name } </li>
<li><strong>Gender:</strong>${ naruto.gender }</li>
<li><strong>Hometown:</strong>${ naruto.hometown }</li>
<li><strong>Occupation:</strong>${ naruto.occupation }</li>`);

let trainer2 = document.getElementById("trainer-two");

trainer2.innerHTML = (`<li><strong>Name:</strong>${ reynaldo.name } </li>
<li><strong>Gender:</strong>${ reynaldo.gender }</li>
<li><strong>Hometown:</strong>${ reynaldo.hometown }</li>
<li><strong>Occupation:</strong>${ reynaldo.occupation }</li>`);


// Found the code for this animation here -- http://tobiasahlin.com/moving-letters/#7
// Wrap every letter in a span
$('.ml7 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: function(el, i) {
      return 50 * i;
    }
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
