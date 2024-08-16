/** @format */

import axios from "axios";

const commonInstance = axios.create({
	baseURL: "http://localhost:3000",
});
const useAxios = () => {
	return commonInstance;
};

export default useAxios;
