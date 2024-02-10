"use client";
import ListContext, { ListContextObj } from "./ListContext";
import React, { ReactNode } from "react";
const ListProvider: React.FC<{ children: ReactNode }> = (props) => {
	const [seriesName, setSeriesName] = React.useState<string>("");
	const setNamesHandler = (name: string) => setSeriesName(name);

	const [seriesFull, setSeriesFull] = React.useState<string[]>([]);
	const setFullHandler = (images: string[]) => {
		console.log(images);
		setSeriesFull(images);
	};

	const [seriesImages, setSeriesImages] = React.useState<string[]>([]);
	const setImagesHandler = (images: string[]) => setSeriesImages(images);

	const [seriesCharacters, setSeriesCharacters] = React.useState<string[]>(
		[],
	);
	const setCharactersHandler = (characters: string[]) =>
		setSeriesCharacters(characters);

	const [seriesIndex, setSeriesIndex] = React.useState<number>(15);
	const setIndexHandler = (index: number) => setSeriesIndex(index);

	const listContext: ListContextObj = {
		name: seriesName,
		full: seriesFull,
		images: seriesImages,
		characters: seriesCharacters,
		index: seriesIndex,
		setName: setNamesHandler,
		setImages: setImagesHandler,
		setCharacters: setCharactersHandler,
		setFull: setFullHandler,
		setIndex: setIndexHandler,
	};
	return (
		<ListContext.Provider value={listContext}>
			{props.children}
		</ListContext.Provider>
	);
};
export default ListProvider;