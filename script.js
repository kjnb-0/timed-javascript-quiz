//questions and answers objects
var quizQuestions = [
  {
    question: "Which of the following is not a Javascript variable type?",
    choices: ["A. Number", "B. String", "C. Display", "D. Boolean"],
    answer: "C. Display",
  },
  {
    question: "What symbol should be used to end a Javascript statement?",
    choices: ["A. *", "B. ;", "C. []", "D. ,"],
    answer: "B. ;",
  },
  {
    question: "What does '++' indicate?",
    choices: ["A. Move to next function", "B. Multiply by 2", "C. Square the value", "D. Increase by 1"],
    answer: "D. Increase by 1",
  },
  {
    question: "What symbole is used to assign a value to a variable?",
    choices: ["A. =", "B. <=", "C. ==", "D. []"],
    answer: "A. =",
  },
  {
    question: "How are strings stored?",
    choices: ["A. Using double quotes", "B. Using single quotes", "C. Using either single or double quotes", "D. No quotes are needed"],
    answer: "C. Using either single or double quotes",
  },
];

//quiz flow variables
var lastQuestion = false;
var currentQuestionIndex = 0;

//general variables
var startButton = document.querySelector("#start-btn");
var questions = document.querySelector("#questions");
var choices1 = document.querySelector("#choices1");
var choices2 = document.querySelector("#choices2");
var choices3 = document.querySelector("#choices3");
var choices4 = document.querySelector("#choices4");
var userInitials = document.querySelector("#initials").value;
var submitButton = document.querySelector("#submitscore");

//timer variables
var timer;
var timerCount = 60;
var timerElement = document.querySelector("#timer-count");

//score variables
var score;
var scoreCount = 0;
var scoreElement = document.querySelector("#score-count");

// write welcome message in the start quiz function
function startQuiz() {
  var welcomeMessage =
    "Welcome to the Javascript quiz! Use your Javascript know-how to choose the correct answers before the timer runs out. Good luck!";
  alert(welcomeMessage);
  scoreElement.textContent = scoreCount;
  timerElement.textContent = timerCount;
  document.querySelector("#testarea").classList.remove("hidden");
  document.querySelector("#scoresarea").classList.add("hidden");
  startTimer();
  generateQuestions();
}

function rightAnswer() {
  var rightAnswerMessage = "Correct";
  alert(rightAnswerMessage);
  scoreCount += 10;
  scoreElement.textContent = scoreCount;

  currentQuestionIndex++;
  if (currentQuestionIndex === quizQuestions.length) {
    endQuiz();
  } else {
    generateQuestions();
  }
}

function wrongAnswer() {
  var wrongAnswerMessage = "Incorrect";
  alert(wrongAnswerMessage);
  timerCount -= 10;
  scoreElement.textContent = scoreCount;
  currentQuestionIndex++;
  if (currentQuestionIndex === quizQuestions.length) {
    endQuiz();
  } else {
    generateQuestions();
  }
}

function generateQuestions() {
  //tutor helped with notation for accessing objects
  questions.textContent = quizQuestions[currentQuestionIndex].question;
  choices1.textContent = quizQuestions[currentQuestionIndex].choices[0];
  choices2.textContent = quizQuestions[currentQuestionIndex].choices[1];
  choices3.textContent = quizQuestions[currentQuestionIndex].choices[2];
  choices4.textContent = quizQuestions[currentQuestionIndex].choices[3];
}
//user picks answer and moves to next question
function chooseAnswer(event) {
  //listen to user click and evaluate against value
  if (event.target.textContent === quizQuestions[currentQuestionIndex].answer) {
    rightAnswer();
  } else {
    wrongAnswer();
  }
}

function endQuiz() {
  lastQuestion = true;
  //hides test area when quiz ends
  document.querySelector("#testarea").classList.add("hidden");
  document.querySelector("#scoresarea").classList.remove("hidden");
  //shows score on form
  document.querySelector("#currentscore").textContent = scoreCount;
  saveScores();
}


//this is saving the score, but not the initials / user input from the form
function saveScores() {
  localStorage.setItem("high score", scoreCount);
  localStorage.setItem("initials", userInitials);
}

//displaying score but not initials 
function showScores() {
  alert(
    localStorage.getItem("high score", scoreCount) +
      localStorage.getItem("initials", userInitials)
  );
}

//timer function to start and stop quiz timer
//if timer is 0 or the last question is reached, ends game
function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    // Tests if time has run out or end of questions is reached
    if (timerCount <= 0 || lastQuestion) {
      // Clears interval
      clearInterval(timer);
      endQuiz(); //(message, input initials and score)
    }
  }, 1000);
}
//on click, check user selection with quiz answer
document.querySelector("#choicesbox").addEventListener("click", chooseAnswer);
//on click, high scores button retrieves scores
document.querySelector("#high-scores").addEventListener("click", showScores);

submitButton.addEventListener("click", saveScores);
startButton.addEventListener("click", startQuiz);
