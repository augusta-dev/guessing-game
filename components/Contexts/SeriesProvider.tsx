"use client";
import React, { Children, ReactNode } from "react";
import { SeriesContext, SeriesContextObj } from "./SeriesContext";
import { useState } from "react";

const SeriesProvider: React.FC<{ className?: string; children: ReactNode }> = (
	props,
) => {
	const [seriesName, setSeriesName] = React.useState<string>("");
	const setNameHandler = (name: string): void => {
		setSeriesName(name);
		console.log(name);
	};

	const [seriesImages, setSeriesImages] = React.useState<string[]>([]);
	const setImagesHandler = (images: string[]): void => {
		setSeriesImages([...images, ...seriesImages]);
		console.log(images);
	};

	const [seriesCharacters, setSeriesCharacters] = React.useState<string[]>(
		[],
	);
	const setCharactersHandler = (characters: string[]): void => {
		setSeriesCharacters([...characters, ...seriesCharacters]);
		console.log(characters);
	};

	const seriesContext: SeriesContextObj = {
		name: seriesName,
		images: seriesImages,
		characters: seriesCharacters,
		setName: setNameHandler,
		setImages: setImagesHandler,
		setCharacters: setCharactersHandler,
	};

	return (
		<SeriesContext.Provider value={seriesContext}>
			{props.children}
		</SeriesContext.Provider>
	);
};
export default SeriesProvider;