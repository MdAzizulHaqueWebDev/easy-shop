/** @format */

import { Link } from "react-router-dom";
import Login from "./Login";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
const Navbar = () => {
	const { user } = useAuth();
	const [showMenu, setShowMenu] = useState(false);
	const navLinks = (
		<>
			<li className="p-2 border-e-0 hover:border-rose-500 lg:hover:text-rose-400 transition-all duration-300">
				<Link to="/" className="underline-offset-4 underline">
					Home
				</Link>
			</li>
			<li className="p-2 border-l-2 hover:border-rose-500 lg:hover:text-rose-400 transition-all duration-300">
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
			<li className="p-2 border-l-2 hover:border-rose-500 lg:hover:text-rose-400 transition-all duration-300">
				<Link to="/" className="underline-offset-4 underline">
					Supports
				</Link>
			</li>
			<li className="p-2 border-l-2 hover:border-rose-500 lg:hover:text-rose-400 transition-all duration-300">
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
				<nav className="lg:hidden block">
					{showMenu ? (
						<button
							onClick={() => setShowMenu(!showMenu)}
							className="btn btn-circle"
						>
							<svg
								className="swap-on fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 512 512"
							>
								<polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
							</svg>
						</button>
					) : (
						<button
							onClick={() => setShowMenu(!showMenu)}
							className="btn btn-circle"
						>
							<svg
								className="swap-off fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 512 512"
							>
								<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
							</svg>
						</button>
					)}
				</nav>
				<img
					src="/logo.png"
					className="w-20 hover:scale-150 duration-300 transition-all cursor-pointer"
					alt="logo"
				/>
				<nav
					className={`z-50 max-w-4xl mx-auto p-x-2 absolute lg:static lg:block ${
						showMenu
							? "-translate-x-16 top-24 p-6 lg:p-0 rounded-sm duration-500 transition-all bg-rose-400"
							: "-translate-x-80 lg:-translate-x-0"
					} absolute lg:static lg:block `}
				>
					<ul className="flex flex-col lg:flex-row justify-center space-x-10 border-t-2 text-gray-200 font-semibold group-hover:border-gray-700">
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
