import inquirer from "inquirer";
let todolist = [];
while ('condition') {
    let addTask = await inquirer.prompt([
        {
            name: "todolist",
            type: "input",
            message: "What you want to add in your todolist?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "false"
        }
    ]);
    todolist.push(addTask.todolist);
    const condition = addTask.addMore;
    console.log(todolist);
}
