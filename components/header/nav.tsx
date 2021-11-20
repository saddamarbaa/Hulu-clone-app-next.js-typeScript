/** @format */

import React from "react";
import { useRouter } from "next/router";

import request from "../../utils/request";

type NavProps = {
	title?: string;
	ur?: string;
};

const Nav: React.FC<NavProps> = () => {
	const router = useRouter();
	return (
		<nav className='relative'>
			<div className='flex  items-center  justify-between h-auto max-w-[1500px] mx-auto px-20 text-xl md:px-16  lg:text-2xl whitespace-nowrap overflow-hidden space-x-5'>
				{Object.entries(request).map(([key, { title, url }]) => {
					return (
						<h2
							key={key}
							className='cursor-pointer transition duration-100 transform hover:scale-105 hover:text-white active:text-red-500 '
							onClick={() => {
								router.push(`/?genre=${key}`);
							}}>
							{title}
						</h2>
					);
				})}
			</div>
		</nav>
	);
};

export default Nav;
