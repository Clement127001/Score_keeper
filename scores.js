const player1 = {
    score: 0,
    display: document.querySelector('#p1Display'),
    button: document.querySelector('#p1Button')
};

const player2 = {
    score: 0,
    display: document.querySelector('#p2Display'),
    button: document.querySelector('#p2Button')
};

//winning score is 3 for default

let winScore = 3;
const winningScore = document.querySelector('#playto');
const resetButton = document.querySelector('#reset');

//gameover is false because game doesn't end
let isGameOver = false;


console.log(player1.score);

//update score player->one who scored and opponent->one who doesn't score
function upadateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winScore) {

            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');

            player.button.disabled = true;
            opponent.button.disabled = true;

        }
        player.display.textContent = player.score;

    }

};

player1.button.addEventListener('click', () => {
    upadateScore(player1, player2);
});

player2.button.addEventListener('click', () => {
    upadateScore(player2, player1);
})

function reset() {
    for (let player of [player1, player2]) {
        player.score = 0;
        isGameOver = false;
        player.display.innerText = player.score;
        player.button.disabled = false;
        player.display.classList.remove('has-text-success', 'has-text-danger');
    }
};
resetButton.addEventListener('click', reset);

winningScore.addEventListener('change', () => {

    winScore = winningScore.value;
    reset();
});

