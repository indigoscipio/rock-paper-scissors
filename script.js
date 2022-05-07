// computer play returns rock, paper, or scissor
let buttons = document.querySelectorAll(".button");
let playerSelectionDisplay = document.querySelector(".player-selection");
let computerSelectionDisplay = document.querySelector(".computer-selection");
let playerScoreDisplay = document.querySelector(".player-score");
let computerScoreDisplay = document.querySelector(".computer-score");
let body = document.querySelector("body");
let title = document.querySelector("#title");
let restartNotification = document.querySelector("header p");

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerSelection = button.id;
    let computerSelection = computerPlay();
    singleRound(playerSelection, computerSelection);
    isGameOver();
  });
});

function isGameOver() {
  if (playerScore == 5 || computerScore == 5) {
    if (playerScore > computerScore) {
      title.innerText = "Game Over. Player Wins! 🏁";
      body.style.backgroundColor = "var(--green)";
      gameOver = true;
    } else {
      title.innerText = "Game Over. Computer Wins! 🏁";
      body.style.backgroundColor = "var(--red)";
      gameOver = true;
    }
  }
  if (gameOver == true) {
    buttons.forEach((button) => {
      restartNotification.innerText = "Press the R button to restart!";
      button.disabled = true;
      button.style.cursor = "not-allowed";
    });
    document.addEventListener("keydown", (e) => {
      if (e.key == "r" || e.key == "R") {
        location.reload();
      }
    });
  }
}

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

function redFlash() {
  body.style.animation = "red-blink .5s ease-out";
  setTimeout(() => {
    body.style.animation = "";
  }, 500);
}
function greenFlash() {
  body.style.animation = "green-blink .5s ease-out";
  setTimeout(() => {
    body.style.animation = "";
  }, 500);
}

function singleRound(playerSelection, computerSelection) {
  playerSelectionDisplay.innerText = `Player chooses: ${playerSelection}`;
  computerSelectionDisplay.innerText = `Computer chooses: ${computerSelection}`;

  if (playerSelection == computerSelection) {
    console.log("Game Draws");
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      computerScore++;
      redFlash();
    } else {
      playerScore++;
      greenFlash();
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissor") {
      computerScore++;
      redFlash();
    } else {
      playerScore++;
      greenFlash();
    }
  } else if (playerSelection == "scissor") {
    if (computerSelection == "rock") {
      computerScore++;
      redFlash();
    } else {
      playerScore++;
      greenFlash();
    }
  }

  // if (playerSelection === computerSelection) {
  //   console.log("Game Draws");
  // } else if (playerSelection === "rock" && computerSelection === "paper") {
  //   computerScore++;
  //   console.log("You Lose! Paper beats Rock.");
  // } else if (playerSelection === "rock" && computerSelection === "scissor") {
  //   playerScore++;
  //   console.log("You win! Rock beats Scissor.");
  // } else if (playerSelection === "paper" && computerSelection === "rock") {
  //   playerScore++;
  //   console.log("You Win! Paper beats Rock.");
  // } else if (playerSelection === "paper" && computerSelection === "scissor") {
  //   computerScore++;
  //   console.log("You Lose! Scissor beats Paper.");
  // } else if (playerSelection === "scissor" && computerSelection === "rock") {
  //   computerScore++;
  //   console.log("You Lose! Rock beats Scissor.");
  // } else if (playerSelection === "scissor" && computerSelection === "paper") {
  //   playerScore++;
  //   console.log("You Win! Scissor beats paper.");
  // } else {
  //   console.log("unknown value! Please only enter rock, paper or scissor!");
  // }

  playerScoreDisplay.innerText = `Player Score: ${playerScore}`;
  computerScoreDisplay.innerText = `Computer Score: ${computerScore}`;
}

// function game() {
//   for (let i = 1; i < 6; i++) {
//     console.log(`Round ${i}`);
//     singleRound(); // play a single round
//     console.log(
//       `Player score: ${playerScore}, Computer Score: ${computerScore}`
//     );
//   }
//   if (playerScore > computerScore) {
//     console.log("You win!");
//   } else if (computerScore > playerScore) {
//     console.log("You Lose!");
//   } else {
//     console.log("Round Draws!!");
//   }
// }
