/* Return a random item from an array argument */
export const randomElement = arr => {
	return arr[Math.floor(Math.random() * arr.length)];
};
