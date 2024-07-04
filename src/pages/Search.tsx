import { FormEvent, useState } from "react";
import useProducts from "../hooks/useProducts";
import { Product } from "../../types";
import ProductCard from "../components/ProductCard";
import { Helmet } from "react-helmet";

const Search = () => {
	const products = useProducts();
	const [query, setQuery] = useState<string>("");
	const [searchResults, setSearchResults] = useState<Product[]>(products);
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const sr = products.filter(product =>
			JSON.stringify(product)
				.toLowerCase()
				.includes(query.trim().toLowerCase())
		);
		setSearchResults(sr);
	};

	return (
		<>
			<Helmet>
				<title>DoWell Shop | Search</title>
				<meta
					name="description"
					content="Search for products on DoWell Shop"
				/>
			</Helmet>
			<div className="mx-auto px-4 py-8 bg-slate-50">
				<form onSubmit={handleSubmit} className="mb-8 flex gap-2">
					<input
						className="flex h-10 border border-input text-sm w-full rounded-lg px-4 py-2 focus:border-2 focus:border-black outline-none"
						placeholder="Search products..."
						type="search"
						value={query}
						onChange={e => setQuery(e.target.value)}
					/>
					<button className="bg-zinc-700 hover:bg-zinc-600 active:scale-[98%] text-white inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium px-4 py-2">
						Search
					</button>
				</form>
				<div className="mt-12">
					<div className="py-8 px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
						{searchResults.map(product => (
							<ProductCard key={product.id} {...product} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Search;
