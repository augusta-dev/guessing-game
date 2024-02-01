'use client'
import React, { Children, ReactNode } from "react";
import { SeriesContext, SeriesContextObj } from "./SeriesContext";
import { useState } from "react";

const SeriesProvider:React.FC<{className?: string; children: ReactNode}> =  (props) => {
	const [seriesName, setSeriesName] = useState("");

	const setNameHandler = (name: string): void => {
        setSeriesName(name);
        console.log(name)
    };

	const seriesContext: SeriesContextObj = {
		name: seriesName,
		setName: setNameHandler,
	};

	return (
        <SeriesContext.Provider value={seriesContext} >{props.children} </SeriesContext.Provider>
    );
}
export default SeriesProvider