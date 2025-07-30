import fs from "node:fs"; // To use Nodejs's file system tools
import readline from "readline/promises"; // To manage user input to a readable stream with promises
import { stdin as input, stdout as output } from "node:process"; // Access to Node process's input and output

// Own helpers
import { randomElement } from "./helpers.js";

// Pieces of the quote we will use to randomly change our quote.
import { welcomeStrings, introStrings, finalStrings } from "./quotedata.js";

// Quotes divided by category
import categoryQuotes from "./quotedata.js";

// Input stream es Readable, Output is Writable. Output to print prompts for user input, and we read from input stream
// https://nodejs.org/docs/latest-v22.x/api/readline.html#class-interfaceconstructor
async function main() {
	const rl = readline.createInterface({ input, output });

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

	// Arguments available to start the customization process:
	const startArgvs = ["start", "s"];
	// Store the argument provided by the user after 'node randquote'
	const argv2 = process.argv[2];
	// 'isInitialConfig' is true if the argument passed to our program is one of the start variants.
	const isInitialConfig = startArgvs.includes(argv2) ? true : false;

	/* User preferences config loading and saving */
	const confFilePath = "./userconfig.json";

	const writeUserInfo = () => {
		try {
			const confContent = JSON.stringify(user);
			fs.writeFileSync(confFilePath, confContent);
			console.log(
				"\nThank you! Your preferences have been saved. Next time you run Randquote, a random custom quote would be generated for you."
			);
		} catch (err) {
			console.error("Error saving configuration file", err);
		}
	};

	const readUserInfo = () => {
		try {
			return fs.readFileSync(confFilePath, "utf8");
		} catch (err) {
			console.error("Error reading file:", err);
			return null;
		}
	};

	/* This function constructs the final quote to be displayed to the user */
	// All parameters are arrays
	const randomQuote = (welcomesArr, introsArr, quotesArr, finalsArr) => {
		// First get random element from all of our pieces of text
		const welcome = randomElement(welcomesArr);
		let intro = randomElement(introsArr);
		const final = randomElement(finalsArr);

		// For the quote, get a random category from the user's preferences
		const categoryId = randomElement(user.categories);
		const categoryName = categories.find(
			category => category.id == categoryId
		).name;
		const quoteObject = quotesArr.find(category => {
			return category.id == categoryId; // We use '==' because the category IDs in the array are strings.
		});

		// Get the quote
		const quote = randomElement(quoteObject.quotes);
		// If the intro text is not empty, add a colon:
		if (intro) {
			intro += ":";
		}
		// Log our final quote message
		console.log(`${welcome} ${user.name}! ${intro}\n\n"${quote}" ${final}`);
		console.log(`\nCategory: ${categoryName}`);
	};

	/* If the user wants to change their preferences or is running the program for the first time (and has not yet assigned a name) */
	if (isInitialConfig || !fs.existsSync(confFilePath)) {
		const name = await rl.question(
			`${randomElement(welcomeStrings)}, please input your name: `
		);

		// Save the name to the user object
		user.name = name;

		console.log(`\nNice to meet you ${name}!`);

		console.log("Available categories");
		let selectedCategories;
		do {
			// Print all categories and prompt the user for their preferences
			categories.forEach(categorie => {
				console.log(`${categorie.id}. ${categorie.name}`);
			});
			selectedCategories = await rl.question(
				"\nPlease write your preferred quote categories (separated by commas, eg. 1, 2, etc...): "
			);

			// Check if the user input is valid. We check if it only contains digits within the valid range.
			const validDigits = `[1-${categories.length}]`;
			const regex = new RegExp(
				`^\\s*${validDigits}\\s*(\\s*,\\s*${validDigits}\\s*)*\\s*,?\\s*$`
			);
			if (selectedCategories.match(regex)) {
				// Convert the selectedCategories string to an array and update the user's categories
				selectedCategories = selectedCategories
					.split(",")
					.map(cat => cat.trim());

				// Save category preferences to user object
				user.categories = selectedCategories;
			}
		} while (!user.categories.length);
		writeUserInfo(); // Write the user preferences to a JSON file.
		rl.close();
	} else {
		// Load user data from file
		const jsonData = readUserInfo();
		if (jsonData) {
			const userFromJSON = JSON.parse(jsonData);
			user.name = userFromJSON.name;
			user.categories = userFromJSON.categories;

			// Generate random quote
			randomQuote(welcomeStrings, introStrings, categoryQuotes, finalStrings);
		} else {
			console.log(
				"Error loading user preferences. Please run with 'start' argument to set up your preferences."
			);
		}
		rl.close();
	}
}

main();
