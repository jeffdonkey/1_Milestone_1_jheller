"use strict";
let playerDignity = 3;
let rpsOutcome = true;
class theGame {
    constructor() { }
    ;
    checkPlayStatus(value) {
        console.log(playerDignity);
        if (rpsOutcome) {
            playerDignity = playerDignity += 1;
        }
        else {
            playerDignity = playerDignity += -1;
        }
        if (playerDignity >= 5) {
            let winH3Remove = document.getElementById("textBox");
            winH3Remove.remove();
            this.playerWin();
        }
        else if (playerDignity <= 0) {
            let loseH3Remove = document.getElementById("textBox");
            loseH3Remove.remove();
            this.playerLose();
        }
        else if (playerDignity == 1) {
            document.getElementById("textBox").innerHTML = "Do you feel it? The last gram of yourself?";
            setTimeout(this.createMonster, 3000);
        }
        else if (playerDignity == 2) {
            document.getElementById("textBox").innerHTML = "Feeling down?";
            setTimeout(this.createMonster, 3000);
        }
        else if (playerDignity == 3) {
            document.getElementById("textBox").innerHTML = "Enjoy this while it lasts. The middle. Free of loss or gain.";
            setTimeout(this.createMonster, 3000);
        }
        else if (playerDignity == 4) {
            document.getElementById("textBox").innerHTML = "Could this be.....happiness?  Is it getting better?";
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
        let monsterRandom = (Math.floor(Math.random() * 4));
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
            bodyClass[0].className = "m_Tim";
        }
    }
    playerWin() {
        document.getElementById("topText").innerHTML = "YOU HAVE REGAINED YOUR DIGNITY!  GO MAKE SOME BABIES!  SHAPE A NEW SOCIETY!";
        let bodyClass = document.getElementsByTagName("body");
        bodyClass[0].className = "g_end";
        let removeRPSBtn = document.getElementById("buttonMidPosition");
        while (removeRPSBtn.hasChildNodes()) {
            removeRPSBtn.removeChild(removeRPSBtn.firstChild);
        }
        ;
        let createResetBtn = document.createElement("BUTTON");
        let createResetBtnTxt = document.createTextNode("RESTART");
        createResetBtn.setAttribute("onclick", "window.location.reload()");
        createResetBtn.appendChild(createResetBtnTxt);
        document.body.appendChild(createResetBtn);
    }
    playerLose() {
        document.getElementById("topText").innerHTML = "YOU HAVE LOST ALL HUMAN DIGNITY.  YOU LIE DOWN AND AWAIT THE DARKNESS.";
        let bodyClass = (document.getElementsByTagName("body"));
        bodyClass[0].className = "b_end";
        let removeRPSBtn = document.getElementById("buttonMidPosition");
        while (removeRPSBtn.hasChildNodes()) {
            removeRPSBtn.removeChild(removeRPSBtn.firstChild);
        }
        ;
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
