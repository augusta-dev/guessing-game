"use client";
import React, { useContext } from "react";
import { SeriesContext } from "../Contexts/SeriesContext";
import tvShows from "./showList";

export default function SeriesOptions() {
	const seriesCtx = useContext(SeriesContext);
	const selectShow = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		seriesCtx.setName(e.target.value);
	};
	return (
		<>
			<select
				title="Shows List"
				className="w-full bg-transparent text-cyan border-cyan border-2 p-1 rounded-lg mt-12"
                onChange={selectShow}
                value={seriesCtx.name}
			>
				<option
					value="Select"
					className="bg-cyan text-white"
					selected
					disabled
				>
					Select TV Series
				</option>
				{tvShows.map((show) => (
					<option
						value={show}
						key={Math.random()}
						className="text-white bg-cyan"
					>
						{show}
					</option>
				))}
			</select>
		</>
	);
}
