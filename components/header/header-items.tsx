/** @format */

import React from "react";

type ItemsProps = {
	title?: string;
	Icon?: any;
};

const HeaderItems: React.FC<ItemsProps> = ({ title, Icon }) => {
	return (
		<div className='group flex flex-col items-center cursor-pointer  w-12 sm:w-20 hover:text-white transition duration-100 '>
			<Icon className='h-8 mb-1 group-hover:animate-bounce transition duration-100' />
			<p className='opacity-0 group-hover:opacity-100 tracking-widest '>
				{title}
			</p>
		</div>
	);
};

export default HeaderItems;
