var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("start-button");
var quizScreen = document.getElementById("quiz");
var qi = 0;
var startScreen = document.getElementById("start");
var questions = [
  {
    text: "This is the first question",
    choices: ["a", "b", "c", "d"],
    correct: "a"
  },
  {
    text: "This is the second question",
    choices: ["a", "b", "c", "d"],
    correct: "c"
  },
  {
    text: "This is the third question",
    choices: ["a", "b", "c", "d"],
    correct: "d"
  },
  {
    text: "This is the fourth question",
    choices: ["a", "b", "c", "d"],
    correct: "b"
  },
]


startBtn.addEventListener("click", function countdown() {
  var timeLeft = 60;


  var timeInterval = setInterval(function (){
    if (timeLeft > 0) {
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;

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
  console.log("true");
}

function isWrong () {
  console.log("false");
}

function endGame () {
  console.log("End Game");
}