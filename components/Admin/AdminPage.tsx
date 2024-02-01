import React from "react";
import Image from "next/image";
import woman from "../../assets/Avatars/woman (2).png";
import Avatar from "../UI/Avatar";
import SeriesOptions from "./SeriesOptions";
import Upload from "./Upload";
import CharacterNames from "./CharacterNames";
import UploadButton from "./UploadButton";
export default function AdminPage() {
	return (
		<>
			<Avatar className='mt-4 mb-4' image={woman}></Avatar>
			<SeriesOptions></SeriesOptions>
			<Upload></Upload>
			<CharacterNames></CharacterNames>
			<UploadButton></UploadButton>
		</>
	);
}
