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
	const [brand, setBrand] = useState("");
	const [priceRange, setPriceRange] = useState("");
	const [category, setCategory] = useState("");

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

	const handleFiltering = () => {
		const selectedBrandOption = document.querySelector(
			'input[name="brand"]:checked',
		);
		const selectedCategoryOption = document.querySelector(
			'input[name="category"]:checked',
		);
		const selectedPriceRangeOption = document.querySelector(
			'input[name="priceRange"]:checked',
		);
		if (selectedBrandOption) {
			setBrand(selectedBrandOption.value);
		}
		if (selectedCategoryOption) {
			setCategory(selectedCategoryOption.value);
		}
		if (selectedPriceRangeOption) {
			setPriceRange(selectedPriceRangeOption.value);
		}
	};
	console.log({ sort});

	const fetchProductsData = async () => {
		const { data } = await axios.get(
			`/products?search=${search}&sort=${sort}&category=${category}&brand=${brand}&pricerange=${priceRange}`,
		);
		setProducts(data);
	};

	useEffect(() => {
		fetchProductsData();
	}, [search, sort, category, brand]);

	if (!products.length && !search) return <h1 className="text-9xl">Loading</h1>;
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
					className="h-10 max-w-fit border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
				>
					<option defaultValue="sorting" selected disabled hidden>
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
					<div className="border rounded-md p-3 w-full mx-auto max-w-2xl">
						<h4 className="text-xl font-semibold">Brand Name</h4>
						<label className="flex bg-gray-100 text-gray-700 rounded-md px-2 py-1 my-1  hover:bg-indigo-300 cursor-pointer ">
							<input type="radio" name="brand" defaultValue="Fuji" />
							<i className="pl-2">Fuji</i>
						</label>
						<label className="flex bg-gray-100 text-gray-700 rounded-md px-2 py-1 my-1  hover:bg-indigo-300 cursor-pointer ">
							<input type="radio" name="brand" defaultValue="Organic Brown" />
							<i className="pl-2">Organic Brown</i>
						</label>
						<label className="flex bg-gray-100 text-gray-700 rounded-md px-2 py-1 my-1  hover:bg-indigo-300 cursor-pointer ">
							<input type="radio" name="brand" defaultValue="XYZ" />
							<i className="pl-2">XYZ</i>
						</label>
						<label className="flex bg-gray-100 text-gray-700 rounded-md px-2 py-1 my-1  hover:bg-indigo-300 cursor-pointer ">
							<input type="radio" name="brand" defaultValue="Gaming" />
							<i className="pl-2">Gaming</i>
						</label>
						<label className="flex bg-gray-100 text-gray-700 rounded-md px-2 py-1 my-1  hover:bg-indigo-300 cursor-pointer ">
							<input type="radio" name="brand" defaultValue="tel" />
							<i className="pl-2">tel</i>
						</label>
						<label className="flex bg-gray-100 text-gray-700 rounded-md px-2 py-1 my-1  hover:bg-indigo-300 cursor-pointer ">
							<input type="radio" name="brand" defaultValue="RFL" />
							<i className="pl-2">RFL</i>
						</label>
						<label className="flex bg-gray-100 text-gray-700 rounded-md px-2 py-1 my-1  hover:bg-indigo-300 cursor-pointer ">
							<input type="radio" name="brand" defaultValue="RDX" />
							<i className="pl-2">RDX</i>
						</label>
						<label className="flex bg-gray-100 text-gray-700 rounded-md px-2 py-1 my-1  hover:bg-indigo-300 cursor-pointer ">
							<input type="radio" name="brand" defaultValue="chaldhal" />
							<i className="pl-2">chaldhal</i>
						</label>
					</div>
					<div className="border rounded-md p-3 w-full mx-auto max-w-2xl">
						<h4 className="text-xl font-semibold">Category</h4>
						<label className="flex bg-gray-100 text-gray-700 rounded-md px-2 py-1 my-1  hover:bg-indigo-300 cursor-pointer ">
							<input type="radio" name="category" defaultValue="electronics" />
							<i className="pl-2">Electronics</i>
						</label>
						<label className="flex bg-gray-100 text-gray-700 rounded-md px-2 py-1 my-1  hover:bg-indigo-300 cursor-pointer ">
							<input type="radio" name="category" defaultValue="personal" />
							<i className="pl-2">Personal</i>
						</label>
						<label className="flex bg-gray-100 text-gray-700 rounded-md px-2 py-1 my-1  hover:bg-indigo-300 cursor-pointer ">
							<input type="radio" name="category" defaultValue="kitchen" />
							<i className="pl-2">House Kitchen</i>
						</label>
					</div>
					<div className="border rounded-md p-3 w-full mx-auto max-w-2xl">
						<h4 className="text-xl font-semibold">Price Range</h4>

						<label className="flex bg-gray-100 text-gray-700 rounded-md px-2 py-1 my-1  hover:bg-indigo-300 cursor-pointer ">
							<input type="radio" name="priceRange" defaultValue="1to20" />
							<i className="pl-2">1$ to 20</i>
						</label>
					</div>
					<button
						className="btn btn-ghost btn-success border outline-dashed mx-auto mt-4"
						onClick={handleFiltering}
					>
						Apply
					</button>
				</section>
			</div>
		</>
	);
};

export default Home;
