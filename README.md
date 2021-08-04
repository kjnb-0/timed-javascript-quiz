# timed-javascript-quiz
https://kjnb-0.github.io/timed-javascript-quiz/

This page is a timed multiple choice quiz. 

When start button is clicked, the quiz displays a question and multiple choice answer set. If the user picks correctly, the score increases. If the user picks incorrectly, the score decreases. 

When the timer reaches 0 or the last question is reached, the quiz ends. 

The user has an option to enter their initials to save their score.

When the high scores button is pushed, user sees an alert with the last saved score and initials. 

![Screen Shot 2021-08-04 at 9 23 39 AM](https://user-images.githubusercontent.com/80792196/128217913-3faf8bc5-9730-48dc-825f-66ff2bca25c5.png)

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```
