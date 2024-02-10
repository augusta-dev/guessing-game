"use client";
import React, { ReactPropTypes, useContext } from "react";
import ListContext from "../Contexts/ListContext";
import Image from "next/image";
const CharacterImage: React.FC<{ number: number }> = (props) => {
	const listCtx = useContext(ListContext);
	const image = listCtx.images[props.number];
	return (
		<>
			<Image
				src={image}
				alt="character"
				width="1000"
				height="1000"
			></Image>
		</>
	);
};
export default CharacterImage;
