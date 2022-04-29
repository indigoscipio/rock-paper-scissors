// computer play returns rock, paper, or scissor

let randomNumber = Math.floor(Math.random() * 3)

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

let playerSelection = prompt("Choose between rock, paper, or scissor:");
console.log("player chooses " + playerSelection)
function singleRound(playerSelection, computerSelection){

    console.log(computerSelection);
    console.log(playerSelection);
    if(playerSelection == computerSelection){
        return ("It's a Draw!");
    }

}
console.log(computerPlay());
console.log(singleRound());