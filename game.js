
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    let playerScore = 0
    let computerScore = 0
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
       (playerSelection == 'scissors' && computerSelection == 'paper') ||
       (playerSelection == 'paper' && computerSelection == 'rock')) {
           
           playerScore += 1
           result = ('You win! ' + playerSelection + ' beats ' + computerSelection
           + 'Player score: ' + playerScore + 'Computer score ' + computerScore)

           if (playerScore == 5) {
               result += 'You win! Reload the page to play again'
           }
       }
    
    else if (playerSelection == computerSelection) {
        result = ('A tie! You both chose ' + playerSelection
        + 'Player score: ' + playerScore + 'Computer score ' + computerScore);
    }

    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
        + 'Player score: ' + playerScore + 'Computer score ' + computerScore);
        
        if (computerScore == 5) {
            result += 'You lost! Reload the page to play again'
        }
    }
    
    return result
}

computerSelection = computerPlay();
playerSelection = window.prompt('Please input rock, paper or scissors: ');
console.log(playRound(playerSelection, computerSelection));
