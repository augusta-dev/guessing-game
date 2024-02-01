"use client";
import React, { useContext } from "react";
import { SeriesContext } from "../Contexts/SeriesContext";
export default function CharacterNames() {
	const seriesCtx = useContext(SeriesContext);
	const saveTextHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const names = e.target.value.split(',')
		seriesCtx.setCharacters(names);
	};
	const number = seriesCtx.characters.length

	return (
		<div className="w-full">
			<label htmlFor="textarea"></label>
			<textarea
				title="textarea"
				className="w-full bg-transparent border-2 border-cyan rounded-lg p-2 mt-2 text-cyan placeholder:text-cyan"
				placeholder="Enter the list of characters in order of the images uploaded. Separate each character by commas."
				onChange={saveTextHandler}
			/>
			<p className="italic">Written {number} Characters So Far</p>
		</div>
	);
}
