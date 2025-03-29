let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game was Draw. Play again...";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose!");
        msg.innerText = `You lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("User choice is : ", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice is : ", compChoice);

    if(userChoice === compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "Rock")
        {
            //paper, scissors
            userWin = compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper")
        {
            userWin = compChoice === "Scissors" ? false : true;
        }
        else
        {
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});