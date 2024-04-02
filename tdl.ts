import inquirer from "inquirer";

console.log("\tTO DO LIST\n");

const items: string[] = [];

async function tdl() {
    const prompts = [
        "first", "second", "third", "fourth", "fifth"
    ];

    for (const prompt of prompts) {
        const { value } = await inquirer.prompt({
            type: "input",
            name: "value",
            message: `Enter your ${prompt} item: `
        });
        items.push(value);
    }

    console.log("\n**********************");
    console.log("The to do list is as follows:");
    items.forEach(item => console.log(item));
}

tdl();
