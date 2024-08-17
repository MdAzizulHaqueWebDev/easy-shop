/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
	const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const { createUser } = useAuth();
	// handle create user with email pass
	const handleCreateUserFormSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		const form = e.target;
		const email = form.email.value;
		if (!emailValidator.test(email)) return toast.error("Invalid Email");
		const password = form.password.value;
		createUser(email, password)
			.then((res) => {
				setLoading(false);
				if (res.user) toast.success("Account Create");
				navigate("/")
			})
			.catch((err) => {
				setLoading(false);
				toast.error("Invalid Credential");
			});
			form.reset()
	};
	return (
		<div className="m-0 sm:m-10 bg-white rounded-lg flex justify-center">
			<div className="flex flex-col items-center p-5 lg:w-1/2 w-full">
				<h1 className="font-bold text-2xl">Easy Shop</h1>
				<div className="w-full flex-1">
					<div className="my-12 border-b text-center">
						<div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
							  Create an Account
						</div>
					</div>

					<form
						onSubmit={handleCreateUserFormSubmit}
						className="mx-auto max-w-xs"
					>
						<input
							className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
							type="email"
							name="email"
							placeholder="Email"
						/>
						<input
							className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
							type="password"
							name="password"
							placeholder="Password"
						/>
						<button className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
							{loading ? (
								<span className="loading loading-spinner loading-sm"></span>
							) : (
								<>
									<svg
										className="w-6 h-6 -ml-2"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
										<circle cx="8.5" cy="7" r="4" />
										<path d="M20 8v6M23 11h-6" />
									</svg>
									<span className="text-gray-800 font-bold">Create</span>
								</>
							)}
						</button>
						<p className="mt-6 text-xs text-gray-600 text-center">
							Have an account ?{" "}
							<span
								className="underline cursor-pointer"
								onClick={() => {
									document.querySelector("#login-modal").showModal();
									navigate("/");
								}}
							>
								Sign-in now
							</span>
						</p>
					</form>
				</div>
			</div>
			<div className=" bg-green-100 text-center hidden lg:block w-full lg:w-1/2 rounded">
				<img
					src="https://drive.google.com/uc?export=view&id=1KZ_Ub_2lZ0dHbKV0fAIhxVhiQA183RCz"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Register;
