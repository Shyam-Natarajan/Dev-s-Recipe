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
	const colorNames = Object.keys(COLORS); 
	const randomIndex = Math.floor(Math.random() * colorNames.length); 
	const randomColorName = colorNames[randomIndex];
	return COLORS[randomColorName]; 
};