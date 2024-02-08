"use client";
import React, {
	Children,
	ReactNode,
	useCallback,
	useEffect,
	useReducer,
} from "react";

import { SeriesContext, SeriesContextObj, ContextObj } from "./SeriesContext";
import { useState } from "react";
const seriesReducer = (
	state: SeriesContextObj,
	action: { type: string; action: { payload: string & string[] } },
): any => {
	if (action.type === "NAME") {
		console.log(action.payload);
		const tempName = action.payload;
		if (state.name !== tempName){
			return { ...state, name: tempName };
		}
	}
	if (action.type === "IMAGE") {
		return { ...state, images: action.payload };
	}
	if (action.type === "CHAR") {
		return { ...state, characters: action.payload };
	}
	return state
};
const SeriesProvider: React.FC<{ className?: string; children: ReactNode }> = (	props) => {
	const [changeName, setChangeName] = useState<string>('')
	const [state, dispatch] = useReducer(seriesReducer, {
		name: "",
		images: [],
		characters: [],
	});
	useEffect(() => {
		dispatch({ type: "NAME", payload: changeName });
	}, [changeName])
	const setNameHandler = useCallback((name: string) => {
		//setChangeName(name)
		dispatch({ type: "NAME", payload: name });
	}, []);
	const setImagesHandler = (images: string[]) => {
		dispatch({ type: "IMAGE", payload: images });
	};
	const setCharactersHandler = (characters: string[]) => {
		dispatch({ type: "CHAR", payload: characters });
	};
	const seriesContext: SeriesContextObj = {
		name: state.name,
		images: state.images,
		characters: state.characters,
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
// const [seriesName, setSeriesName] = React.useState<string>("");
// 	const [seriessName, setSeriessName] = React.useState<string[]>([])
// 	const setNameHandler = useCallback((name: string): void => {
// 		if (name !== seriesName) {setSeriessName([name])}
// 		console.log(seriesName);
// 	}, [seriesName]);
// 	useEffect(()=>{
// 		setSeriesName(seriessName[0])
// 	}, [seriessName])

// 	const [seriesImages, setSeriesImages] = React.useState<string[]>([]);
// 	const setImagesHandler = (images: string[]): void => {
// 		setSeriesImages([...images]);
// 		console.log(images);
// 	};

// 	const [seriesCharacters, setSeriesCharacters] = React.useState<string[]>(
// 		[],
// 	);
// 	const setCharactersHandler = (characters: string[]): void => {
// 		setSeriesCharacters([...characters]);
// 		console.log(characters);
// 	};

// 	const seriesContext: SeriesContextObj = {
// 		name: seriesName,
// 		images: seriesImages,
// 		characters: seriesCharacters,
// 		setName: setNameHandler,
// 		setImages: setImagesHandler,
// 		setCharacters: setCharactersHandler,
// 	};
