let boxes           = document.querySelectorAll(".box")
let xTurn           = true;
xTurn               = Math.floor(Math.random()*2);
let checkedX        = [];
let checkedO        = [];
let box1            = document.querySelector(".one");
let box2            = document.querySelector(".two");
let box3            = document.querySelector(".three");
let box4            = document.querySelector(".four");
let box5            = document.querySelector(".five");
let box6            = document.querySelector(".six");
let box7            = document.querySelector(".seven");
let box8            = document.querySelector(".eight");
let box9            = document.querySelector(".nine");
let checkedCount    = 0;

const gameOver      = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]];





// define all win poses in a 2d array and check later


function markBox(evt){
    
    if(xTurn){
        
        let rand = Math.floor(Math.random()*11 + 1);
        this.classList.add("xmarked", "checked");
        checkedX.push(+this.id);
        let stringId = "";
        switch(+this.id){
            case 1 : 
                stringId = "one"
                break;
            case 2 : 
                stringId = "two"
                break;
            case 3 : 
                stringId = "three"
                break;
            case 4 : 
                stringId = "four"
                break;
            case 5 : 
                stringId = "five"
                break;
            case 6 : 
                stringId = "six"
                break;
            case 7 : 
                stringId = "seven"
                break;
            case 8 : 
                stringId = "eight"
                break;
            case 9 : 
                stringId = "nine"
                break;
        }
        let thisElement = document.querySelector(`.container>.${stringId}`);
        thisElement.innerHTML = `<img src="./assets/images/X/${rand}.png" alt="">`


        let xResult = checkWinnerX();
        if(xResult == "xWins"){
            alert("x wins");
            for (const box of boxes) {
                box.classList.add("checked");
            }
        }
        checkedCount++;

        if(checkedCount == 9 && xResult == undefined) {
            alert("tie");
        }
        
        xTurn = false;
    }else{
        let rand = Math.floor(Math.random()*11 + 1);
        this.classList.add("omarked", "checked");
        checkedO.push(+this.id);
        let OResult = checkWinnerO();
        let stringId = "";
        switch(+this.id){
            case 1 : 
                stringId = "one"
                break;
            case 2 : 
                stringId = "two"
                break;
            case 3 : 
                stringId = "three"
                break;
            case 4 : 
                stringId = "four"
                break;
            case 5 : 
                stringId = "five"
                break;
            case 6 : 
                stringId = "six"
                break;
            case 7 : 
                stringId = "seven"
                break;
            case 8 : 
                stringId = "eight"
                break;
            case 9 : 
                stringId = "nine"
                break;
        }
        let thisElement = document.querySelector(`.container>.${stringId}`);
        thisElement.innerHTML = `<img src="./assets/images/O/${rand}.png" alt="">`
        if(OResult == "oWins"){
            alert("o wins");
            for (const box of boxes) {
                box.classList.add("checked");
            }
        }
        checkedCount++;

        if(checkedCount == 9 && xResult == undefined) {
            alert("tie");
        }
        
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