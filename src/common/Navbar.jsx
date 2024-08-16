/** @format */

import { Link } from "react-router-dom";
import Login from "./Login";
import useAuth from "../hooks/useAuth";
const Navbar = () => {
	const { user } = useAuth();
	console.log(user);
	const navLinks = (
		<>
			<li className="p-2 border-e-0 hover:border-rose-500 hover:text-rose-400 transition-all duration-300">
				<Link to="/" className="underline-offset-4 underline">
					Home
				</Link>
			</li>
			<li className="p-2 border-l-2 hover:border-rose-500 hover:text-rose-400 transition-all duration-300">
				<div className="dropdown dropdown-hover">
					<span
						tabIndex={0}
						role="button"
						className="underline-offset-4 underline"
					>
						Products
					</span>
					<ul
						tabIndex={0}
						className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
					>
						<li>
							<Link to={"s"}>Electronics</Link>
						</li>
						<li>
							<Link to={"?s"}>Personal Care</Link>
						</li>
					</ul>
				</div>
			</li>
			<li className="p-2 border-l-2 hover:border-rose-500 hover:text-rose-400 transition-all duration-300">
				<Link to="/" className="underline-offset-4 underline">
					Supports
				</Link>
			</li>
			<li className="p-2 border-l-2 hover:border-rose-500 hover:text-rose-400 transition-all duration-300">
				<Link to="/" className="underline-offset-4 underline">
					Reviews
				</Link>
			</li>
		</>
	);
	return (
		<>
			<h1 className="text-center font-bold">
				<span className="text-xl text-rose-400 underline underline-offset-4">
					Easy
				</span>{" "}
				Shop
			</h1>
			<section className="flex items-center justify-evenly max-w-4xl mx-auto">
				<img
					src="/logo.png"
					className="w-20 hover:scale-150 duration-300 transition-all cursor-pointer"
					alt="logo"
				/>
				<nav className="max-w-4xl mx-auto p-x-2">
					<ul className="flex justify-center space-x-10 border-t-2 text-gray-200 font-semibold group-hover:border-gray-700">
						{navLinks}
					</ul>
				</nav>
				<div>
					{user ? (
						<div className="avatar placeholder">
							<div className="bg-neutral text-neutral-content w-12 rounded-full hover:border-rose-500 border-2 cursor-pointer">
								<span>SY</span>
							</div>
						</div>
					) : (
						<button
							className="btn btn-outline btn-success"
							onClick={() => document.querySelector("#login-modal").showModal()}
						>
							Login
						</button>
					)}
				</div>
			</section>
			{/* login modal */}
			<dialog id="login-modal" className="lg:max-w-3xl modal mx-auto">
				<Login />
			</dialog>
		</>
	);
};

export default Navbar;
