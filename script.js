
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() *3);

    if (computerChoice == 0){
        return "Rock";
    } else if (computerChoice == 1) {
        return "Paper";
    } else  {
        return "Scissor";
    }
    
}

// 
function getHumanChoice() {
return prompt("Choose between Rock, Paper or Scissor");
    // return getUserInput;
}
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        
        if (humanChoice == computerChoice)
        {
            return console.log(`You both choose ${humanChoice}! try again.`);
        }
        else if (humanChoice == "Rock" && computerChoice == "Scissor") {
            console.log("User win! Rock Beats scissor");
            return humanScore++;
        } else if(humanChoice == "Paper" && computerChoice == "Rock") {
            console.log("User win! Paper Beats Rock");
            return humanScore++;
        } else if(humanChoice == "Scissor" && computerChoice == "Paper") {
            console.log("User win! Scissor Beats Paper");
            return humanScore++;
        } else if(computerChoice == "Paper" && humanChoice  == "Rock") {
            console.log("Computer win! Paper Beats Rock");
            return computerScore++;
        } else if(computerChoice == "Scissor" && humanChoice == "Paper") {
            console.log("Computer win! Scissor Beats Paper");
            return computerScore++; 
        } else if (computerChoice == "Rock" && humanChoice == "Scissor") {
            console.log("Computer win! Rock beats Scissor ");
            return computerScore++; 
        } else {
            return console.log("Wrong input!");
        }
    }
    playRound(humanSelection,computerSelection)
}
playGame();
// console.log(getHumanChoice());