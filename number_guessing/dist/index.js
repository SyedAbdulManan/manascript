import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random() * 100) + 1;
let remainingChances = 6;
console.log(randomNumber);
function validateNumber(input) {
    const number = parseFloat(input);
    if (isNaN(number)) {
        return "Please enter a number:";
    }
    if (number < 0 || number > 100) {
        return "Please enter a number between 0 and 100:";
    }
    return true;
}
async function askForNumber() {
    inquirer.prompt([{
            type: "input",
            name: "guess",
            message: "Enter guest a number between 0 and 100:",
            validate: validateNumber
        }])
        .then((answers) => {
        const guessedNumber = parseInt(answers.guess);
        if (guessedNumber == randomNumber) {
            console.log(chalk.green.bold("Congrats! You guessed the number!"));
            process.exit(0);
        }
        else if (guessedNumber < randomNumber) {
            remainingChances--;
            console.log(chalk.red.bold("low! You have " + remainingChances + " chances left!"));
            if (remainingChances == 0) {
                console.log(chalk.red.bold("You ran out of chances! The number was " + randomNumber));
            }
            else {
                askForNumber();
            }
        }
        else if (guessedNumber > randomNumber) {
            remainingChances--;
            console.log(chalk.red.bold("High! You have " + remainingChances + " chances left!"));
            if (remainingChances == 0) {
                console.log(chalk.red.bold("You ran out of chances! The number was " + randomNumber));
            }
            else {
                askForNumber();
            }
        }
    });
}
askForNumber();
