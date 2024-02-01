import React from "react";
import Image from "next/image";
import woman from "../../assets/Avatars/woman (2).png";
import Avatar from "../UI/Avatar";
import SeriesOptions from "./SeriesOptions";
export default function AdminPage() {
	return (
		<>
			<Avatar image={woman}></Avatar>
			<SeriesOptions></SeriesOptions>
		</>
	);
}
