/** @format */

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import Home from "../pages/Home/Home";
import Register from "../common/Register";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <NotFoundPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},

			{
				path: "/register",
				element: <Register />,
			},
		],
	},
]);
export default routes;
