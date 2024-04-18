import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstnumber" },
  { message: "enter second number", type: "number", name: "secondnumber" },
  {
    message: "selct one operator to perform",
    type: "list",
    name: "operator",
    choices: ["Addition", "substract", "multiplication", "division"],
  },
]);

if(answer.operator === "Addition"){
    console.log( answer.firstnumber  + answer.secondnumber)
}
else if(answer.operator === "substract"){
    console.log( answer.firstnumber  - answer.secondnumber)
}
else if(answer.operator === "multiplication"){
    console.log( answer.firstnumber  * answer.secondnumber)
}
else if(answer.operator === "division"){
    console.log( answer.firstnumber  / answer.secondnumber)
}

