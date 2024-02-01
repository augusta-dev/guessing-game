"use client";
import React, { useContext } from "react";
import { UploadButton } from "@uploadthing/react";
import { SeriesContext } from "../Contexts/SeriesContext";

const Upload: React.FC = () => {
	const seriesCtx = useContext(SeriesContext);

	return (
		<div className="w-full p-2 border-2 border-cyan rounded-lg mt-2 text-cyan">
			<UploadButton
				className="text-cyan"
				endpoint="imageUploader"
				onClientUploadComplete={(response: Response) => {
					response.map((res) => {
						seriesCtx.setImages(res.url);
					});
				}}
				onUploadError={(error: Error) => {
					console.log("Error: ", error);
				}}
			></UploadButton>
		</div>
	);
};
export default Upload;
