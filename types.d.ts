export type Product = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
};

export type Cart = {
	quantity: number;
	id: number;
	title: string;
	price: number;
	image: string;
}[];
