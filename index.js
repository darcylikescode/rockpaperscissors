const choices = ["rock","paper","scissors"]
let winners = [];

function game() {
    for(let i = 0; i <= 5; i++){
        playRound(i);
    }    
    document.querySelector("button").textContent = "Play new game";
    logWins();
}

function playRound(round){
const playerSelection = playerChoice();
const compueterSelection = computerChoice();
const winner = checkWinner(playerSelection, compueterSelection);
winners.push(winner);
logRound(playerSelection, compueterSelection, winner, round)
}

function playerChoice() {
    let input = prompt("Type Rock, Paper or Scissors");
    while(input == null) {
        input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase(); 
    let check = validateInput(input);
    while (check == false) {
        input = prompt("Type Rock, Paper or Scissors. Spelling needs to be exact so please double check your entry");
        while(input == null) {
            input = prompt("Type Rock, Paper or Scissors");
        }
    input = input.toLowerCase();
    check = validateInput(input);
}
return input;

}

function computerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

function validateInput(choice){
     return choices.includes(choice);
     }

function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return 'Tie';
    } else if (
    (choiceP === "rock" && choiceC =="scissors") || 
    (choiceP === "paper" && choiceC =="rock") || 
    (choiceP === "scissors" && choiceC =="paper")
    ) {
        return 'Player';
    } else {
        return 'Computer'
    }
    }

    function logWins() {
let playerWins = winners.filter((item) => item == "Player").length;
let computerWins = winners.filter((item) => item == "Computer").length;
let ties = winners.filter((item) => item == "Tie").length;    
console.log("Results:");
console.log("Player Wins:", playerWins);
console.log("Computer Wins:", computerWins);
console.log("Ties:", ties);

}

function logRound(playerChoice,computerChoice, winner, round) {
    console.log('Round:', round)
    console.log('Computer Chose:',computerChoice)
    console.log('Player Chose:',playerChoice)
    console.log(winner, 'Won the Round')
    console.log("---------------------");

}
