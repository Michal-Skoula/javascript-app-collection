let score = {
  'win' : 0,
  'tie' : 0,
  'lose' : 0
};
const playerColor = '#6464ef';
const enemyColor = '#ff5b5b';
const tieColor = '#b81eb8';
const defaultColor = '#504f4f';

if(window.localStorage.getItem('score')) {
  score = JSON.parse(window.localStorage.getItem('score'));
} 
displayOutput();


function enemyPick() {
  switch(Math.floor(Math.random()*3) + 1) {
    case 1:
      return 'rock';
      break;
    case 2:
      return 'paper';
      break;
    case 3:
      return 'scissors';
      break;
  } 
}
function displayOutput() {
  const scoreText = `Wins: ${score.win} Losses: ${score.lose} Ties: ${score.tie}`;
  document.getElementById('score').textContent = scoreText;
}
function writeToLocalStorage(result, value) {
  score[result] += value;
  window.localStorage.setItem('score', JSON.stringify(score));
  displayOutput();
  
}
function decideOutcome(player, enemy) {
  resetResultStyles();
  changeColorOnResult(player, enemy);
  if
  (
    (player === 'rock' && enemy === 'scissors') || 
    (player === 'paper' && enemy === 'rock') ||
    (player === 'scissors' && enemy === 'paper')
  ) {
    writeToLocalStorage('win',+1);
    setResultField(playerColor, "You win!");
    setSizeWinner(player,enemy);
  }
  else if(player === enemy) {
    writeToLocalStorage('tie',+1);
    setResultField(tieColor, "It\'s a draw");
    setSizeWinner(player,enemy);
  }
  else {
    writeToLocalStorage('lose',+1);
    setResultField(enemyColor, "You lose :\(");
    setSizeWinner(enemy, player);
  }
}
function changeColorOnResult(playerPick, enemyPick) {
  
  if(playerPick === enemyPick) {
    document.getElementById(playerPick).style.backgroundColor = tieColor;
  }
  else {
    document.getElementById(playerPick).style.backgroundColor = playerColor;
    document.getElementById(enemyPick).style.backgroundColor = enemyColor;
  }
}
function setSizeWinner(winner, loser) {
  const bigger = document.getElementById(winner);
  const smaller = document.getElementById(loser);

  smaller.classList.add('loser');
  bigger.classList.add('winner');
}
function setResultField(color, message) {
  const result = document.getElementById('result');
  result.innerText = message;
  result.style.color = color;
}
function resetResultStyles() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(function(button) {
    button.style.backgroundColor = defaultColor;
    button.classList.remove('winner');
    button.classList.remove('loser');
    setResultField('','');
  });
}

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultBtn = document.getElementById('result');
const resetBtn = document.getElementById('reset');

rockBtn.addEventListener('click', function() {
  decideOutcome('rock', enemyPick());
});
paperBtn.addEventListener('click', function() {
  decideOutcome('paper',enemyPick());
});
scissorsBtn.addEventListener('click', function() {
  decideOutcome('scissors',enemyPick());
});
resetBtn.addEventListener('click', function() {
  score.win = 0;
  score.lose = 0;
  score.tie = 0;
  window.localStorage.setItem('score', JSON.stringify(score));
  displayOutput();
  resetResultStyles();
});


