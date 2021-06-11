var playing=false;
var score;
var action;
var timeremaining;
var correctans;
document.getElementById("startreset").onclick = function(){
if(playing==true){
location.reload();//this will reload the page
}
else{
    playing=true;
score=0;
document.getElementById("scorevalue").innerHTML = score;
show("timeremaining");
timeremaining = 60;
document.getElementById("timeremainingvalue").innerHTML= timeremaining;
hide("gameOver");
document.getElementById("startreset").innerHTML ="Reset Game";
//start countdown
startcountdown();
generatequesans();
}
}
for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick = function(){
        if(playing==true){
            if(this.innerHTML == correctans){
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                }, 1000);
            
            generatequesans();
            }
            else{
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                }, 1000);
            }
        }
    }
}

function startcountdown(){
    action = setInterval(function(){
timeremaining -= 1;
document.getElementById("timeremainingvalue").innerHTML= timeremaining;
if(timeremaining == 0){
stopcountdown();
show("gameOver");
document.getElementById("gameOver").innerHTML= "<p>Game Over</p><p>Your score is " + score + ".</p>";
hide("timeremaining");
hide("correct");
hide("wrong");
playing = false;
document.getElementById("startreset").innerHTML ="Start Game";
}
    },1000);
}
function stopcountdown(){
    clearInterval(action);
}
function hide(Id){
    document.getElementById(Id).style.display = "none";
}
function show(Id){
    document.getElementById(Id).style.display = "block";
}
function generatequesans(){
    var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());
correctans = x*y;
document.getElementById("question").innerHTML= x + "X" +y;
var correctpos = 1+ Math.round(3*Math.random());
document.getElementById("box"+correctpos).innerHTML=correctans;
var ans = [correctans];
for(i=1;i<5;i++){
    if(i != correctpos){
        var wrongans ;
       do{
        wrongans =(1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer
       }while(ans.indexOf(wrongans)>-1)
        document.getElementById("box"+i).innerHTML = wrongans;
        ans.push(wrongans);
    }
}

}