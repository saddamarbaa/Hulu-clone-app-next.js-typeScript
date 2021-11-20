/** @format */
import React from "react";
import Image from "next/image";
import {
	HomeIcon,
	CollectionIcon,
	BadgeCheckIcon,
	SearchIcon,
	UserIcon,
	LightningBoltIcon,
} from "@heroicons/react/outline";

import HeaderItems from "./header-items";

const HeaderComponent: React.FunctionComponent = () => {
	return (
		<header className='flex flex-col items-center sm:flex-row mt-5 justify-between h-auto max-w-[1500px] mx-auto'>
			<div className='flex items-center justify-evenly flex-grow max-w-2xl space-x-5'>
				<HeaderItems title='Home' Icon={HomeIcon} />
				<HeaderItems title='TERDING' Icon={LightningBoltIcon} />
				<HeaderItems title='VERFIFIED' Icon={CollectionIcon} />
				<HeaderItems title='SEARCH' Icon={SearchIcon} />
				<HeaderItems title='ACCOUNT' Icon={SearchIcon} />
			</div>
			<Image
				src='/images/hulu-white.png'
				width={200}
				height={100}
				className='object-contain'
			/>
		</header>
	);
};

export default HeaderComponent;
