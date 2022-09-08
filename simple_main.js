class theGame {
    constructor() { };


    rpsFight(value) {
        let rpsRandom = (Math.floor(Math.random() * 2));
        if (value == 'rock' && rpsRandom == 0) {
            document.getElementById("topText").innerHTML = "Rock breaks Scissors! You Win!";
            // this.checkPlayStatus(1);
        }
        else if (value == 'rock' && rpsRandom == 1) {
            document.getElementById("topText").innerHTML = "Paper wraps Rock! You Lose!";
            // this.checkPlayStatus(-1)
        }
        else if (value == 'paper' && rpsRandom == 0) {
            document.getElementById("topText").innerHTML = "Paper wraps Rock! You Win!";
        }
        else if (value == 'paper' && rpsRandom == 1) {
            document.getElementById("topText").innerHTML = "Scissors cuts Paper! You Lose!";
        }
        else if (value == 'scissors' && rpsRandom == 0) {
            document.getElementById("topText").innerHTML = "Scissors cuts Paper! You Win!";
        }
        else if (value == 'scissors' && rpsRandom == 1) {
            document.getElementById("topText").innerHTML = "Rock breaks Scissors! You Lose!";
        }
        setTimeout(this.createMonster, 3000)
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
            document.getElementById("topText").innerHTML = "A Sailor Challenges You!";
            let bodyClass = document.getElementsByTagName("body");
            bodyClass[0].className = "m_sailor";
        }
    }

    // checkPlayStatus(value) {
    //     let playerDignity = 3 += value;
    //     if (playerDignity = 5) {
    //         console.log(playerDignity)
    //     }
    //     else if (playerDignity = 0) {
    //         console.log(playerDignity)
    //     }
    //     else {
    //         console.log(playerDignity)
    //     }
    // }



}


function theGameWrapper(value) {
    let game = new theGame();
    game.rpsFight(value);
    // game.createMonster();

}

