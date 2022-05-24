var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("start-button");
var quizScreen = document.getElementById("quiz");
var qi = 0;
var startScreen = document.getElementById("start");
var answer = document.querySelector(".answer");
var finalScore = document.getElementById("final-score");
var highScores = document.getElementById("high-scores-button");
var initials = document.getElementById("initials");
var nameInput = document.getElementById("name-input");
var submitButton = document.getElementById("submit");
var highScorePage = document.getElementById("high-score-page");
var timeLeft = 60;
var timeInterval;

var questions = [
  {
    text: "What is not a primitive data type?",
    choices: ["A: Shoelace", "B: Boolean", "C: String", "D: Number"],
    correct: "A: Shoelace"
  },
  {
    text: "The answer to this question is B",
    choices: ["A", "B", "C", "D"],
    correct: "B"
  },
  {
    text: "The answer to this one is D",
    choices: ["A", "B", "C", "D"],
    correct: "D"
  },
  {
    text: "The anser to this one is B",
    choices: ["A", "B", "C", "D"],
    correct: "B"
  },
]


startBtn.addEventListener("click", function countdown() {


  timeInterval = setInterval(function (){
    if (timeLeft > 0) {
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
    } if (timeLeft === 0) {
      endGame();
    }
  }, 1000);
  startScreen.classList.add("hide");
  quizScreen.classList.remove("hide");
buildQuestionCard();
}

)

function buildQuestionCard () {
  var quizText = document.getElementById("quiz-text");
  quizText.textContent = questions[qi].text
  var buttonBox = document.querySelector(".button-box");
  buttonBox.innerHTML = ""
  questions[qi].choices.forEach(function(choice){
    var button = document.createElement("button");
    button.textContent = choice;
    button.setAttribute("value", choice);
    button.onclick = function () {
    if (this.value === questions[qi].correct){
      isCorrect();
    } else {
      isWrong();
    } qi++;
    if (qi === questions.length) {
      endGame();
    } else {
      buildQuestionCard();
    }

    }
    buttonBox.appendChild(button);
  })
}

function isCorrect () {
  console.log("Correct!");
  answer.textContent = "Correct!"
}

function isWrong () {
  console.log("Incorrect");
  answer.textContent = "Incorrect - 10 seconds";
  timeLeft -= 10;
}

function endGame () {
    quizScreen.classList.add("hide");
    var timeScore = timeLeft;
    clearInterval(timeInterval);
    finalScore.textContent = "Game Over! Final score = " + timeScore;
    finalScore.classList.remove("hide");
    nameInput.classList.remove("hide");
    timerEl.classList.add("hide");
    
};
var scoreArray = JSON.parse(localStorage.getItem("High Scores")) || []


submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  var nameScore = {
    initials: initials.value,
    score: timeLeft,
  };
  scoreArray.push(nameScore);
  console.log(scoreArray);
  localStorage.setItem("High Scores", JSON.stringify(scoreArray));
  
});