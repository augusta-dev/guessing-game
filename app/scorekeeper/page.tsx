import React from "react";
import CharacterDisplay from "@/components/ScoreKeeper/CharacterDisplay";
import ListProvider from "@/components/Contexts/ListProvider";
import ScoreKeeper from "@/components/ScoreKeeper/ScoreKeeper";
export default function Scorekeeper() {
	return (
		<>
			<CharacterDisplay></CharacterDisplay>
			<ScoreKeeper></ScoreKeeper>
		</>
	);
}
