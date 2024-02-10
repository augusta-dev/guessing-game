"use client";
import React, { useContext, useState } from "react";
import ListContext, { ListContextObj } from "../Contexts/ListContext";
import Image from "next/image";
import CreateLists from "./CreateLists";
import favicon from "../../assets/favicon.svg";
import Link from "next/link";
export default function Splashscreen() {
	const listCtx: ListContextObj = useContext(ListContext);
	const images = listCtx.full;
	const [hasBackdrop, setBackdrop] = useState<boolean>(true);
	const selectSeries = (
		e: React.MouseEvent<HTMLButtonElement>,
		number: number,
	) => {
		setBackdrop(!hasBackdrop);
		listCtx.setIndex(number);
		console.log(number);
	};
	let number = -1;
	let array = [];
	return (
		<div className="px-6 w-full">
			<CreateLists />
			<div className="flex justify-between">
				<h1 className="font-poppins font-semibold text-white text-xl mt-4">
					Available Series
				</h1>
				<Link href="/">
					<Image
						src={favicon}
						width="200"
						height="200"
						className="w-12"
						alt="icon"
					></Image>
				</Link>
			</div>
			{images.map((image) => {
				number++;
				return (
					<Link
						href="/scorekeeper"
						key={number}
					>
						<button
							type="button"
							onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
								selectSeries(e, images.indexOf(image))
							}
							className={`backdrop-blur-lg`}
						>
							{}
							<Image
								src={image}
								className="w-full h-50 rounded-lg mt-1 mb-3"
								width="3000"
								height="3000"
								alt="image"
							></Image>
						</button>
					</Link>
				);
			})}
		</div>
	);
}
