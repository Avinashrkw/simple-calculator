import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { Message: "Enter your first number",type:"number",name:"firstNumber"},
    { Message: "Eenter your second number",type:"number",name:"secondNumber"},
    {
     Message: "Select one of the operators to perform action",
     type:"list",
     name: "operators",
     choices: ["ADDITION","SUBTRACTION","MULTIPLICATION","DIVISION"],
    },
]);
    //CONDITIONAL STATEMENT
if (answer.operators ==="ADDITION"){
    console.log(answer.firstNumber + answer.secondNumber);
} else if(answer.operators === "SUBTRACTION"){
    console.log(answer.firstNumber - answer.secondNumber);
} else if(answer.operators === "MULTIPLICATION"){
    console.log(answer.firstNumber * answer.secondNumber);
} else if(answer.operators === "DIVISION"){
    console.log(answer.firstNumber / answer.secondNumber);
}
else {"please select correct operators"}

