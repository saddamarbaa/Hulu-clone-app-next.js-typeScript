/** @format */

import Head from "next/head";
import React from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";

import { ThumbUpIcon } from "@heroicons/react/outline";

import HeaderComponent from "../components/header/header";
import Nav from "../components/header/nav";
import request from "../utils/request";

const Home = (props) => {
	const BASE_URL = "https://image.tmdb.org/t/p/original";
	return (
		<React.Fragment>
			<Head>
				<title>Hulu Clone app</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<HeaderComponent />
			<Nav />
			<div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 max-w-[1500px] mx-auto'>
				{props?.movies?.map((movie) => {
					// src={`${BASE_URL}${movie?.backdrop_path} || ${movie?.poster_path}}`}
					return (
						<div
							key={movie?.id}
							className='group cursor-pointer p-2 transition duration-200 ease-out transform sm:hover:scale-105 hover:z-50'>
							<Image
								layout='responsive'
								src={
									`${BASE_URL}${
										movie?.backdrop_path || movie?.poster_path
									}` ||
									`https://image.tmdb.org/t/p/original/4vCh8R4yd6ybOmbxRAPOzaXmLTV.jpg`
								}
								width={500}
								height={320}
							/>
							<div className='p-2'>
								<p className='truncate max-w-md'>{movie?.overview}</p>
								<h2 className='mt-1 text-xl text-white transition-all ease-in-out group-hover:font-bold'>
									{movie?.title || movie?.original_name}
								</h2>
								<p className='flex items-center opacity-0 group-hover:opacity-100'>
									<ThumbUpIcon className='h-6 mx-2' />{" "}
									{movie?.vote_count}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</React.Fragment>
	);
};

export const getServerSideProps = async (context) => {
	const genre = context.query.genre;

	console.log(`https://api.themoviedb.org/3${request[genre]?.url}`);
	let url = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`;

	if (request[genre]?.url) {
		url = `https://api.themoviedb.org/3${request[genre]?.url}`;
	}

	const res = await fetch(url);
	const data = await res.json();

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: { movies: data?.results }, // will be passed to the page component as props
	};
};

export default Home;
