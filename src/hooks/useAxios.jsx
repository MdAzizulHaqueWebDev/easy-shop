/** @format */

import axios from "axios";

const commonInstance = axios.create({
	baseURL: "https://easy-shop-server-side.vercel.app",
});
const useAxios = () => {
	return commonInstance;
};

export default useAxios;
