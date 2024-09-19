
const textField0 = document.getElementById("text0");
textField0.innerHTML = showStylizedscore(786);

function showScore(inputNumber){
  return inputNumber * 100; //output is a number.
}

function showStylizedscore(scoreInput){
  return "Your score is:" + scoreInput* 100;
}
