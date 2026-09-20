const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const you = document.querySelector(".you");
const computer = document.querySelector(".computer");
const result = document.querySelector(".result");
const reset = document.querySelector("#reset");
const computerChose = document.querySelector("#computer-chose");
const h1 = document.querySelector("h1");
let userScore = Number(localStorage.getItem("userScore")) || 0;
let computerScore = Number(localStorage.getItem("computerScore")) || 0;
let round = Number(localStorage.getItem("round"))|| 1;
you.textContent = userScore;
computer.textContent = computerScore;
h1.textContent = "Round : " + round;


function playGame(playerMove){
   let computerMove = ["Rock", "Paper", "Sicssors"];
  let randomNumber = Math.floor(Math.random()* computerMove.length);
  let computerChoice = computerMove[randomNumber];
  computerChose.textContent = "Computer Chose: " + computerChoice;

  

  if(playerMove === computerChoice){
    result.textContent = "Draw!";
  }
  else if((playerMove === "Rock" && computerChoice === "Sicssors") ||
(playerMove === "Paper" && computerChoice === "Rock") || (playerMove === "Sicssors" && computerChoice === "Paper")){
    result.textContent = "You Wins";
    userScore++;
    you.textContent = userScore;
  }
  else {
    result.textContent = "Computer Wins!";
    computerScore++;
    computer.textContent = computerScore;
  }

  round++;
  h1.textContent = "Round : " + round;

  if(userScore === 5){
    h1.textContent = "You Won!"
    paper.disabled = true;
    rock.disabled = true;
    scissors.disabled = true;
    computerChose.textContent = "";
    document.body.style.backgroundColor = "green"
  }
  else if(computerScore === 5){
    h1.textContent = "Computer Won!"
    paper.disabled = true;
    rock.disabled = true;
    scissors.disabled = true;
    computerChose.textContent = "";
    document.body.style.backgroundColor = "red"
  }

   localStorage.setItem("userScore", userScore);
   localStorage.setItem("computerScore", computerScore);
   localStorage.setItem("round", round);

}

rock.addEventListener("click", function(){
 playGame("Rock");
})

paper.addEventListener("click", function(){
  playGame("Paper");
})

scissors.addEventListener("click", function(){
  playGame("Sicssors");
})


reset.addEventListener("click", function(){
  userScore = 0;
  computerScore = 0;
  round = 1;

  you.textContent = userScore;
  computer.textContent = computerScore;
  h1.textContent = "Round : " + round;
  document.body.style.backgroundColor = "rgb(1, 1, 26)"


  paper.disabled = false;
  rock.disabled = false;
  scissors.disabled = false;

  localStorage.setItem("userScore", userScore);
  localStorage.setItem("computerScore", computerScore);
  localStorage.setItem("round", round);
})