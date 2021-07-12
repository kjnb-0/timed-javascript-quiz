//questions and answers objects
var quizQuestions = [
  {
    question: "bla bla placeholder",
    choices: ["A", "B", "C", "D"],
    answer: "C",
  },
  {
    question: "example",
    choices: ["1", "2", "3", "4"],
    answer: "4",
  },
  {
    question: "bla bla placeholder",
    choices: ["A", "B", "C", "D"],
    answer: "C",
  },
  {
    question: "bla bla placeholder",
    choices: ["A", "B", "C", "D"],
    answer: "C",
  },
  {
    question: "bla bla placeholder",
    choices: ["A", "B", "C", "D"],
    answer: "C",
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
  console.log(welcomeMessage);
  //alert(welcome);
  scoreElement.textContent = scoreCount;
  timerElement.textContent = timerCount;
  document.querySelector("#testarea").classList.remove("hidden");
  startTimer();
  generateQuestions();
}

function rightAnswer() {
  var rightAnswerMessage = "Correct";
  //alert(rightAnswerMessage);
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
  //alert(wrongAnswerMessage);
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
  var endQuizMessage = "End of quiz! Submit your scores";
  //alert(endQuizMessage)
  lastQuestion = true;
  //hides test area when quiz ends
  document.querySelector("#testarea").classList.add("hidden");
  //function to submit initials and score
  //play again
}

//function to enter name/scores, store in local storage

//function for high scores button to access local storage and display info

//timer function to start and stop quiz timer
//if timer is 0 or the last question is reached, ends game
function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    // Tests if time has run out or end of questions is reached
    if (timerCount === 0 || lastQuestion) {
      // Clears interval
      clearInterval(timer);
      endQuiz(); //(message, input initials and score)
    }
  }, 1000);
}

document.querySelector("#choicesbox").addEventListener("click", chooseAnswer);

startButton.addEventListener("click", startQuiz);
