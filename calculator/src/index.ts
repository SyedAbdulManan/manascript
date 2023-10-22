import * as inquirer from "inquirer"
import chalk from "chalk"

enum Operator{
    ADD = "addition",
    SUB = "subtraction",
    MUL = "multiplication",
    DIV = "division"
}

const prompt = inquirer.createPromptModule();

function validateInput(input: string): boolean | string{
    if(isNaN(Number(input))){
        return "Please enter a number"
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
            type: "list", // or rawlist
            name: "operator",
            message: "Select Operator:",
            choices : Object.values(Operator)
        },
        {
            type: "input",
            name: "num2",
            message: "Enter another 2nd number:",
            validate: validateInput
        }
    ])

    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    const selectedOperator = input.operator as Operator
    let result:number;

    if (selectedOperator == Operator.ADD) {
        result = num1 + num2;
        console.log(chalk.green.bgRedBright(`Result is : ${result}`));
    } else if (selectedOperator == Operator.DIV) {
        result = num1 / num2;
        console.log(chalk.yellow.bgBlackBright(`Result is : ${result}`));
    }else if (selectedOperator == Operator.MUL) {
        result = num1 * num2;
        console.log(chalk.white.bgBlackBright(`Result is : ${result}`));
    }else if(selectedOperator == Operator.SUB) {
        result = num1 - num2;
        console.log(chalk.green.bgRedBright(`Result is : ${result}`));
    }
}
main();