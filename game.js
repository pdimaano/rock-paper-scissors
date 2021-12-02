function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
       (playerSelection == 'scissors' && computerSelection == 'paper') ||
       (playerSelection == 'paper' && computerSelection == 'rock')) {
           
           result = ('You win! ' + playerSelection + ' beats ' + computerSelection)
       }
    
    else if (playerSelection == computerSelection) {
        result = ('A tie! You both chose ' + playerSelection)
    }

    else {
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection)
    }
    
    return result
}

const playerSelection = 'paper';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
