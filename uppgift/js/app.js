//variables
//buttons
let button0 = document.getElementById("button0");

//texts
let playerRollText = document.getElementById("playerRollText");

//data
let playerRoll = 0;

//processes
button0.addEventListener("click", function() {
getRandomNumberOneToSixForPlayer();
showPlayerRollResult();
});

//controllers
function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}

//functions
function showPlayerRollResult(){
  playerRollText.innerHTML = playerRoll;
}


