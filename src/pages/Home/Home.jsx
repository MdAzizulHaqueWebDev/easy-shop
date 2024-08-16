/** @format */

import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Home = () => {
	const axios = useAxios();
	const [products, setProducts] = useState([]);
	const [search, setSearch] = useState("");
	const [sort, setSort] = useState("");

	// shortcut for query
	// const [queryParams, setQueryParams] = useState({
	// 	q: 'shoes',
	// 	category: 'men',
	// 	sort: 'price_asc',
	// 	page: 1,
	// 	limit: 10
	//   });
	// tanstack query
	// const {
	// 	data: products,
	// 	isPending,
	// 	refetch,
	// } = useQuery({
	// 	queryKey: ["products-collection"],
	// 	queryFn: async () => {
	// 		const { data } = await axios.get(
	// 			`/products?search=${search}&sort=${sort}`,
	// 		);
	// 		return data;
	// 	},
	// });

	const searchSubmit = (e) => {
		e.preventDefault();
		const searchValue = e.target.search.value;
		if (!searchValue.length || searchValue == " ")
			return toast.error("Please, Write anything ");
		setSearch(searchValue);
	};
	const fetchProductsData = async () => {
		const { data } = await axios.get(`/products?search=${search}&sort=${sort}`);
		setProducts(data);
	};

	useEffect(() => {
		fetchProductsData();
	}, [search, sort]);

	if (!products.length) return <h1 className="text-9xl">Loading</h1>;
	return (
		<>
			<div className="flex flex-col md:flex-row gap-3 max-w-5xl mx-auto">
				<form onSubmit={searchSubmit} className="flex md:w-3/4">
					<input
						type="text"
						name="search"
						placeholder="Search for the tool you like"
						className="w-full px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
					/>
					<button
						type="submit"
						className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
					>
						Search
					</button>
				</form>
				<select
					onChange={(e) => {
						setSort(e.target.value);
					}}
					id="pricingType"
					name="pricingType"
					className="h-10 max-w-fit border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
				>
					<option value="sorting" selected disabled hidden>
						Sorting
					</option>
					<option value="default">Default</option>
					<option disabled>Price</option>
					<option className="ml-10" value="lowToHigh">
						Low To High
					</option>
					<option value="highToLow" className="ml-3">
						High To Low
					</option>
					<option disabled>Date Added</option>
					<option value="newest">Newest</option>
					<option value="oldest">Oldest</option>
				</select>
			</div>
			<div className="grid grid-cols-8 my-3">
				<section className="col-span-6 w-full grid grid-cols-3 gap-2 p-2 lg:p-5">
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</section>
				<section className="col-span-2 w-full border rounded-xl p-5">
					filtering
				</section>
			</div>
		</>
	);
};

export default Home;
