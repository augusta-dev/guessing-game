"use client";
import React, { ReactNode, useCallback, useReducer } from "react";

import { SeriesContext, SeriesContextObj, ContextObj } from "./SeriesContext";
interface Action {
	type: "NAME" | "IMAGE" | "CHAR";
	payload: string | string[];
}

const seriesReducer = (state: SeriesContextObj, action: Action): any => {
	if (action.type === "NAME") {
		return { ...state, name: action.payload };
	}
	if (action.type === "IMAGE") {
		return { ...state, images: action.payload };
	}
	if (action.type === "CHAR") {
		return { ...state, characters: action.payload };
	}
	return state;
};
const SeriesProvider: React.FC<{ className?: string; children: ReactNode }> = (
	props,
) => {
	const [state, dispatch] = useReducer(seriesReducer, {
		name: "",
		images: [],
		characters: [],
	});

	const setNameHandler = useCallback((name: string) => {
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