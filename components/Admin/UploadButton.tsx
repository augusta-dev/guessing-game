"use client";
import React, { useContext, useState } from "react";
import { SeriesContext } from "../Contexts/SeriesContext";

export default function UploadButton() {
	const seriesCtx = useContext(SeriesContext);
	const [isReady, setIsReady] = React.useState<boolean>(false);
	if (seriesCtx.name && seriesCtx.images && seriesCtx.characters) {
		setIsReady(true);
	}
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
	const submitContent = () => {
		if (isReady) {
			sendData();
		}
	};
	return (
		<button
			className={`${
				isReady ? "bg-darkerCyan" : "bg-cyan"
			} mt-16 text-white w-full h-8 rounded-lg`}
			onClick={submitContent}
		>
			Save
		</button>
	);
}
