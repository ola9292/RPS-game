let choice = document.querySelectorAll('.choice')
let alert = document.getElementById('alert')
let playerScore = 0;
let computerScore = 0;
let playerScoreDisplay = document.getElementById('player-score-display')
let computerScoreDisplay = document.getElementById('computer-score-display')
let restartBtn = document.getElementById('restart-btn')



choice.forEach(function(item){
    item.addEventListener('click',function(e){
       
        let playerChoice = e.target.id
        let computerChoice = ''
        let rand = Math.random()
        if(rand <= 0.3){
           computerChoice = 'rock'
        }else if(rand <= 0.6){
            computerChoice = 'paper'
        }else{
            computerChoice = 'scissors'
        }

       let winner = getWinner(playerChoice, computerChoice)

       // Remove previously added classes before applying new ones
        // alert.classList.remove('user', 'computer-win', 'draw');
        if(winner == 'player'){
            alert.classList.remove('computer-win', 'draw');
            alert.classList.add('user')
            alert.style.display = 'block'
            alert.innerHTML = 'Player wins'
            playerScore++
            playerScoreDisplay.innerHTML = `User:${playerScore}`
        }else if(winner == 'computer'){
            alert.classList.remove('user', 'draw');
            alert.classList.add('computer-win')
            alert.style.display = 'block'
            alert.innerHTML = 'Computer wins'
            computerScore++
            computerScoreDisplay.innerHTML = `Computer:${computerScore}`
        }else if( winner == 'draw'){
            alert.classList.remove('computer-win', 'user');
            alert.classList.add('draw')
            alert.style.display = 'block'
            alert.innerHTML = 'It is a tie'
        }

       console.log(playerScore, computerScore)
    })
})

// Get game winner
function getWinner(p, c) {
    if (p === c) {
      return 'draw';
    } else if (p === 'rock') {
      if (c === 'paper') {
        return 'computer';
      } else {
        return 'player';
      }
    } else if (p === 'paper') {
      if (c === 'scissors') {
        return 'computer';
      } else {
        return 'player';
      }
    } else if (p === 'scissors') {
      if (c === 'rock') {
        return 'computer';
      } else {
        return 'player';
      }
    }
  }

  restartBtn.addEventListener('click',function(){
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.innerHTML = 'User:0'
    computerScoreDisplay.innerHTML = 'Computer:0'
    alert.style.display = 'none'
  })