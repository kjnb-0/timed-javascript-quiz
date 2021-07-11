var titlesHeaders = document.querySelector("#titles-headers")

//function welcoming/explaining how the quiz works
function welcomeToQuiz(){
var welcomeMessage = document.querySelector("#titles-headers");
welcomeMessage.textContent("Welcome to the quiz! Use your Javascript knowledge to answer the following questions before the timer runs out. Good luck!");
}

// to do.... 
// write timer function to countdown and end game 
// write welcome message function
//write function to generate questions and answers
//write function to keep score 
//


var answerChoices = document.createElement("ol")

var choice1 = document.createElement("li")

choice1.textContent("choose option A")

// TODO: Add ordered list items containing four favorite foods

//define the text content for the list variables
choice1.textContent = "food1";
li2.textContent = "food2";
li3.textContent = "food3";
li4.textContent = "food4";

//append list items to ordered list
answerChoices.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);