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




function Declaration(user,computer) {
    let lowerUser = user.toLowerCase();
    if (lowerUser == computer) {
        return "Tie";
    }

    else if (lowerUser == "rock") {
        if (computer == "scissors"){
            return "You Win"
        }
        else {
            return "You lose"
        }
    }

    else if (lowerUser == "paper") {
        if (computer == "rock"){
            return "You Win"
        }
        else {
            return "You lose"
        }
    }

    else {
        if (computer == "paper"){
            return "You Win"
        }
        else {
            return "You lose"
        }
    }
}

//console.log(Declaration(userselect,getComputerChoice()));

//function game() {
//    let userScore = 0;
//   let compScore = 0;
//    for (let i=0;i<100;i++) {
//        let result = Declaration(userselect,getComputerChoice());
//
//       if (result == "You Win") {
//            userScore++;
//            if (userScore==5){
//               console.log("You Win the game");
//                break;
//            }
//        }
//
//        else {
//            compScore++;
//            if(compScore ==5){
//                console.log("You Lose the game")
//                break;
//            }
//       }
//    }
//}

function game () {
    let userScore = 0;
    let compScore = 0;
    let userselect = prompt("Rock, Paper, or Scissors?")
    let Round1 = Declaration(userselect,getComputerChoice());
    if (Round1=="You Win") {
        userScore++;
    }

    else if (Round1=="You Lose"){
        compScore++;
    }
    userselect = prompt("Rock, Paper, or Scissors?")
    let Round2 = Declaration(userselect,getComputerChoice());
    if (Round2=="You Win") {
        userScore++;
    }

    else if (Round2=="You Lose"){
        compScore++;
    }
    userselect = prompt("Rock, Paper, or Scissors?")
    let Round3 = Declaration(userselect,getComputerChoice());
    if (Round3=="You Win") {
        userScore++;
    }

    else if (Round3=="You Lose"){
        compScore++;
    }
    userselect = prompt("Rock, Paper, or Scissors?")
    let Round4 = Declaration(userselect,getComputerChoice());
    if (Round4=="You Win") {
        userScore++;
    }

    else if (Round4=="You Lose"){
        compScore++;
    }
    userselect = prompt("Rock, Paper, or Scissors?")
    let Round5 = Declaration(userselect,getComputerChoice());
    if (Round5=="You Win") {
        userScore++;
    }

    else if (Round5=="You Lose"){
        compScore++;
    }

    if (userScore > compScore){
        console.log("You win the game");
    }

    else {
        console.log("You lose the game");
    }


}

game();