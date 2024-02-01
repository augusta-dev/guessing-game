"use client";
import React, { useContext, useState } from "react";
import { SeriesContext } from "../Contexts/SeriesContext";
export default function UploadButton() {
	const seriesCtx = useContext(SeriesContext);
	const [isReady, setIsReady] = React.useState<boolean>(false);
	if (seriesCtx.name && seriesCtx.images && seriesCtx.characters) {
		setIsReady(true);
	}
	return <button className={`${isReady? 'bg-darkerCyan': 'bg-cyan'} mt-16 text-white w-full h-8 rounded-lg`}>Save</button>;
}
