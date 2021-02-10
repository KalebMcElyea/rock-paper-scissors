let choice =["rock","paper","scissors"]

//Needs to display winner, loser, or tie 

function playerChoice(){

}
function draw(result){
    document.getElementById("results").innerText=result
    }



//determine a winner 
function play(playerChoice){
    let cpuChoice = computerChoice()

 if(playerChoice =='rock' && cpuChoice =="scissor"){
       draw('You Win');
} else if(playerChoice =='rock'&& cpuChoice =="paper"){
    draw('You Lose')
} else if(playerChoice == cpuChoice){
     draw("Tie"); 
}

if(playerChoice =='scissor' && cpuChoice =="paper"){
    draw('You Win');
} else if(playerChoice =='scissor'&& cpuChoice =="paper"){
    draw('You Lose')
} else if(playerChoice == cpuChoice){
    draw("Tie"); 
}

if(playerChoice =='paper' && cpuChoice =="rock"){
    draw('You Win');
} else if(playerChoice =='paper'&& cpuChoice =="scissors"){
    draw('You Lose')
} else if(playerChoice == cpuChoice){
    draw("Tie"); 
}

}   
function computerChoice(){
    let computerChoiceIndex= Math.floor(Math.random() * choice.length)
    let computerChoice = choice[computerChoiceIndex]
    return computerChoice; 
}



