const COLORS = {
	green: {
		bg: "bg-lime-300",
		badge: "bg-lime-100 ",
	},
	orange: {
		bg: "bg-orange-300",
		badge: "bg-orange-100",
	},
	red: {
		bg: "bg-red-300",
		badge: "bg-red-100",
	},
};

export const getRandomColor = () => {
	const colorNames = Object.keys(COLORS); // Get array of the keys (color names)
	const randomIndex = Math.floor(Math.random() * colorNames.length); // Get a random index
	const randomColorName = colorNames[randomIndex]; // Get the color name at the random index
	return COLORS[randomColorName]; // Return the color object corresponding to the random color name
};