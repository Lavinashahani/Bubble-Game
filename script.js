var ranNum=0;
var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    ranNum = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = ranNum;
}

function createBubble(){
    var clutter = "";
for(var i = 1; i <= 147; ++i){
     clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
}

document.querySelector("#panelbotm").innerHTML = clutter;
}

var timer = 60;
function runTimer(){
    var timerInt = setInterval(function(){
    if(timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
    }
    else{
        clearInterval(timerInt);
        document.querySelector("#panelbotm").innerHTML = `<h1>Game Over</br>Your Score: ${score}<h1>`;
    }
    }, 1000);
}

document.querySelector("#panelbotm").addEventListener("click", function (details){
    var clickedNum = Number(details.target.textContent);
    if(clickedNum === ranNum ){
        increaseScore();
        createBubble();
        getNewHit();
    }

});

runTimer();
createBubble();
getNewHit();
