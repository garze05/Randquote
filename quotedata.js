/* Pieces of data */
// For all the pieces we would be using to generate a random quote, we should add a
// ',' to them programatically

// We would add the user.name with a space when doing our quote
export const welcomeStrings = [
	"Hi",
	"Hey",
	"Hello",
	"Yo",
	"Hey there",
	"Howdy",
	"What’s up",
	"Hiya",
	"How’s it going?",
	"Greetings",
	"Hey buddy",
	"Sup",
];

export const introStrings = [
	"Always remember",
	"Just a quick reminder",
	"Hope you're having a fantastic day",
	"I wish you're having a good day",
	"Today is a good day to grow",
	"Keep this in mind",
	"Never forget",
	"Take this to heart",
	"Here’s something for you",
	"Because you deserve greatness",
	"", // Possibility of not having an intro piece
];

export const finalStrings = [
	"Stay focused!",
	"Don’t forget it!",
	"You’ve got this!",
	"Let’s crush the day!",
	"Keep grinding!",
	"Push your limits!",
	"Believe in yourself!",
	"C’mon, let’s do this!",
	"Make it happen!",
	"Keep going, warrior!",
];
// We will save an object of quotes with an id and the corresponding body of the quote, so we can match the interests of the user with given quotes
export const categoryQuotes = [
	{
		id: 1, // Wealth
		quotes: [
			"Wealth is the ability to fully experience life.",
			"Money is a tool. Use it, don’t worship it.",
			"Invest in assets, not liabilities.",
			"The rich invest in time, the poor invest in money.",
			"Compound interest is the eighth wonder of the world.",
			"Financial freedom is earned, not given.",
			"Work to learn, not just to earn.",
			"Save like a pessimist, invest like an optimist.",
			"Live below your means, invest the difference.",
			"Wealth flows to those who value discipline over desire.",
		],
	},
	{
		id: 2, // Gym/Sports
		quotes: [
			"Discipline beats motivation every single time.",
			"Your body can stand almost anything. It’s your mind you have to convince.",
			"No pain, no gain.",
			"One more rep makes all the difference.",
			"Strong today, stronger tomorrow.",
			"Success in the gym starts with showing up.",
			"Train like a beast, look like a beauty.",
			"Sweat is fat crying.",
			"Champions are made when no one is watching.",
			"Don’t wish for it. Work for it.",
		],
	},
	{
		id: 3, // Tech
		quotes: [
			"Any sufficiently advanced technology is indistinguishable from magic.",
			"First, solve the problem. Then, write the code.",
			"Simplicity is the soul of efficiency.",
			"Code is like humor. When you have to explain it, it’s bad.",
			"Technology evolves faster than culture.",
			"Think twice, code once.",
			"Good code is its own best documentation.",
			"In tech, you either build or get disrupted.",
			"Debugging is like being the detective in a crime movie where you are also the murderer.",
			"Talk is cheap. Show me the code.",
		],
	},
	{
		id: 4, // Love
		quotes: [
			"Love is not about possession. It’s about appreciation.",
			"The best relationships are built on trust, laughter, and vulnerability.",
			"You know it’s love when all you want is that person to be happy, even if you’re not part of their happiness.",
			"Fall in love with someone who feels like home.",
			"True love doesn’t have a happy ending—because it never ends.",
			"To love and be loved is to feel the sun from both sides.",
			"Love is a decision, not just a feeling.",
			"In a sea of people, my eyes will always search for you.",
			"Grow together, not apart.",
			"Real love is when your soul recognizes its mate.",
		],
	},
	{
		id: 5, // Religious (Christian)
		quotes: [
			"Let your faith be bigger than your fear.",
			"God’s plan is always better than your own.",
			"With God, all things are possible. —Matthew 19:26",
			"Be still and know that I am God. —Psalm 46:10",
			"When life gets too hard to stand, kneel.",
			"Trust in the Lord with all your heart. —Proverbs 3:5",
			"Prayer is the bridge between panic and peace.",
			"God doesn’t call the qualified. He qualifies the called.",
			"Faith is not believing God can. It’s knowing He will.",
			"Jesus didn’t die to make you religious. He died to set you free.",
		],
	},
];

export default categoryQuotes;
