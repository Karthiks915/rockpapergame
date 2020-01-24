const btn = document.querySelectorAll(".images");
const computerScore=document.getElementById("computerScore");
const playerScore=document.getElementById("playerScore");
let compuSc=0;
let playeSc=0;


function computerPlay() {

    let options = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return options[random]
}

    
btn.forEach(btn => {
    
    btn.addEventListener('click', function(e){
        
        function playRound(){
            
            let playS=e.target.id;
            let compS=computerPlay();
                
            if(playS==="rock"&&compS==="paper"){
                computerScore.textContent="Computer Score = "+" " + " "+compuSc++;
            } else if(playS==="rock"&&compS==="scissors"){
               playerScore.textContent="Player Score = "+" " + " "+playeSc++;
            } else if(playS===compS){
                
            } else if(playS==="paper"&&compS==="rock"){
                playerScore.textContent="Player Score = "+" " + " "+playeSc++;
            } else if(playS==="paper"&&compS==="scissors"){
                computerScore.textContent="Computer Score = "+" " + " "+compuSc++;
            } else if(playS==="scissors"&&compS==="rock"){
                computerScore.textContent="Computer Score = "+" " + " "+compuSc++;
            } else if(playS==="scissors"&&compS==="paper"){
                playerScore.textContent="Player Score = "+" " + " "+playeSc++;
            }   
             
              if(playeSc===6&&compuSc<5){
               
                alert("You won!");
                let playeSc=0;
                let compuSc=0;  
           } else if(compuSc===6&&playeSc<5){
               
                alert("Sorry, the computer won");
                let playeSc=0;
                let compuSc=0; 
           }
            
        }
        
        return playRound()
            
    })
})
    