/** @format */

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import Router from "next/router";

import firebase from "firebase";
import ProgressBar from "@badrap/bar-of-progress";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

import LogInScreen from "./login";
import LoadingScreen from "../components/ui/loading";

const progress = new ProgressBar({
	// The size (height) of the progress bar.
	// Numeric values get converted to px.
	size: 3,

	// Color of the progress bar.
	// Also used for the glow around the bar.
	color: "#1DE883",

	// Class name used for the progress bar element.
	className: "bar-of-progress",

	// How many milliseconds to wait before the progress bar
	// animation starts after calling .start().
	delay: 80,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }: AppProps) {
// 	const [user, loading] = useAuthState(auth);

// 	if (loading) {
// 		return <LoadingScreen />;
// 	}

// 	if (!user) {
// 		return <LogInScreen />;
// 	}

	return (
		<React.Fragment>
			<Head>
				<title>Hulu Clone app</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta name='author' content='Saddam Arbaa' />
				<meta
					name='description'
					content='Hulu Clone build with React + Next Js + TypeScript'
				/>
			</Head>
			<Component {...pageProps} />
		</React.Fragment>
	);
}

export default MyApp;
