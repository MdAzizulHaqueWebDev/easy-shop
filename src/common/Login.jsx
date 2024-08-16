/** @format */

import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";

const Login = () => {
	const navigate = useNavigate();
	const [loading,setLoading] = useState(false)
	const { loginWithGoogle, loginWithEmailPass } = useAuth();
	const handleGoogleLogin = () => {
		loginWithGoogle()
			.then((res) => {
				console.log(res.user, "google login");
				if (res.user) {
					toast.success("Login Success");
				}
			})
			.cacth((err) => console.log(err));
	};

	// handle login with email pass
	const handleFormSubmit = (e) => {
		e.preventDefault();
		setLoading(true)
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		loginWithEmailPass(email, password)
			.then((res) => {
				setLoading(false)
				console.log(res)})
				.catch((err) => {
					setLoading(false)
				console.log(err)});
	};

	return (
		<>
			<div className="max-w-screen-xl modal-box m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1 relative">
				<div
					className="font-bold text-xl absolute top-4 right-4 cursor-pointer hover:bg-rose-500  rounded-full hover:scale-105 duration-200 p-4"
					onClick={() => document.querySelector("#login-modal").close()}
				>
					X
				</div>
				<>
					<div className="flex flex-col items-center p-5">
						<h1>Easy Shop</h1>
						<div className="w-full flex-1 mt-8">
							<div className="flex flex-col items-center">
								<button
									onClick={handleGoogleLogin}
									className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
								>
									<div className="bg-white p-2 rounded-full">
										<svg className="w-4" viewBox="0 0 533.5 544.3">
											<path
												d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
												fill="#4285f4"
											/>
											<path
												d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
												fill="#34a853"
											/>
											<path
												d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
												fill="#fbbc04"
											/>
											<path
												d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
												fill="#ea4335"
											/>
										</svg>
									</div>
									<span className="ml-4">Sign In with Google</span>
								</button>
							</div>

							<div className="my-12 border-b text-center">
								<div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
									Or sign In with Cartesian E-mail
								</div>
							</div>

							<form onSubmit={handleFormSubmit} className="mx-auto max-w-xs">
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
									<span className="ml-">Sign In</span>
								</button>
								<p className="mt-6 text-xs text-gray-600 text-center">
									Are you here new ?{" "}
									<span
										className="underline cursor-pointer"
										onClick={() => {
											document.querySelector("#login-modal").close();
											navigate("/register");
										}}
									>
										Sign up now
									</span>
								</p>
							</form>
						</div>
					</div>
				</>
			</div>
		</>
	);
};

export default Login;
