import * as fs from "node:fs/promises"; // To use Nodejs's file system tools
import * as readline from "node:readline/promises"; // To manage user input to a readable stream
import { stdin as input, stdout as output } from "node:process"; // Access to Node process's input and output
// Own helpers
import { randomElement } from "./helpers.js";

// Input stream es Readable, Output is Writable. Output to print prompts for user input, and we read from input stream
// https://nodejs.org/docs/latest-v22.x/api/readline.html#class-interfaceconstructor
const rl = readline.createInterface({ input, output });

/* User preferences config */
const confFileName = "user-config.json";
// By default we have this categories available:
const categories = [
	{ id: 1, name: "Wealth" },
	{ id: 2, name: "Gym/Sports" },
	{ id: 3, name: "Tech" },
	{ id: 4, name: "Love" },
	{ id: 5, name: "Religious (Christian)" },
];
const user = {
	name: "",
	categories: [], // This would be populated with the selected quote categories of the user
};

// const loadUserInfo = configFile => {
// 	// If file does not exist, create it
// 	// If it exists, load the configuration to the user object.
// 	// We need to use json for this
// };

// Which arguments are available to start the customization process:
const startArgvs = ["start", "s"];
// We save what the user has written after node randquote
const argv2 = process.argv[2];
// isStart is determined if the argument passed to our program is some of the variants of the array
const isStart = startArgvs.includes(argv2) ? true : false;

/* Pieces of data */
// For all the pieces we would be using to generate a random quote, we should add a
// ',' to them programatically
const hiPieces = ["Hi", "Hello", "How's it going?"]; // We would add the user.name with a space when doing our quote
const introPieces = ["Always remember", "I wish you're having a good day", ""];
const finalPieces = [
	"Stay focused!",
	"Don't forget it!",
	"C'mon, let's do this",
];

/* If user wants to change their preferences or they are executing the program for the first time (they have yet to assign a name) */
if (user.name.trim() === "" || isStart) {
	const name = await rl.question(
		`${randomElement(hiPieces)}, please input your name: `
	);
	// Save the name to the user object
	user.name = name;

	console.log(`Nice to meet you ${name}.\n`);

	console.log("Available categories");
	let selectedCategories;
	do {
		// Print all categories nicely and save user preferences
		categories.forEach(categorie => {
			console.log(`${categorie.id}. ${categorie.name}`);
		});
		selectedCategories = await rl.question(
			"Please write your preferred quote categories (separated by commas, eg. 1, 2, etc...): "
		);
		// Check to see if user input is valid, we check if its only digits from
		const validDigits = `[1-${categories.length}]`;
		const regex = new RegExp(
			`^\\s*${validDigits}\\s*(\\s*,\\s*${validDigits}\\s*)*\\s*,?\\s*$`
		);
		if (selectedCategories.match(regex)) {
			// Convert the selectedCategories to a array and change user categories to selectedCategories
			selectedCategories = selectedCategories.split(",");
			// Save category preferences to user object
			user.categories = selectedCategories;
		}
	} while (!user.categories.length);
	console.log(
		"Thank you! Your preferences have been saved. Next time you run Randquote, a random customn quote would be generated for you."
	);
	rl.close();
	console.log(user.name);
	console.log(user.categories);
}

/* This function fabricates the final quote that is displayed to the user */
// const mixedSentence = (hiArr, introArr, quoteArr, finalArr) => {};
