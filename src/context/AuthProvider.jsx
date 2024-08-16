/** @format */

import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Auth/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// create user with email pass
	const createUser = (email, password) =>
		createUserWithEmailAndPassword(auth, email, password);
	// login with google
	const loginWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider());
	//login with email pas
	const loginWithEmailPass = (email, password) =>
		signInWithEmailAndPassword(auth, email, password);
	useEffect(() => {
		const authStateChangedSpy = onAuthStateChanged(auth, (user) => {
			setUser(user);
			setLoading(false);
		});
		return () => authStateChangedSpy();
	}, []);

	const authInfo = {
		user,
		loading,
		createUser,
		loginWithGoogle,
		loginWithEmailPass,
	};
	console.log(user);
	return (
		<AuthContext.Provider value={authInfo}>
			{loading ? (
				<span className="loading loading-spinner loading-lg"></span>
			) : (
				children
			)}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
