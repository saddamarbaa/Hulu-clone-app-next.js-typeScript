/** @format */

import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Fragment } from "react";
import LogInComponent from "../components/login-page/login";

const LogInScreen: NextPage = () => {
	return (
		<Fragment>
			<Head>
				<title>LogIn to Hulu</title>
			</Head>
			<meta name='description' content='LogIn to Hulu' />
			<LogInComponent />
		</Fragment>
	);
};

export default LogInScreen;
