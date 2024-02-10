"use client";
import React from "react";
import Image from "next/image";
import avatar from "../../assets/boy.svg";

export default function PlayerData() {
	const [number, changeNumber] = React.useState<number>(0);
	const increase = () => 	changeNumber(number + 1);
	const decrease = () => 	changeNumber(number - 1);
	return (
		<div className="border-darkerCyan border-2 rounded-xl p-1 h-content w-full flex justify-between mt-2 ">
			<div className="rounded-full p-[3px] bg-cyan w-fit">
				<Image
					src={avatar}
					width="50"
					height="50"
					alt="avatar"
				/>
			</div>
			<input
				type="text"
				placeholder="Player 1"
				className="ml-4 uppercase bg-transparent text-cyan placeholder:text-cyan text-2xl"
			/>
			<input
				type="number"
				value={number}
				placeholder="0"
                className="bg-transparent w-12"
			/>
			<div className="flex flex-col w-16 text-white">
				<button className="bg-cyan mb-2 rounded-full" onClick={increase}>+</button>
				<button className="bg-cyan rounded-full" onClick={decrease}>-</button>
			</div>
		</div>
	);
}
