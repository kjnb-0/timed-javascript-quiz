console.log("test");

//questions and answers objects
var quizQuestions = [
  {
    questiontitle: "placeholder1",
    questionchoices: "placeholderchoices",
    questionanswer: "placeholderanswers",
  },
];

//
var startButton = document.querySelector("#start-btn");

var lastQuestion = false;

//timer variables
var timer;
var timerCount;
var timerElement = document.querySelector("#timer-count");

// to do....
// write timer function to countdown and end game
//write function to generate questions and answers using key/value pairs
//write function to keep score

// write welcome message in the start quiz function
function startQuiz() {
  var welcomeMessage =
    "Welcome to the Javascript quiz! Use your Javascript know-how to choose the correct answers before the timer runs out. Good luck!";
  console.log(welcomeMessage);
  //alert(welcome);
  timerCount = 60;
  startTimer();
}

function endQuiz() {
  var endQuizMessage = "End of quiz! Submit your scores";
  console.log(endQuizMessage);
  //alert(endQuizMessage)

  //function to submit initials and score
  //play again
}

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

startButton.addEventListener("click", startQuiz);
