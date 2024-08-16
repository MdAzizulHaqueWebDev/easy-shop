/** @format */

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div>
			<Helmet>
				<title>Page Not Found</title>
			</Helmet>
			<section className="flex items-center max-h-screen p-16 dark:bg-gray-50 dark:text-gray-800">
				<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
					<div className="max-w-md text-center">
						<img
							className="rounded-3xl "
							src="https://i.postimg.cc/P5fGsT8L/detective-animation-404-error-page.gif"
							alt="404 img"
						/>

						<p className="text-2xl capitalize my-4 font-semibold md:text-3xl">
							Sorry, we couldn't find this page.
						</p>
						<Link
							to="/"
							className="btn btn-wide btn-info hover:btn-error dark:bg-blue-600 dark:text-gray-50"
						>
							Back to homepage
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default NotFoundPage;
