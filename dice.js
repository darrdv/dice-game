let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1ScoreBoard = document.getElementById("player1ScoreBoard")
const player2ScoreBoard = document.getElementById("player2ScoreBoard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

/* Hook up a click event listener to the Roll Dice Button. */
rollBtn.addEventListener("click", function() {
  const randomNumber = Math.floor(Math.random() * 6) + 1

  if(player1Turn){
    player1Dice.textContent = randomNumber;
    player1Score += randomNumber;
    player1ScoreBoard.textContent = player1Score;
    player1Dice.classList.remove("active")
    player2Dice.classList.add("active")

  }else{
    player2Dice.textContent = randomNumber;
    player2Score += randomNumber;
    player2ScoreBoard.textContent = player2Score;
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
  }

  if(player1Score >= 20){

  }
  else if(player2Score >= 20){

  }

  player1Turn = !player1Turn

});