const player1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
};
const player2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
};


let isGameOver = false;
let winScore = 3;
const winningScore = document.querySelector('#winScoreSelect');
const resetButton = document.querySelector('#reset');

player1.button.addEventListener('click', () => {
    updateScore(player1, player2);
});

player2.button.addEventListener('click', () => {
    updateScore(player2, player1);
});

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winScore) {
            isGameOver = true;
            player.button.disabled = true;
            opponent.button.disabled = true;

            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
        }
        player.display.textContent = player.score;
    }
}

resetButton.addEventListener('click', reset);

winningScore.addEventListener('change', () => {
    winScore = parseInt(winningScore.value);
    reset();
})

function reset() {
    for (let p of [player1, player2]) {
        p.score = 0;
        isGameOver = false;
        p.display.textContent = 0;
        p.button.disabled = false;
        p.display.classList.remove('has-text-success', 'has-text-danger');

    }
}