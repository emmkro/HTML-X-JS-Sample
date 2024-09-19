// Document Elements

const textField0 = document.getElementById("text0");

// Buttons
const increaseScoreButton= document.getElementById("button0");
//internal Variables
let score = 0;


//process (what s going to happen in what sequence?)
increaseScoreButton.addEventListener("click", ()  => {
  increaseScoreByOne();
  updateScoreText();
  checkScoreForSeven();
});


// Controllers
function increaseScoreByOne (){
  score++;
}

function checkScoreForSeven(){
  if (score >=7 ) {
    changeScoreTextColorToGreen();
  }
}
//view
function updateScoreText(){
  textField0.innerHTML = "Your score is: " + score;
}

function changeScoreTextColorToGreen(){
  textField0.style.color = "green";
}
