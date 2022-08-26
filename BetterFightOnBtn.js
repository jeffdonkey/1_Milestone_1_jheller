


function rpsFight(value){
    let rpsRandom = (Math.floor(Math.random()*2));
    if (value == 'rock' && rpsRandom == 0){
        document.getElementById("topText").innerHTML = "WIN";
    }
    else if (value == 'rock' && rpsRandom == 1){
        document.getElementById("topText").innerHTML = "LOSS";
    }
    else if (value == 'paper' && rpsRandom == 0){
        document.getElementById("topText").innerHTML = "WIN";
    }
    else if (value == 'paper' && rpsRandom == 1){
        document.getElementById("topText").innerHTML = "LOSS";
    }
    else if (value == 'scissors' && rpsRandom == 0){
        document.getElementById("topText").innerHTML = "WIN";
    }
    else if(value == 'scissors' && rpsRandom == 1){
        document.getElementById("topText").innerHTML = "LOSS";
    }
}