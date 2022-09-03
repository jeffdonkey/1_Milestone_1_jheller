let playerX = 0
let playerY = 0


function xyChange(value1, value2) {
    playerX = playerX += value1
    playerY = playerY += value2;
    let playerXString = playerX.toString();
    let playerYString = playerY.toString();
    let playerCoordString = playerXString.concat(",", playerYString);

    // below is logic for changing the background Image.  It does this by 
    // changing the class name for the body tag 



    // let bodyClass = document.getElementsByTagName("body");
    // bodyClass[0].className = "clownImage";


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
        else (string === '-1,-1') {
            document.getElementById("topText").innerHTML = "You are at the Worst Place on Earth";
            let bodyClass = document.getElementsByTagName("body");
            bodyClass[0].className = "tparkImage";
        }

    }
}