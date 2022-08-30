class theGame {
    constructor(){};

    rpsFight(value){
        let rpsRandom = (Math.floor(Math.random()*2));
        if (value == 'rock' && rpsRandom == 0){
            document.getElementById("topText").innerHTML = "Rock breaks Scissors! You Win!";
        }
        else if (value == 'rock' && rpsRandom == 1){
            document.getElementById("topText").innerHTML = "Paper wraps Rock! You Lose!";
        }
        else if (value == 'paper' && rpsRandom == 0){
            document.getElementById("topText").innerHTML = "Paper wraps Rock! You Win!";
        }
        else if (value == 'paper' && rpsRandom == 1){
            document.getElementById("topText").innerHTML = "Scissors cuts Paper! You Lose!";
        }
        else if (value == 'scissors' && rpsRandom == 0){
            document.getElementById("topText").innerHTML = "Scissors cuts Paper! You Win!";
        }
        else if(value == 'scissors' && rpsRandom == 1){
            document.getElementById("topText").innerHTML = "Rock breaks Scissors! You Lose!";
        }
    };

    btnChangeToMove(){
        const removeRPSBtn = document.getElementById("buttonMidPosition");
        while (removeRPSBtn.hasChildNodes()) {
            removeRPSBtn.removeChild(removeRPSBtn.firstChild);
        }
        
    };

}

//this is a wrapper that instances a new class theGame.
//this is used to pass the value from the rps buttons 
//to rpsFight that is contained within class theGame.
function theGameWrapper(value) {
    let game = new theGame();
    game.btnChangeToMove();
    game.rpsFight(value);
}

// OLD CODE: DELETE WHEN NEW CODE STABLE
// function rpsFight(value){
//     let rpsRandom = (Math.floor(Math.random()*2));
//     if (value == 'rock' && rpsRandom == 0){
//         document.getElementById("topText").innerHTML = "Rock breaks Scissors! You Win!";
//     }
//     else if (value == 'rock' && rpsRandom == 1){
//         document.getElementById("topText").innerHTML = "Paper wraps Rock! You Lose!";
//     }
//     else if (value == 'paper' && rpsRandom == 0){
//         document.getElementById("topText").innerHTML = "Paper wraps Rock! You Win!";
//     }
//     else if (value == 'paper' && rpsRandom == 1){
//         document.getElementById("topText").innerHTML = "Scissors cuts Paper! You Lose!";
//     }
//     else if (value == 'scissors' && rpsRandom == 0){
//         document.getElementById("topText").innerHTML = "Scissors cuts Paper! You Win!";
//     }
//     else if(value == 'scissors' && rpsRandom == 1){
//         document.getElementById("topText").innerHTML = "Rock breaks Scissors! You Lose!";
//     }
// }

// function btnChangeToMove(){
//     const removeRPSBtn = getElementById("buttonMidPosition");
//     while (removeRPSBtn.hasChildNodes()) {
//         removeRPSBtn.removeChild(removeRPSBtn.firstChild);
//     }
    
// }

