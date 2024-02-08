"use client";
import React, { useContext, useState, useEffect } from "react";
import { SeriesContext } from "../Contexts/SeriesContext";

export default function UploadButton() {
	const seriesCtx = useContext(SeriesContext);
	const [isReady, setIsReady] = React.useState<boolean>(false);
	useEffect(() => {
		if (
			seriesCtx.name &&
			seriesCtx.images.length > 0 &&
			seriesCtx.characters.length > 0
		) {
			setIsReady(true);
		} else {
			setIsReady(false);
		}
	}, [seriesCtx]);
	const sendData = async () => {
		try {
			const response = await fetch("/api/upload", {
				method: "POST",
				body: JSON.stringify({
					name: seriesCtx.name,
					images: seriesCtx.images,
					characters: seriesCtx.characters,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});
		} catch (error) {
			console.error(error);
		}
	};

	const submitContent = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (isReady == true) {
			sendData();
			console.log("in");
			seriesCtx.setName("");
			seriesCtx.setCharacters([]);
			seriesCtx.setImages([]);
		}
	};

	return (
		<button
			className={`${
				isReady ? "bg-cyan" : "bg-darkerCyan"
			} mt-16 text-white w-full h-8 rounded-lg`}
			onClick={submitContent}
		>
			Save
		</button>
	);
}
