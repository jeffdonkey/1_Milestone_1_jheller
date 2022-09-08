class theGame {
    constructor() { };


    rpsFight(value) {
        let rpsRandom = (Math.floor(Math.random() * 2));
        if (value == 'rock' && rpsRandom == 0) {
            document.getElementById("topText").innerHTML = "Rock breaks Scissors! You Win!";
            this.createMonster();
        }
        else if (value == 'rock' && rpsRandom == 1) {
            document.getElementById("topText").innerHTML = "Paper wraps Rock! You Lose!";
            this.createMonster();
        }
        else if (value == 'paper' && rpsRandom == 0) {
            document.getElementById("topText").innerHTML = "Paper wraps Rock! You Win!";
            this.createMonster();
        }
        else if (value == 'paper' && rpsRandom == 1) {
            document.getElementById("topText").innerHTML = "Scissors cuts Paper! You Lose!";
            this.createMonster();
        }
        else if (value == 'scissors' && rpsRandom == 0) {
            document.getElementById("topText").innerHTML = "Scissors cuts Paper! You Win!";
            this.createMonster();
        }
        else if (value == 'scissors' && rpsRandom == 1) {
            document.getElementById("topText").innerHTML = "Rock breaks Scissors! You Lose!";
            this.createMonster();
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
            document.getElementById("topText").innerHTML = "A Sailor Challenges You!";
            let bodyClass = document.getElementsByTagName("body");
            bodyClass[0].className = "m_sailor";
        }
    }



}


function theGameWrapper(value) {
    let game = new theGame();
    game.rpsFight(value);
    // game.createMonster();

}

