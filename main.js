let boxes           = document.querySelectorAll(".box")
let xTurn           = true;
xTurn               = Math.floor(Math.random()*2);
let checkedX        = [];
let checkedO        = [];
let box1            = document.getElementById("one");
let box2            = document.getElementById("two");
let box3            = document.getElementById("three");
let box4            = document.getElementById("four");
let box5            = document.getElementById("five");
let box6            = document.getElementById("six");
let box7            = document.getElementById("seven");
let box8            = document.getElementById("eight");
let box9            = document.getElementById("nine");
let checkedCount    = 0;

const gameOver      = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]];


// define all win poses in a 2d array and check later


function markBox(){
    
    if(xTurn){
        this.classList.add("xmarked", "checked");
        checkedX.push(+this.id);
        let xResult = checkWinnerX();
        if(xResult == "xWins"){
            alert("x wins");
            for (const box of boxes) {
                box.classList.add("checked");
            }
        }
        checkedCount++;
        
        xTurn = false;
    }else{
        this.classList.add("omarked", "checked");
        checkedO.push(+this.id);
        let OResult = checkWinnerO();
        if(OResult == "oWins"){
            alert("o wins");
            for (const box of boxes) {
                box.classList.add("checked");
            }
        }
        checkedCount++;
        
        xTurn = true;
    }
}

function checkWinnerX(){
    let matchCount = 0;
    for(let gOIndex=0; gOIndex<gameOver.length; gOIndex++){
        for(let gOInsideIndex=0; gOInsideIndex<3; gOInsideIndex++){
            for(let checkedXIndex=0; checkedXIndex<checkedX.length; checkedXIndex++){
                if(gameOver[gOIndex][gOInsideIndex] == checkedX[checkedXIndex]){
                    matchCount++;
                }
            }
        }
        if(matchCount == 3){
            return "xWins";
        }else {
            matchCount = 0;
        }
    }
}


function checkWinnerO(){
    let matchCount = 0;
    for(let gOIndex=0; gOIndex<gameOver.length; gOIndex++){
        for(let gOInsideIndex=0; gOInsideIndex<3; gOInsideIndex++){
            for(let checkedOIndex=0; checkedOIndex<checkedO.length; checkedOIndex++){
                if(gameOver[gOIndex][gOInsideIndex] == checkedO[checkedOIndex]){
                    matchCount++;
                }
            }
        }
        if(matchCount == 3){
            return "oWins";
        }else {
            matchCount = 0;
        }
    }
}

function checkEqual(){
    if(checkedCount == 9){
        return "equal";
    }
}


for (const box of boxes) {
    box.addEventListener("click", markBox);
   
}