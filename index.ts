
import inquirer from "inquirer"

// 1) computer will generate a random number

// 2) user input for  guessing number

// 3) compare user number and generated number and show result

let randomNumber = Math.floor(Math.random() * 6 + 1);

let answers = await inquirer.prompt([
    {
      name: "userGuessedNumber",
      type: "Number",
      message: "please enter your guessed number between 1-6:",
    },
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("congratulations! you giot it right:");
}else{
    console.log("sorry,that's wrong:");
}