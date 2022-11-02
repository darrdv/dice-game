let player1Score = 0;
let player2Score = 0;
let player1Turn = Math.random() > 0.5;

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1ScoreBoard = document.getElementById("player1ScoreBoard")
const player2ScoreBoard = document.getElementById("player2ScoreBoard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showDisplayButton() {
  rollBtn.style.display = "none"
  resetBtn.style.display = "block"
}

function reset(){
  resetBtn.style.display = "none"
  rollBtn.style.display = "block"
  player1Score = 0
  player2Score = 0
  player1Turn = Math.random() > 0.5;
  if(player1Turn){
    message.textContent = "Player 1 Turn"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
  }
  else{
    message.textContent = "Player 2 Turn"
    player1Dice.classList.remove("active")
    player2Dice.classList.add("active")
  }
  player1Dice.textContent = '-'
  player2Dice.textContent = '-'
  player1ScoreBoard.textContent = '0'
  player2ScoreBoard.textContent = '0'
}

/* Hook up a click event listener to the Roll Dice Button. */
rollBtn.addEventListener("click", function() {
  const randomNumber = Math.floor(Math.random() * 6) + 1

  if(player1Turn){
    player1Dice.textContent = randomNumber;
    player1Score += randomNumber;
    player1ScoreBoard.textContent = player1Score;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 Turn";

  }else{
    player2Dice.textContent = randomNumber;
    player2Score += randomNumber;
    player2ScoreBoard.textContent = player2Score;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "Player 1 Turn";
  }

  if (player1Score >= 20) {
    message.textContent = "Player 1 has won! 🥳";
    showDisplayButton();
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 has won! 🎉";
    showDisplayButton();
}

  player1Turn = !player1Turn

});

resetBtn.addEventListener("click", reset);

//improvements

//1.random starts -- sometimes player 2 will start
//'Player 2 will begin' 

//2. Changing the colours

//3. Use dots on dice (flexgrid)