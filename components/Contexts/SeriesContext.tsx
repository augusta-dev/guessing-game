import React from "react";
export type SeriesContextObj = {
	name: string;
	images: string[];
	characters: string[];
	setName: (name: string) => void;
	setImages: (images: string[]) => void;
	setCharacters: (characters: string[]) => void;
}; //first declare the variable types
export type ContextObj = {
	name: string;
	images: string[];
	characters: string[];
};
export const SeriesContext = React.createContext<SeriesContextObj>({
	name: '',
	images: [],
	characters: [],
	setName: (text: string) => {},
	setImages: (text: string[]) => {},
	setCharacters: (text: string[]) => {},
}); //next, set their values

//export default SeriesContext
