// Document Elements

const textField0 = document.getElementById("text0");
//textField0.innerHTML = showStylizedscore(786);

//internal Variables
let score = 0;

//process (what s going to happen in what sequence?)

// Controllers
function increaseScoreByOne (){
  score++;
  showScore(score);
  updateScoreText(score);
}

//view
function updateScoreText(newText){
  textField0.innerHTML = newText;
}
function updateStatustext(newText){
}
