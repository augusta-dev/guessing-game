//const ListContext:
import React from "react";
export type ListContextObj = {
	name: string;
	full: string[];
	images: string[];
	characters: string[];
	index: number;
	setName: (name: string) => void;
	setImages: (images: string[]) => void;
	setCharacters: (characters: string[]) => void;
	setFull: (images: string[]) => void;
	setIndex: (index: number) => void;
};

const ListContext = React.createContext<ListContextObj>({
	name: "",
	full: [],
	images: [],
	characters: [],
	index: 0,
	setName: (name: string) => {},
	setImages: (images: string[]) => {},
	setCharacters: (characters: string[]) => {},
	setFull: (images: string[]) => {},
	setIndex: (index: number) => {},
});
export default ListContext;
