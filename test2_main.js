let playerX = 0
let playerY = 0


function northCoordChange(){
    console.log("made it");
    playerY = playerY += 1;
    let playerXString = playerX.toString();
    let playerYString = playerY.toString();
    let playerCoordString = playerXString.concat(",",playerYString);
    
    console.log(playerCoordString)
} 

function southCoordChange(){
    console.log("made it");
    playerY = playerY += -1;
    let playerXString = playerX.toString();
    let playerYString = playerY.toString();
    let playerCoordString = playerXString.concat(",",playerYString);
    
    console.log(playerCoordString)
} 

function westCoordChange(){
    console.log("made it");
    playerX = playerX += -1;
    let playerXString = playerX.toString();
    let playerYString = playerY.toString();
    let playerCoordString = playerXString.concat(",",playerYString);
    
    console.log(playerCoordString)
} 

function eastCoordChange(){
    console.log("made it");
    playerX = playerX += 1;
    let playerXString = playerX.toString();
    let playerYString = playerY.toString();
    let playerCoordString = playerXString.concat(",",playerYString);
    
    console.log(playerCoordString)
} 