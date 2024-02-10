"use client";
import React, { useContext } from "react";
import CharacterDisplay from "@/components/ScoreKeeper/CharacterDisplay";
import ListContext from "@/components/Contexts/ListContext";
import Link from "next/link";
export default function Scorekeeper() {
	const listCtx = useContext(ListContext);
	if (listCtx.images.length > 0) {
		return <CharacterDisplay />;
	} else return(
		<div className="-mt-6 flex h-dvh align-middle items-center">
			<p className="font-elMessiri text-2xl font-semibold">Please Reselect The {" "} 
			<Link href='/' className="underline">Series</Link></p>
		</div>
	);
}
