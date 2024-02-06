"use client";
import React, { useContext } from "react";
import  UploadButton  from "../UI/uploadthing";
//import { SeriesContext } from "../Contexts/SeriesContext";
//import { OurFileRouter } from "@/app/api/uploadthing/core";

 const Upload: React.FC = () => {
	//const seriesCtx = useContext(SeriesContext);

	return (
		<div className="w-full p-2 border-2 border-cyan rounded-lg mt-2 text-cyan">
			<UploadButton
				endpoint="imageUploader"
				onClientUploadComplete={(response) => {
					response.forEach((res) => {
						//seriesCtx.setImages(res);
						console.log(res)
					});
				}}
				onUploadError={(error: Error) => {
					console.log("Error: ", error);
				}}
			/>
		</div>
	);
};
export default Upload