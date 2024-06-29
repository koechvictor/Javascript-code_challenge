const prompt = require("prompt-sync")();
grade = prompt("Please enter your score: ");

function grade_generator() {
  if (grade > 79 && grade <= 100) {
    console.log("You scored an A");
  } else if (grade < 80 && grade > 59) {
    console.log("You scored a B");
  } else if (grade < 60 && grade > 48) {
    console.log("You scored a C");
  } else if (grade < 49 && grade > 39) {
    console.log("You scored a D");
  } else if (grade < 40 && grade >= 0) {
    console.log("You scored an E");
  } else {
    console.log("Invalid grade");
  }
}
grade_generator()
