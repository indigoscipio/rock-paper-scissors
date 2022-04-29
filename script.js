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

var playerSelection = " scissor"
var computerSelection = computerPlay();

function singleRound(playerSelection, computerSelection){
    console.log("player chooses" + playerSelection);
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
}

console.log(singleRound(playerSelection, computerSelection));