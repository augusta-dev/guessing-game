"use client";
import React, { useContext, useState, useEffect } from "react";
import UploadButton from "../UI/uploadthing";
import { SeriesContext } from "../Contexts/SeriesContext";

const Upload: React.FC = () => {
	const seriesCtx = useContext(SeriesContext);
	const [totalImages, setTotalImages] = useState<string[]>([]);
	useEffect(() => {
		if (seriesCtx.name == "" && seriesCtx.characters.length == 0) {
			setTotalImages([]);
			console.log("empty");
		}
	}, [seriesCtx.name, seriesCtx.characters]);
	useEffect(() => {
		seriesCtx.setImages(totalImages);
	}, [totalImages]);

	return (
		<div className="w-full p-2 border-2 border-cyan rounded-lg mt-2 text-cyan">
			<UploadButton
				endpoint="imageUploader"
				onClientUploadComplete={(response) => {
					console.log(response);
					setTotalImages((prevImages) => {
						const updatedImages = [...prevImages];
						response.forEach((res) => {
							updatedImages.push(res.url);
						});
						return updatedImages;
					});
					console.log(seriesCtx.images);
				}}
				onUploadError={(error: Error) => {
					console.log("Error: ", error);
				}}
			/>
		</div>
	);
};
export default Upload;
