import * as inquirer from "inquirer";
import chalk from "chalk";
var Operator;
(function (Operator) {
    Operator["ADD"] = "addition";
    Operator["SUB"] = "subtraction";
    Operator["MUL"] = "multiplication";
    Operator["DIV"] = "division";
})(Operator || (Operator = {}));
const prompt = inquirer.createPromptModule();
function validateInput(input) {
    if (isNaN(Number(input))) {
        return "Please enter a number";
    }
    return true;
}
async function main() {
    const input = await prompt([
        {
            type: "input",
            name: "num1",
            message: "Enter a first number:",
            validate: validateInput
        },
        {
            type: "list",
            name: "operator",
            message: "Select Operator:",
            choices: Object.values(Operator)
        },
        {
            type: "input",
            name: "num2",
            message: "Enter another 2nd number:",
            validate: validateInput
        }
    ]);
    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    const selectedOperator = input.operator;
    let result;
    if (selectedOperator == Operator.ADD) {
        result = num1 + num2;
        console.log(chalk.green.bgRedBright(`Result is : ${result}`));
    }
    else if (selectedOperator == Operator.DIV) {
        result = num1 / num2;
        console.log(chalk.yellow.bgBlackBright(`Result is : ${result}`));
    }
    else if (selectedOperator == Operator.MUL) {
        result = num1 * num2;
        console.log(chalk.white.bgBlackBright(`Result is : ${result}`));
    }
    else if (selectedOperator == Operator.SUB) {
        result = num1 - num2;
        console.log(chalk.green.bgRedBright(`Result is : ${result}`));
    }
}
main();
