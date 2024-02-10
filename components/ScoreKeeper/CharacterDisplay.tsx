"use client";
import React, { useEffect, useContext } from "react";
import CharacterImage from "./CharacterImage";
import ListContext from "../Contexts/ListContext";
import CreateLists from "../Splashscreen/CreateLists";
export default function CharacterDisplay() {
	//activate function when next button is clicked
	//activate second funtion getting the last element when previous button is clicked
	const listCtx = useContext(ListContext);
	const num = listCtx.images.length;
	const [entries, setEntries] = React.useState<number[]>([]);
	const [counter, setCounter] = React.useState<number>(0);
	const [prevIsDisabled, setPrevIsDisabled] = React.useState<boolean>(true);
	const [nextIsDisabled, setNextIsDisabled] = React.useState<boolean>(false);
	const [propnumber, setNumber] = React.useState<number>(0);

	const changeCharacter = () => {
		if (counter <= num) {
			const number = Math.floor(Math.random() * num);
			if (!entries.includes(number)) {
				setEntries([...entries, number]);
				setCounter(counter + 1);
				console.log(entries);
			} else changeCharacter();
		}
	};

	const getNextChar = () => {
		if (!nextIsDisabled) {
			setPrevIsDisabled(false);
			changeCharacter();
			setNumber(entries[entries.length - 1]);
			
			console.log(entries, 'click')
		}
	};
	const getPrevChar = () => {
		if (!prevIsDisabled) {
			const updatedEntries = entries.slice(0, -1);
			setEntries(updatedEntries);
			setNumber(entries[entries.length - 1]);
			console.log(entries, 'click')

		}
	};
	useEffect(() => {
		changeCharacter();
	}, []);
	useEffect(() => {
		entries.length > 0 ? setPrevIsDisabled(false) : setPrevIsDisabled(true);
		entries.length === num
			? setNextIsDisabled(true)
			: setNextIsDisabled(false);
	}, [entries]);

	if (num === 0) {
		return (
			<div className="font-elMessiri text-semibold text-xl">
				Please reselect the series
			</div>
		);
	} else
		return (
			<div>
				<CharacterImage number={propnumber}></CharacterImage>
				<button onClick={getPrevChar}>Prev</button>
				<button onClick={getNextChar}>Next</button>
			</div>
		);
}
