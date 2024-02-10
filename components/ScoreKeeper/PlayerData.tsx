"use client";
import React from "react";
import Image from "next/image";
import avatar from "../../assets/boy.svg";

export default function PlayerData() {
	const [number, changeNumber] = React.useState<number>(0);
	const increase = () => changeNumber(number + 1);
	const decrease = () => changeNumber(number - 1);
	return (
		<div className="border-darkerCyan border-2 rounded-xl p-1 h-content w-full flex justify-between mt-2 ">
			<div className="rounded-full flex items-center align-middle justify-center bg-cyan w-[70px] h-[70px]">
				<Image
					src={avatar}
					width="50"
					height="50"
					alt="avatar"
					className="w-16 h-16"
				/>
			</div>
			<input
				type="text"
				placeholder="Player 1"
				className="ml-4 uppercase bg-transparent text-cyan placeholder:text-cyan text-2xl outline-none focus:border-b-[0.5px] border-darkCyan w-48"
			/>
			<input
				type="number"
				value={number}
				placeholder="0"
				className="bg-transparent w-12 outline-none"
			/>
			<div className="flex flex-col w-20 text-white justify-between">
				<button
					className="bg-cyan rounded-full h-[43%] text-2xl font-semibold"
					onClick={increase}
				>
					+
				</button>
				<button
					className="bg-cyan rounded-full h-[43%] text-2xl font-semibold"
					onClick={decrease}
				>
					-
				</button>
			</div>
		</div>
	);
}
