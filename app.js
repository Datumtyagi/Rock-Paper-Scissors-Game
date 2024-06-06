let userScore=0;
let botScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#Msg");

const userScorePara = document.querySelector("#user-score");
const BotScorePara = document.querySelector("#bot-score");

const drawGame =() =>{
    msg.innerText = "Game was Draw, Play Again";
    msg.style.backgroundColor= "#081b31";
}

const showWinner =(userWin, userChoice, BotChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!! => Your ${userChoice} beats ${BotChoice}`;
        msg.style.backgroundColor= "green";
    }
    else{
        botScore++;
        BotScorePara.innerText = botScore;
        msg.innerText = `You Lose => ${BotChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor= "red";
    }
}

const genBotChoice= () => {
    const options = ["rock", "paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const playGame=(userChoice) => {
    
    const BotChoice= genBotChoice();
    

    if(userChoice===BotChoice){
     drawGame();
    }
    else{
       let userwin = true;
       if(userChoice =="rock"){
        userWin = BotChoice==="paper" ? false: true;
       }
       else if (userChoice === "paper"){

        userWin = BotChoice==="scissors"? false : true;

       }
       else{
        userWin = BotChoice === "rock" ? false :true;

       }
       showWinner(userWin, userChoice, BotChoice);
    }
}

choices.forEach((choice) => {
    
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })

})