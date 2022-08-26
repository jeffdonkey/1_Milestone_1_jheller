


function rpsFight(value){
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
}