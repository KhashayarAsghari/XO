let boxes = document.querySelectorAll(".box")
let xTurn = true;
xTurn = Math.floor(Math.random()*2);
let checkedX = [];
let checkedY = [];
let box1 = document.getElementById("1");
let box2 = document.getElementById("2");
let box3 = document.getElementById("3");
let box4 = document.getElementById("4");
let box5 = document.getElementById("5");
let box6 = document.getElementById("6");
let box7 = document.getElementById("7");
let box8 = document.getElementById("8");
let box9 = document.getElementById("9");


// define all win poses in a 2d array and check later


function markBox(){
    
    if(xTurn){
        this.classList.add("xmarked", "checked");
        checkedX.push(+this.id);
        
        xTurn = false;
    }else{
        this.classList.add("omarked", "checked");
        checkedY.push(+this.id);
        xTurn = true;
    }
}

function checkWinner(){
    let xTemp = checkedX[0];
    
    for(let i=0; i<checkedX.length; i++){
        for(let j=0; j<checkedX.length; j++){
            if(checkedX[i] > checkedX[j]){
                xTemp.push(checkedX[j])
            }else {
                xTemp.push(checkedX[i])
            }
        }
    }
}


for (const box of boxes) {
    box.addEventListener("click", markBox);
}