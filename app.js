//*<------------- gloabal variables ------------->*//
//*<----------------------------------------->*//
let characterOne = ''
let characterTwo = ''
//*<------------- querySelectors ------------->*//
//*<----------------------------------------->*//
let userInput = document.querySelector('#userInput');
let searchButton = document.querySelector('#searchButton');
let body = document.querySelector('body');
let img = document.querySelector('#characterImg');
let characterDiv = document.querySelector('#character');
let characterLabel = document.querySelector('#characterLabel');
let characterTitle = document.querySelector('#cardTitle');
let characterInfo = document.querySelector('#characterInfo');
let characterCard = document.querySelector('.card');
let characterCard2 = document.querySelector('#card2');
let movesArrowButton = document.querySelector('#leftArrowButton');
let compareArrowButton = document.querySelector('#rightArrowButton');

let mainPageImg = document.querySelector('#mainPageCards');
let backArrowButton = document.querySelector('#backArrowButton');
let characterCard3 = document.querySelector('.card3');

let characterTitle3 = document.querySelector('#cardTitle3');
let characterInfo3 = document.querySelector('#characterInfo3');
let img3 = document.querySelector('#characterImg3');

let submitInput = document.querySelector("#submit-input")


//~~~~~~~~~~~~~~~~~~Comparison Cards~~~~~~~~~~~~~~~~~~~
let cardGroup = document.querySelector('#cardGroup');
let userInput2 = document.querySelector('#userInput2');
let searchButton2 = document.querySelector('#searchButton2');
let cardGroupImg = document.querySelector('#cardGroupImg');
let cardGroupImg2 = document.querySelector('#cardGroupImg2');
let cardGroupCharacterInfo1 = document.querySelector('#cardGroupInfo1');
let cardGroupCharacterInfo2 = document.querySelector('#cardGroupInfo2');
let cardGroupCharacterName1 = document.querySelector('#cardGroupName1');
let cardGroupCharacterName2 = document.querySelector('#cardGroupName2');
let versus = document.querySelector('#vsdiv');
let versusMovesButton = document.querySelector('#versusMovesButton');
let versusBackButton = document.querySelector('#versusBackButton');
let homeBackButton = document.querySelector('#homeBackButton');


//~~~~~~~~~~~~~~~~~~Moves card~~~~~~~~~~~~~~~~~~~
let characterTitle2 = document.querySelector('#cardTitle2');
let characterInfo2 = document.querySelector('#characterInfo2');
let characterImg2 = document.querySelector('#characterImg2');



//*<------------- API Fetch Call ------------->*//
//*<----------------------------------------->*//

//hiding the cards untill user searches 
characterCard.style.display = "none";
characterCard2.style.display = "none";
characterCard3.style.display = "none";
userInput2.style.display = "none";
searchButton2.style.display = "none";
cardGroup.style.display = "none";
versusMovesButton.style.display = "none";
versusBackButton.style.display = "none";
homeBackButton.style.display = "none" ;


searchButton.addEventListener('click', () => {
 
  //hiding the images on page
  mainPageImg.style.display = "none";
  //hiding search bar and button
  // userInput.style.display = "none";
  // searchButton.style.display = "none";

  fetch(`https://pokeapi.co/api/v2/pokemon/${userInput.value}`)
        .then(function(response){
          if(userInput.value >= 906){
            submitInput.innerText = "Pokemon's over 899 are currently not available or have no moves currently "
        }
              return response.json()
        })
        .then(function(data){
          console.log(data);

          characterOne = data
          
        
          //Resetting character info to search another character
          characterInfo.innerText = "";
          characterTitle.innerHTML = ''
          //setting card img to user's selected character
          img.src = characterOne.sprites.other["official-artwork"].front_default;
          let character1Img = img.src;
          //making the card visible
          characterCard.style.opacity = "10";
          //characters characterOne
          
          characterTitle.innerHTML = `${characterOne.name.toUpperCase()}`;
          characterInfo.innerText += `\n Height: ${characterOne.height}'00"`;
          characterInfo.innerText += `\n Weight: ${characterOne.weight}lbs`;
          characterInfo.innerText += `\n Type: ${characterOne.types[0].type.name.toUpperCase()}`;
          characterInfo.innerText += `\n Abilities: ${characterOne.abilities[0].ability.name}`;
          characterInfo.innerText += `\n Attack: ${characterOne.stats[0].base_stat}` ;
          characterInfo.innerText += `\n Defense: ${characterOne.stats[1].base_stat}`;
          characterInfo.innerText += `\n Special Attack: ${characterOne.stats[2].base_stat}`;
          characterInfo.innerText += `\n Special Defense: ${characterOne.stats[3].base_stat}`; 
          characterInfo.innerText += `\n Speed: ${characterOne.stats[4].base_stat}`;
          
          //resetting the character card
          characterCard.style.display = "";
          //hiding the Moves card
          characterCard2.style.opacity = "0";
          //resetting userInput
          userInput.value = "";
          
          //Moves arrow event listener
          movesArrowButton.addEventListener("click", () => {
          //new image for the moves card
          characterImg2.src = characterOne.sprites.other["official-artwork"].front_default;
          
          //character moves characterOne
          
          characterInfo2.innerText = `${characterOne.name} Moves: \n`;
          characterInfo2.innerText += `\n${characterOne.moves[0].move.name.toUpperCase()} `;
          characterInfo2.innerText = characterOne.moves[0].move.name.toUpperCase() + "\n";
          characterInfo2.innerText = characterOne.moves[0].move.name.toUpperCase() +  "\n";
          characterInfo2.innerText += characterOne.moves[1].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[2].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[3].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[4].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[5].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[6].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[7].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[8].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[9].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[10].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += `\n${characterOne.moves[11].move.name.toUpperCase()}`;
          characterInfo2.innerText += characterOne.moves[12].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[13].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[14].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[15].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[16].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[17].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[18].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[19].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[20].move.name.toUpperCase() + "\n";

          //resetting first character card description
          characterInfo.innerText = "";
          //hiding first character card
          characterCard.style.display = "none";
          //resetting Moves card
          characterCard2.style.display = "";
          //viewing Moves card
          characterCard2.style.opacity = "10";
          //resetting search bar
          userInput.value = "";
      })
     
        backArrowButton.addEventListener("click", () => {
          characterTitle.innerHTML = ""
          characterInfo.innerText = ""
          characterTitle.innerHTML = `${characterOne.name.toUpperCase()}`;
          characterInfo.innerText += `\n Height: ${characterOne.height}'00"`;
          characterInfo.innerText += `\n Weight: ${characterOne.weight}lbs`;
          characterInfo.innerText += `\n Type: ${characterOne.types[0].type.name.toUpperCase()}`;
          characterInfo.innerText += `\n Abilities: ${characterOne.abilities[0].ability.name}`;
          characterInfo.innerText += `\n Attack: ${characterOne.stats[0].base_stat}` ;
          characterInfo.innerText += `\n Defense: ${characterOne.stats[1].base_stat}`;
          characterInfo.innerText += `\n Special Attack: ${characterOne.stats[2].base_stat}`;
          characterInfo.innerText += `\n Special Defense: ${characterOne.stats[3].base_stat}`; 
          characterInfo.innerText += `\n Speed: ${characterOne.stats[4].base_stat}`;

          characterCard.style.display = "";
          
          characterCard2.style.display = "none";
          
          searchButton.disabled = "true";
        })

      compareArrowButton.addEventListener("click", () => {
          cardGroup.style.display = "";
          submitInput.innerText = "Search for your second pokemon";
          
          characterCard.style.display = "none";

          //displaying 2nd search bar
          userInput2.style.display = "";
          searchButton2.style.display = "";
          //hiding 1st search bar
          userInput.style.display = "none";
          searchButton.style.display = "none";

          //setting card img to user's selected character
          // cardGroupImg.src = characterOne.sprites.versions["generation-v"]["black-white"].animated.front_default
          cardGroupImg.src = characterOne.sprites.other["official-artwork"].front_default;
          //making the card visible
          
          //characters characterOne
          resetChar1()
          cardGroupCharacterName1.innerHTML = `${characterOne.name.toUpperCase()}`;
          cardGroupCharacterInfo1.innerText += `\n Height: ${characterOne.height}'00"`;
          cardGroupCharacterInfo1.innerText += `\n Weight: ${characterOne.weight}lbs`;
          cardGroupCharacterInfo1.innerText += `\n Type: ${characterOne.types[0].type.name.toUpperCase()}`;
          cardGroupCharacterInfo1.innerText += `\n Abilities: ${characterOne.abilities[0].ability.name}`;
          cardGroupCharacterInfo1.innerText += `\n Attack: ${characterOne.stats[0].base_stat}` ;
          cardGroupCharacterInfo1.innerText += `\n Defense: ${characterOne.stats[1].base_stat}`;
          cardGroupCharacterInfo1.innerText += `\n Special Attack: ${characterOne.stats[2].base_stat}`;
          cardGroupCharacterInfo1.innerText += `\n Special Defense: ${characterOne.stats[3].base_stat}`; 
          cardGroupCharacterInfo1.innerText += `\n Speed: ${characterOne.stats[4].base_stat}`;

          img3.style.display = "none";
          homeBackButton.style.display = ""
          versusMovesButton.style.display = "";

          homeBackButton.addEventListener("click", () => {
            cardGroup.style.display = "none";
            userInput2.style.display = "none";
            searchButton2.style.display = "none";
            userInput.style.display = "";
            searchButton.style.display = "";
            homeBackButton.style.display = "none";
            versusMovesButton.style.display = "none";
  
            })
            
          //2nd Search Bar Event Listener
       searchButton2.addEventListener('click', () => {

              fetch(`https://pokeapi.co/api/v2/pokemon/${userInput2.value}`)
              .then(function(response2){
                if(userInput.value >= 906){
                  submitInput.innerText = "Pokemon's over 899 are currently not available or have no moves currently "
                    }
                    return response2.json()
              })
              .then(function(data2){
                console.log(data2);
                
                characterTwo = data2

                submitInput.innerText = ''

              characterCard.style.display = "none";
              //characterCard3.style.display = ""
              
              //resetting search bar
              userInput2.value = "";
            
              //2nd Characters characterOne
              
              cardGroupImg2.src = characterTwo.sprites.other["official-artwork"].front_default;
              resetChar2()
              cardGroupCharacterName2.innerHTML = `${characterTwo.name.toUpperCase()}`;
              cardGroupCharacterInfo2.innerText += `\n Height: ${characterTwo.height}'00"`;
              cardGroupCharacterInfo2.innerText += `\n Weight: ${characterTwo.weight}lbs`;
              cardGroupCharacterInfo2.innerText += `\n Type: ${characterTwo.types[0].type.name.toUpperCase()}`;
              cardGroupCharacterInfo2.innerText += `\n Abilities: ${characterTwo.abilities[0].ability.name}`;
              cardGroupCharacterInfo2.innerText += `\n Attack: ${characterTwo.stats[0].base_stat}` ;
              cardGroupCharacterInfo2.innerText += `\n Defense: ${characterTwo.stats[1].base_stat}`;
              cardGroupCharacterInfo2.innerText += `\n Special Attack: ${characterTwo.stats[2].base_stat}`;
              cardGroupCharacterInfo2.innerText += `\n Special Defense: ${characterTwo.stats[3].base_stat}`; 
              cardGroupCharacterInfo2.innerText += `\n Speed: ${characterTwo.stats[4].base_stat}`;

              versusMovesButton.style.display = "";
              homeBackButton.style.display = ""
              userInput2.value = "";

        homeBackButton.addEventListener("click", () => {
              cardGroup.style.display = "none";
              userInput2.style.display = "none";
              searchButton2.style.display = "none";
              userInput.style.display = "";
              searchButton.style.display = "";
              homeBackButton.style.display = "none";
              versusMovesButton.style.display = "none";

          })
            //Character moves
        versusMovesButton.addEventListener("click", () => {

              //resetting the character description info for character moves info 
              cardGroupCharacterInfo1.innerText = "";
              homeBackButton.style.display = "none";
              versusMovesButton.style.display = "none";

              

              //resetting images
              cardGroupImg.src = characterOne.sprites.front_shiny;
              cardGroupImg2.src = characterTwo.sprites.front_shiny;
              resetChar1()
              
              cardGroupCharacterName1.innerHTML = `${characterOne.name.toUpperCase()} Moves: \n`;
              cardGroupCharacterInfo1.innerText += `\n${characterOne.moves[0].move.name.toUpperCase()} `;
              cardGroupCharacterInfo1.innerText = characterOne.moves[0].move.name.toUpperCase() +  "\n";
              cardGroupCharacterInfo1.innerText = characterOne.moves[0].move.name.toUpperCase() +  "\n";
              cardGroupCharacterInfo1.innerText += characterOne.moves[1].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo1.innerText += characterOne.moves[2].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo1.innerText += characterOne.moves[3].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo1.innerText += characterOne.moves[4].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo1.innerText += characterOne.moves[5].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo1.innerText += characterOne.moves[6].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo1.innerText += characterOne.moves[7].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo1.innerText += characterOne.moves[8].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo1.innerText += characterOne.moves[9].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo1.innerText += characterOne.moves[10].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo1.innerText += `\n${characterOne.moves[11].move.name.toUpperCase()}`;
              cardGroupCharacterInfo1.innerText += characterOne.moves[12].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo1.innerText += characterOne.moves[13].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo1.innerText += characterOne.moves[14].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo1.innerText += characterOne.moves[15].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo1.innerText += characterOne.moves[16].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo1.innerText += characterOne.moves[17].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo1.innerText += characterOne.moves[18].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo1.innerText += characterOne.moves[19].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo1.innerText += characterOne.moves[20].move.name.toUpperCase() + "\n";

              //CHARACTER 2
              resetChar2()
              
              cardGroupCharacterInfo2.innerText = ''
              cardGroupCharacterName2.innerText = `${characterTwo.name.toUpperCase()} Moves: \n`;
              cardGroupCharacterInfo2.innerText += `\n${characterTwo.moves[0].move.name.toUpperCase()} `;
              cardGroupCharacterInfo2.innerText = characterTwo.moves[0].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo2.innerText = characterTwo.moves[0].move.name.toUpperCase() +  "\n";
              cardGroupCharacterInfo2.innerText += characterTwo.moves[1].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo2.innerText += characterTwo.moves[2].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo2.innerText += characterTwo.moves[3].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo2.innerText += characterTwo.moves[4].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo2.innerText += characterTwo.moves[5].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo2.innerText += characterTwo.moves[6].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo2.innerText += characterTwo.moves[7].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo2.innerText += characterTwo.moves[8].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo2.innerText += characterTwo.moves[9].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo2.innerText += characterTwo.moves[10].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo2.innerText += `\n${characterTwo.moves[11].move.name.toUpperCase()}`;
              cardGroupCharacterInfo2.innerText += characterTwo.moves[12].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo2.innerText += characterTwo.moves[13].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo2.innerText += characterTwo.moves[14].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo2.innerText += characterTwo.moves[15].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo2.innerText += characterTwo.moves[16].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo2.innerText += characterTwo.moves[17].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo2.innerText += characterTwo.moves[18].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo2.innerText += characterTwo.moves[19].move.name.toUpperCase() + "\n";
              cardGroupCharacterInfo2.innerText += characterTwo.moves[20].move.name.toUpperCase() + "\n";


              userInput2.style.display = 'none'
              searchButton2.style.display = 'none'

              
              characterInfo.innerText = "";
              versusBackButton.style.display = "";

          versusBackButton.addEventListener("click", () => {
                versusMovesButton.style.display = "";
                versusBackButton.style.display = "none";
                cardGroupCharacterInfo1.innerText = "";
                cardGroupCharacterInfo2.innerText = "";
                homeBackButton.style.display = "";
                
                // userInput2.style.display = ''
                // searchButton2.style.display = ''
                
                // cardGroupImg2.src = characterTwo.sprites.other["official-artwork"].front_default;
                cardGroupImg2.src = characterTwo.sprites.other["official-artwork"].front_default;
                cardGroupImg.src = characterOne.sprites.other["official-artwork"].front_default;

                cardGroupCharacterName2.innerHTML = `${characterTwo.name.toUpperCase()}`;
                cardGroupCharacterInfo2.innerText += `\n Height: ${characterTwo.height}'00"`;
                cardGroupCharacterInfo2.innerText += `\n Weight: ${characterTwo.weight}lbs`;
                cardGroupCharacterInfo2.innerText += `\n Type: ${characterTwo.types[0].type.name.toUpperCase()}`;
                cardGroupCharacterInfo2.innerText += `\n Abilities: ${characterTwo.abilities[0].ability.name}`;
                cardGroupCharacterInfo2.innerText += `\n Attack: ${characterTwo.stats[0].base_stat}` ;
                cardGroupCharacterInfo2.innerText += `\n Defense: ${characterTwo.stats[1].base_stat}`;
                cardGroupCharacterInfo2.innerText += `\n Special Attack: ${characterTwo.stats[2].base_stat}`;
                cardGroupCharacterInfo2.innerText += `\n Special Defense: ${characterTwo.stats[3].base_stat}`; 
                cardGroupCharacterInfo2.innerText += `\n Speed: ${characterTwo.stats[4].base_stat}`;
                resetChar1()

                cardGroupCharacterName1.innerHTML = `${characterOne.name.toUpperCase()}`;
                cardGroupCharacterInfo1.innerText += `\n Height: ${characterOne.height}'00"`;
                cardGroupCharacterInfo1.innerText += `\n Weight: ${characterOne.weight}lbs`;
                cardGroupCharacterInfo1.innerText += `\n Type: ${characterOne.types[0].type.name.toUpperCase()}`;
                cardGroupCharacterInfo1.innerText += `\n Abilities: ${characterOne.abilities[0].ability.name}`;
                cardGroupCharacterInfo1.innerText += `\n Attack: ${characterOne.stats[0].base_stat}` ;
                cardGroupCharacterInfo1.innerText += `\n Defense: ${characterOne.stats[1].base_stat}`;
                cardGroupCharacterInfo1.innerText += `\n Special Attack: ${characterOne.stats[2].base_stat}`;
                cardGroupCharacterInfo1.innerText += `\n Special Defense: ${characterOne.stats[3].base_stat}`; 
                cardGroupCharacterInfo1.innerText += `\n Speed: ${characterOne.stats[4].base_stat}`;

                userInput2.style.display = ''
                searchButton2.style.display = ''
              })
            })
        })

            
          })})})})
          userInput.value = "";

                  



          function resetChar1(){
            cardGroupCharacterName1.innerHTML = ""
            cardGroupCharacterInfo1.innerText = ""
            }
            
  
            function resetChar2 (){
              cardGroupCharacterName2.innerHTML = " "
              cardGroupCharacterInfo2.innerText = " "
              
            }

          /*
          MAIN ISSUES
          // */