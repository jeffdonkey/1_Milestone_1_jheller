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
        let removeRPSBtn = document.getElementById("buttonMidPosition");
        while (removeRPSBtn.hasChildNodes()) {
            removeRPSBtn.removeChild(removeRPSBtn.firstChild);
        };          
          
    };

    moveButton(position,buttonText){
    let northSpace = document.getElementById(position);
    let createNorthBtn = document.createElement("BUTTON");
    let createNorthBtnTxt = document.createTextNode(buttonText);
    createNorthBtn.appendChild(createNorthBtnTxt);
    northSpace.appendChild(createNorthBtn);
    document.body.appendChild(northSpace);
    };
}

//this is a wrapper that instances a new class theGame.
//this is used to pass the value from the rps buttons 
//to rpsFight that is contained within class theGame.
//also using to pass values into moveButton
function theGameWrapper(value) {
    let game = new theGame();
    game.btnChangeToMove();
    game.rpsFight(value);
    game.moveButton('buttonTopPosition','NORTH');
    game.moveButton('buttonMidPosition','WEST');
    game.moveButton('buttonMidPosition','EAST');
    game.moveButton('buttonBottomPosition','SOUTH');
}

