var readlineSync = require("readline-sync");
var score = 0;

function welcome() {
  var userName = readlineSync.question("What's your name? ");
  console.log("Welcome " + userName + " to the F.R.I.E.N.D.S quiz");
}

var arr = [
  {
    question: "Which Stephan King book did Joey hide in his freeze? ",
    answer: "The Shining",
  },

  {
    question: "How many sisters does Joey have? ",
    answer: "seven"
  },

  {
    question: "What is the name of Joey's bed-time penguin pal? ",
    answer: "Hugsy",
  },

  {
    question: "Which famous actor’s butt does Joey play in a shower scene? ",
    answer: "Al Pacino",
  },

  {
    question: "What is the name of Joey’s character in the commercial for opening milk cartons?",
    answer: "Kevin",
  }
]

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!");
    score++;
  } else {
    console.log("Wrong");
  }
  console.log("Current score: ", score);
}

function playNow() {
  for (i = 0; i < arr.length; i++) {
    play(arr[i].question, arr[i].answer);
  }
}

function finalScore() {
  console.log("Your Final Score is: ", score);
}

welcome();
playNow();
finalScore();
