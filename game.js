function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""
}