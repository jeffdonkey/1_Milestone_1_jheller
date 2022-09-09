let playerDignity = 3
let rpsOutcome = true

class theGame {
    constructor() { };

    checkPlayStatus(value) {

        if (rpsOutcome) {
            playerDignity = playerDignity += 1
        }
        else {
            playerDignity = playerDignity += -1
        }


        if (playerDignity >= 5) {
            console.log("condition 1", playerDignity);
            this.playerWin();
        }
        else if (playerDignity <= 0) {
            console.log("condition 2", playerDignity);
            this.playerLose();
        }
        else {
            console.log("condition 3", playerDignity);
            setTimeout(this.createMonster, 3000);
        }
    }


    rpsFight(value) {
        let rpsRandom = (Math.floor(Math.random() * 2));
        if (value == 'rock' && rpsRandom == 0) {
            document.getElementById("topText").innerHTML = "Rock breaks Scissors! You Win!";
            rpsOutcome = true;
        }
        else if (value == 'rock' && rpsRandom == 1) {
            document.getElementById("topText").innerHTML = "Paper wraps Rock! You Lose!";
            rpsOutcome = false;
        }
        else if (value == 'paper' && rpsRandom == 0) {
            document.getElementById("topText").innerHTML = "Paper wraps Rock! You Win!";
            rpsOutcome = true;
        }
        else if (value == 'paper' && rpsRandom == 1) {
            document.getElementById("topText").innerHTML = "Scissors cuts Paper! You Lose!";
            rpsOutcome = false;
        }
        else if (value == 'scissors' && rpsRandom == 0) {
            document.getElementById("topText").innerHTML = "Scissors cuts Paper! You Win!";
            rpsOutcome = true;
        }
        else if (value == 'scissors' && rpsRandom == 1) {
            document.getElementById("topText").innerHTML = "Rock breaks Scissors! You Lose!";
            rpsOutcome = false;
        }

    }


    createMonster() {

        let monsterRandom = (Math.floor(Math.random() * 4))
        if (monsterRandom == 0) {
            document.getElementById("topText").innerHTML = "A Book of Ignored Regulations Challenges You!";
            let bodyClass = document.getElementsByTagName("body");
            bodyClass[0].className = "m_book";
        }
        else if (monsterRandom == 1) {
            document.getElementById("topText").innerHTML = "Your Old Boss Challenges You!";
            let bodyClass = document.getElementsByTagName("body");
            bodyClass[0].className = "m_boss";
        }
        else if (monsterRandom == 2) {
            document.getElementById("topText").innerHTML = "A Toxic Dog Challenges You!";
            let bodyClass = document.getElementsByTagName("body");
            bodyClass[0].className = "m_dog";
        }
        else if (monsterRandom == 3) {
            document.getElementById("topText").innerHTML = "Drunk Tim Challenges You!";
            let bodyClass = document.getElementsByTagName("body");
            bodyClass[0].className = "m_sailor";
        }
    }

    playerWin() {
        document.getElementById("topText").innerHTML = "YOU HAVE REGAINED YOUR DIGNITY!  GO MAKE SOME BABIES!  SHAPE A NEW SOCIETY!";
        let bodyClass = document.getElementsByTagName("body");
        bodyClass[0].className = "burgerImage";
        let removeRPSBtn = document.getElementById("buttonMidPosition");
        while (removeRPSBtn.hasChildNodes()) {
            removeRPSBtn.removeChild(removeRPSBtn.firstChild);
        };
        let createResetBtn = document.createElement("BUTTON");
        let createResetBtnTxt = document.createTextNode("RESTART");
        createResetBtn.setAttribute("onclick", "window.location.reload()");
        createResetBtn.appendChild(createResetBtnTxt);
        document.body.appendChild(createResetBtn);

    }

    playerLose() {
        document.getElementById("topText").innerHTML = "YOU HAVE LOST ALL HUMAN DIGNITY.  YOU LIE DOWN AND AWAIT THE DARKNESS.";
        let bodyClass = document.getElementsByTagName("body");
        bodyClass[0].className = "templeImage";

        let removeRPSBtn = document.getElementById("buttonMidPosition");
        while (removeRPSBtn.hasChildNodes()) {
            removeRPSBtn.removeChild(removeRPSBtn.firstChild);
        };
        let createResetBtn = document.createElement("BUTTON");
        let createResetBtnTxt = document.createTextNode("RESTART");
        createResetBtn.setAttribute("onclick", "window.location.reload()");
        createResetBtn.appendChild(createResetBtnTxt);
        document.body.appendChild(createResetBtn);
        
        }





    }


function theGameWrapper(value) {
    let game = new theGame();
    game.rpsFight(value);

    game.checkPlayStatus(3);

}

