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
    let moveSpace = document.getElementById(position);
    let createMoveBtn = document.createElement("BUTTON");
    let createMoveBtnTxt = document.createTextNode(buttonText);
    if (buttonText == "NORTH"){
        createMoveBtn.setAttribute("onclick", "xyChange(0,1)");
    }
    else if (buttonText == "WEST"){
        createMoveBtn.setAttribute("onclick", "xyChange(-1,0)");
    }
    else if (buttonText == "EAST"){
        createMoveBtn.setAttribute("onclick", "xyChange(1,0)");
    }
    else if (buttonText == "SOUTH"){
        createMoveBtn.setAttribute("onclick", "xyChange(0,-1)");
    };
    
    createMoveBtn.appendChild(createMoveBtnTxt);
    moveSpace.appendChild(createMoveBtn);
    document.body.appendChild(moveSpace);
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

//---------------------------------------------------------
let playerX = 0
let playerY = 0
    
function xyChange(value1, value2) {
    playerX = playerX += value1
    playerY = playerY += value2
        let playerXString = playerX.toString();
        let playerYString = playerY.toString();
        let playerCoordString = playerXString.concat(",", playerYString);
        theMapWrapper(playerCoordString);

        console.log(playerCoordString)   
        
}

class theMap {
    constructor() { };

    mapLocation(string) {
        if (string === '0,0') {
            document.getElementById("topText").innerHTML = "You are in the City";
            let bodyClass = document.getElementsByTagName("body");
            bodyClass[0].className = "cityImage";
        }
        else if  (string === '0,1') {
            document.getElementById("topText").innerHTML = "You are in a Field of Clowns";
            let bodyClass = document.getElementsByTagName("body");
            bodyClass[0].className = "clownImage";
        }
        else if  (string === '0,-1') {
            document.getElementById("topText").innerHTML = "You are at a Burger Place";
            let bodyClass = document.getElementsByTagName("body");
            bodyClass[0].className = "burgerImage";
        }
        else if  (string === '1,0') {
            document.getElementById("topText").innerHTML = "You are at a Park";
            let bodyClass = document.getElementsByTagName("body");
            bodyClass[0].className = "parkImage";
        }
        else if  (string === '1,1') {
            document.getElementById("topText").innerHTML = "You are at a Pizzeria";
            let bodyClass = document.getElementsByTagName("body");
            bodyClass[0].className = "pizzaImage";
        }
        else if  (string === '1,-1') {
            document.getElementById("topText").innerHTML = "You are at a Refugee Camp";
            let bodyClass = document.getElementsByTagName("body");
            bodyClass[0].className = "campImage";
        }
        else if  (string === '-1,0') {
            document.getElementById("topText").innerHTML = "You are at a Club";
            let bodyClass = document.getElementsByTagName("body");
            bodyClass[0].className = "clubImage";
        }
        else if  (string === '-1,1') {
            document.getElementById("topText").innerHTML = "You are at the Temple of Capitalism";
            let bodyClass = document.getElementsByTagName("body");
            bodyClass[0].className = "templeImage";
        }
        else if (string === '-1,-1') {
            document.getElementById("topText").innerHTML = "You are at the Worst Place on Earth";
            let bodyClass = document.getElementsByTagName("body");
            bodyClass[0].className = "tparkImage";
        };

    };
}


function theMapWrapper(value) {
    let map = new theMap();
    map.mapLocation(value);
    
}
