/* Return a random itrm from a array argument */
export const randomElement = arr => {
	return arr[Math.floor(Math.random() * arr.length)];
};
