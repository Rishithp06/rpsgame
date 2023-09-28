let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

function game(playerMove) {
    let computerMove = getComputerMove();
    let result = '';

    if (playerMove === 'scissor') {
        if (computerMove === 'scissor') {
            result = 'Draw';
        } else if (computerMove === 'paper') {
            result = 'Win';
        } else if (computerMove === 'rock') {
            result = 'Lose';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'Win';
        } else if (computerMove === 'paper') {
            result = 'Draw';
        } else if (computerMove === 'scissor') {
            result = 'Lose';
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Draw';
        } else if (computerMove === 'paper') {
            result = 'Lose';
        } else if (computerMove === 'scissor') {
            result = 'Win';
        }
    }

    if (result === 'Win') {
        score.wins += 1;
    } else if (result === 'Lose') {
        score.losses += 1;
    } else if (result === 'Draw') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement(result, playerMove, computerMove);
}

function getComputerMove() {
    const randomNumber = Math.random();
    let move = '';

    if (randomNumber < 1 / 3) {
        move = 'rock';
    } else if (randomNumber < 2 / 3) {
        move = 'paper';
    } else {
        move = 'scissor';
    }

    return move;
}

function resetGame() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement('', '', '');
}

function updateScoreElement(result, playerMove, computerMove) {
    document.querySelector('.score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Draws: ${score.ties}`;
    document.querySelector('.result').innerHTML = `Result: ${result}`;
    document.querySelector('.move').innerHTML = `Your Move: ${playerMove} Computer Move: ${computerMove}`;
}
