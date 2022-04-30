// computer play returns rock, paper, or scissor

var randomNumber = Math.floor(Math.random() * 3)

function computerPlay(){
    if(randomNumber == 0){
        console.log("Computer chooses Rock");
        return "rock";
    }
    if(randomNumber == 1){
        console.log("Computer chooses Paper");
        return "paper";
    }
    if(randomNumber == 2){
        console.log("Computer chooses Scissor")
        return "scissor";
    }
}

var playerSelection = prompt("Choose between rock, paper, or scissor: ").toLowerCase();
function playerInput(){
    
}
var computerSelection = computerPlay();
var playerScore = 0;
var computerScore = 0;

function singleRound(playerSelection , computerSelection){
    var playerSelection = prompt("Choose between rock, paper, or scissor: ").toLowerCase();
    if(playerSelection === computerSelection){
        return "Game Draws";
    }
    if(playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats Rock."
    }
    if(playerSelection === "rock" && computerSelection === "scissor"){
        return "You win! Rock beats Scissor."}

    if(playerSelection === "paper" && computerSelection === "rock"){
        return "You Win! Paper beats Rock."
    }
    if(playerSelection === "paper" && computerSelection === "scissor"){
        return "You Lose! Scissor beats Paper."
    }
    if(playerSelection === "scissor" && computerSelection === "rock"){
        return "You Lose! Rock beats Scissor."
    }
    if(playerSelection === "scissor" && computerSelection === "paper"){
        return "You Win! Scissor beats paper."
    }
    else{
        return "unknonw value! Please only enter rock, paper or scissor!"
    }
}


function game(){
    for (let i = 1; i < 6; i++) {
        singleRound(playerSelection, computerSelection);    
        console.log("Player score is: " + playerScore);
        console.log("Computer score is: " + computerScore);
     }
}

console.log(singleRound(playerSelection, computerSelection));
game();