/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthProvider from "./context/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HelmetProvider>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<RouterProvider router={routes} />
				</AuthProvider>
			</QueryClientProvider>
		</HelmetProvider>
		<Toaster
			position="top-right"
			toastOptions={{
				style: {
					zIndex: 999,
				},
			}}
		/>
	</StrictMode>,
);
