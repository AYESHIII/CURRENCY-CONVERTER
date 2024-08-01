//#! user/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright.bold(`\n\t || WELCOME TO CURRENCY CONVERTER ||\n\t`));
console.log("=".repeat(60));
let exchange_rate = {
    //define the currencies and their exchange rates
    "USD": 1, // base currency 
    "EUR": 1.09, // european currency
    "JYP": 110.32, // japeness currency
    "AUD": 1.31, // australlian dollar
    "CAD": 1.25, // candian dollar
    "PKR": 278.63, // pakistani rupees
};
//promp the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from",
        choices: ["USD", "EUR", "JYP", "AUD", "CAD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert into",
        choices: ["USD", "EUR", "JYP", "AUD", "CAD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "enter the amount to convert",
        choices: ["USD", "EUR", "JYP", "AUD", "CAD", "PKR"]
    }
]);
// perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// display the converted 
console.log(`onverted_Amount ${chalk.blue.bold(converted_amount.toFixed(2))}`);
