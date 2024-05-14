let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, loses: 0, ties: 0 };
function userMove(uMove) {
    //Burada former formlarý tutma nedeni score'un localStorage'da her güncelleniþinde akýþtan önceki score deðerleri de güncellenir
    let formerWins = score.wins;
    let formerLoses = score.loses;
    let formerTies = score.ties;

    let contraMove;
    let number = Math.random();
    if (number <= 1 / 3)
        contraMove = 'rock';
    else if (number > 1 / 3 && number <= 2 / 3)
        contraMove = 'paper';
    else
        contraMove = 'scissors';

    whoWon(uMove, contraMove);

    let scr = JSON.parse(localStorage.getItem('score'));
    if (formerWins < scr.wins && formerLoses == scr.loses && formerTies == scr.ties) {
        document.querySelector('.js-result').innerHTML = 'You Win!';
    }
    else if (formerLoses < scr.loses && formerWins == scr.wins && formerTies == scr.ties) {
        document.querySelector('.js-result').innerHTML = 'You Lose!';
    }
    else if (formerTies < scr.ties && formerWins == scr.wins && formerLoses == scr.loses) {
        document.querySelector('.js-result').innerHTML = 'Tie!';
    }
    console.log(`your move: ${uMove}, computer move: ${contraMove} , wins: ${scr.wins}, loses: ${scr.loses}, ties: ${scr.ties}`);
    document.querySelector('.js-moves').innerHTML = `You <img src="images/${uMove}-emoji.png" class="move-icon"/> 
            <img src="images/${contraMove}-emoji.png" class="move-icon"/> Computer`;

    document.querySelector('.js-scores').innerHTML = `Total Wins: ${scr.wins}, Total Loses: ${scr.loses}, Total Ties: ${scr.ties}`;
}

function whoWon(userMove, compMove) {
    let score = JSON.parse(localStorage.getItem('score'));
    switch (userMove) {
        case 'rock': if (compMove === 'rock') score.ties += 1; else if (compMove === 'paper') score.loses += 1; else score.wins += 1; break;
        case 'paper': if (compMove === 'rock') score.wins += 1; else if (compMove === 'paper') score.ties += 1; else score.loses += 1; break;
        case 'scissors': if (compMove === 'rock') score.loses += 1; else if (compMove === 'paper') score.wins += 1; else score.ties += 1; break;
    }
    localStorage.setItem('score', JSON.stringify(score));
}
let isAutoPlaying = false;
let intervalId;

function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(function () {
            let randomNum = Math.random();
            let usrMove;
            if (randomNum < 1 / 3) {
                usrMove = 'rock';
            }
            else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
                usrMove = 'paper';
            }
            else {
                usrMove = 'scissors';
            }
            userMove(usrMove);
        }, 1000);
        isAutoPlaying = true;
    }
}

function stopAutoPlay() {
    clearInterval(intervalId);
    isAutoPlaying = false;
}

function resetScore(){
    let score = {
        wins: 0,
        loses: 0,
        ties: 0
    };
    localStorage.removeItem('score');
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.js-scores').innerHTML = `Total Wins: ${score.wins}, Total Loses: ${score.loses}, Total Ties: ${score.ties}`;
}