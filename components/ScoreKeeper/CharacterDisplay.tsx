"use client";
import React, { useEffect, useContext } from "react";
import CharacterImage from "./CharacterImage";
import ListContext from "../Contexts/ListContext";
import Arrow from "../UI/Arrow";
import ScoreKeeper from "./ScoreKeeper";

export default function CharacterDisplay() {
	const listCtx = useContext(ListContext);
	const num = listCtx.images.length;
	const [entries, setEntries] = React.useState<number[]>([0]);
	const [counter, setCounter] = React.useState<number>(0);
	const [prevIsDisabled, setPrevIsDisabled] = React.useState<boolean>(true);
	const [nextIsDisabled, setNextIsDisabled] = React.useState<boolean>(false);
	const [propnumber, setNumber] = React.useState<number>(0);
	const [changeColor, setChangeColor] = React.useState<boolean>(false);
	const name = listCtx.characters[propnumber];

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
		setChangeColor(true);
		setTimeout(() => setChangeColor(false), 250);
		if (!nextIsDisabled) {
			setPrevIsDisabled(false);
			changeCharacter();
			setNumber(entries[entries.length - 1]);
			console.log(entries, "click");
		}
	};
	const getPrevChar = () => {
		setChangeColor(true);
		setTimeout(() => setChangeColor(false), 500);
		if (!prevIsDisabled) {
			const updatedEntries = entries.slice(0, -1);
			setEntries(updatedEntries);
			setNumber(entries[entries.length - 1]);
			console.log(entries, "click");
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

	return (
		<div className="w-full">
			<CharacterImage number={propnumber}></CharacterImage>
			<div className="flex justify-between -mt-1 px-[5vw]">
				<button onClick={getPrevChar}>
					{" "}
					<Arrow
						colour={`${changeColor ? "blue" : "white"}`}
						rotate="rotate(0)"
					/>
				</button>
				<h1 className="font-semibold font-elMessiri text-white text-3xl mt-2">
					{name}
				</h1>
				<button onClick={getNextChar}>
					{" "}
					<Arrow
						colour={`${changeColor ? "blue" : "white"}`}
						rotate="rotate(180)"
					/>
				</button>
			</div>
			<ScoreKeeper></ScoreKeeper>
		</div>
	);
}
