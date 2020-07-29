import { Generators, Nonsense } from "@bradmerlin/nonsense";

export const randomFeatures = [
	{
		name: "SLOT",
		dev: {
			x: 20,
			y: 20,
			z: 20,
		},
		devOut: {
			x: 0,
			y: 0,
			z: 0,
		},
	},
	{
		name: "HOLE",
		dev: {
			x: 20,
			y: 20,
			z: 20,
		},
		devOut: {
			x: 10,
			y: 10,
			z: 10,
		},
	},
];

// Define data structure.
const randomData = {
	name: Generators.CHOICE(["SEAT", "SLOT", "HOLE"]),
	dev: {
		x: Generators.INT,
		y: Generators.INT,
		z: Generators.INT,
		diameter: Generators.INT,
	},
	devOut: {
		x: Generators.INT,
		y: Generators.INT,
		z: Generators.INT,
		diameter: Generators.INT,
	},
};

// Create generator
export const generator = Nonsense(randomData);

for (let i = 0; i < 3; i++) {
	randomFeatures.push(generator());
}
