// computer play returns rock, paper, or scissor

function computerPlay() {
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    return "rock";
  }
  if (randomNumber == 1) {
    return "paper";
  }
  if (randomNumber == 2) {
    return "scissor";
  }
}

let playerScore = 0;
let computerScore = 0;

function singleRound(playerSelection, computerSelection) {
  computerPlay();
  computerSelection = computerPlay();
  playerSelection = prompt(
    "Choose between rock, paper, or scissor: "
  ).toLowerCase();
  console.log("Player chooses " + playerSelection);
  console.log("Computer chooses " + computerSelection);

  if (playerSelection === computerSelection) {
    console.log("Game Draws");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    console.log("You Lose! Paper beats Rock.");
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    playerScore++;
    console.log("You win! Rock beats Scissor.");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    console.log("You Win! Paper beats Rock.");
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    computerScore++;
    console.log("You Lose! Scissor beats Paper.");
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    computerScore++;
    console.log("You Lose! Rock beats Scissor.");
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    playerScore++;
    console.log("You Win! Scissor beats paper.");
  } else {
    console.log("unknown value! Please only enter rock, paper or scissor!");
  }
}

// console.log(singleRound());

// function game(){
//     singleRound();
//     singleRound();
//     singleRound();
//     singleRound();
//     singleRound();
// }
// console.log(game());

function game() {
  for (let i = 1; i < 6; i++) {
    console.log(`Round ${i}`);
    singleRound(); // play a single round
    console.log(
      `Player score: ${playerScore}, Computer Score: ${computerScore}`
    );
  }
  if (playerScore > computerScore) {
    console.log("You win!");
  } else if (computerScore > playerScore) {
    console.log("You Lose!");
  } else {
    console.log("Round Draws!!");
  }
}

console.log(game());
