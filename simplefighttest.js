// below is the computer's selection for RPS
// below not working and it's ugly

let compRPS = (Math.floor(Math.random()*2))
console.log(compRPS)

let playerRPS = "rock"

function combatRPS(){
    if (playerRPS == "rock"){
        if (compPRS === 0){
            gameResult = "The opponet used scissors. Your rock breaks the scissors. You win this time."
        }
        else {
            gameResult = "The opponet used paper.  The paper wraps your rock.  You have met your doom"
        }
    };
    //else if (playerRPS == "paper"){};
    //else (playerRPS == "scissors"){};
}

combatRPS()
console.log(gameResult)