let userScore =0;
let compScore =0;
let tieScore =0;


function getComputerChoice() {

    const rando = Math.floor(Math.random()*3)+1;

    if (rando == 1) {
       
        return "rock";
    } 

    else if (rando == 2) {
        
        return "scissors";
    }

    else {
        return "paper";
    }
}

function playRound(user) {
    const computer = getComputerChoice();
    let lowerUser = user.toLowerCase();
    if (lowerUser == computer) {
        tieScore++;
        return "Tie";
    }

    else if (lowerUser == "rock") {
        if (computer == "scissors"){
            userScore++;
            return "Win";
        }
        else {
            compScore++;
            return "Lose";
        }
    }

    else if (lowerUser == "paper") {
        if (computer == "rock"){
            userScore++;
            return "Win";
        }
        else {
            compScore++;
            return "Lose";

        }
    }

    else {
        if (computer == "paper"){
            userScore++;
            return "Win";
        }
        else {
            compScore++;
            return "Lose";

        }
    }
}

function game () {
    let userScore = 0;
    let compScore = 0;
    //let userselect = prompt("Rock, Paper, or Scissors?")
    let Round1 = Declaration(userselect,getComputerChoice());
    if (Round1=="You Win") {
        userScore++;
    }

    else if (Round1=="You Lose"){
        compScore++;
    }

}

function UpdateScore(result){
    const userScoreTrack = document.getElementById("UserScore");
    const compScoreTrack = document.getElementById("CompScore");
    const tieScoreTrack = document.getElementById("Ties");

    userScoreTrack.textContent = `Player: ${userScore}`;
    compScoreTrack.textContent = `Computer: ${compScore}`;
    tieScoreTrack.textContent = `Ties: ${tieScore}`;
    console.log(userScore);
    console.log(result);
    
    if (gameOver()){
        openEndgameModal();
        finalMsg();
        userScoreTrack.textContent = 'Player: 0'
        compScoreTrack.textContent = 'Computer: 0'
        tieScoreTrack.textContent = 'Ties: 0'
    }

    
}

function gameOver() {
    return userScore == 5 || compScore ==5;
}
function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
    restartBtn.addEventListener('click',() => restartGame());
  }
  

RockBtn.addEventListener('click',() => UpdateScore(playRound("rock")));
PaperBtn.addEventListener('click',() => UpdateScore(playRound("paper")));
SciBtn.addEventListener('click',() => UpdateScore(playRound("scissors")));

function restartGame() {
    userScore = 0;
    compScore = 0;
    tieScore = 0;
    //userScoreTrack.textContent = 'Player: 0'
    //compScoreTrack.textContent = 'Computer: 0'
    endgameModal.classList.remove('active');
    overlay.classList.remove('active');
  }

  function finalMsg(){
    return userScore > compScore
        ? (endgameMsg.textContent = 'You Win')
        : (endgameMsg.textContent = "You Lose")
  }

