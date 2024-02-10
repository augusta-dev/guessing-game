import React from "react";
import PlayerData from "./PlayerData";

export default function ScoreKeeper() {
	const [value, setValue] = React.useState<string>("");
	const [total, setTotal] = React.useState<string>("");
	const [number, setNumber] = React.useState<number>(0);
	const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		//
		setTotal(e.target.value);
		console.log("type");
	};
	const setInputValue = (e: React.MouseEvent<HTMLButtonElement>) => {
		const num = Number(total);
		setNumber(num);
		setValue(`The total number of players is: ${total}`);
	};
	const resetNumber = (e: React.MouseEvent<HTMLButtonElement>) => {
		setNumber(0);
	};
	return (
		<div className="px-4 pt-2 ml-3/5 w-full flex flex-col">
			<h1 className="font-elMessiri text-3xl text-white font-semibold self-end">
				Score Keeper
			</h1>
			{number <= 0 && (
				<div className="flex justify-between px-[5vw]">
					<input
						className="italic placeholder:text-darkCyan text-lg bg-transparent outline-none focus:border-b-[0.5px] border-darkCyan w-96"
						type="number"
						min={1}
						placeholder="Click to enter the total number of players"
						onChange={changeValue}
					/>
					<button onClick={setInputValue}>Done</button>
				</div>
			)}
			{number > 0 && (
				<div className="flex flex-row justify-between italic px-[5vw]">
					<p className="inline">{value}</p>
					<button
						className="text-darkCyan"
						onClick={resetNumber}
					>
						Reselect
					</button>
				</div>
			)}
			{Array.from({ length: number }).map((_, index) => (
				<PlayerData key={index} />
			))}
		</div>
	);
}
