//const ListContext:
import React from 'react';
export type ListContextObj = {
	name: string;
	full: string[];
	images: string[];
	characters: string[];
	setName: (name: string) => void;
	setImages: (images: string[]) => void;
	setCharacters: (characters: string[]) => void;
	setFull: (images: string[]) => void;
};

const ListContext = React.createContext<ListContextObj>({
	name: '',
	full: [],
	images: [],
	characters: [],
	setName: (name: string) => {},
	setImages: (images: string[]) => {},
	setCharacters: (characters: string[]) => {},
	setFull: (images: string[]) => {},
});
export default ListContext;