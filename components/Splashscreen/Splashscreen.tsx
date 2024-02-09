"use client";
import React, { useContext } from "react";
import ListContext from "../Contexts/ListContext";
import Image from "next/image";
import getServerSideProps from "./getServerSideProps";
import CreateLists from "./CreateLists";
export default function Splashscreen() {
	
	const listCtx = useContext(ListContext);
	const images = listCtx.full;
	return (
		<div>
			<CreateLists />
            <p></p>
			{images.map((image) => (
				<div key={Math.random()}>
					<Image
						src={image} className="w-80 h-40" width='3000' height='3000'
						alt="image"
					></Image>
				</div>
			))}
		</div>
	);
}
