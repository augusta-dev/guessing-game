"use client";
import React from "react";
import { UploadButton} from "@uploadthing/react";

 const Upload:React.FC = () => {
	return (
		<div className="w-full p-2 border-2 border-cyan rounded-lg mt-2 text-cyan">
			<UploadButton className='text-cyan'
				endpoint="imageUploader"
				onClientUploadComplete={(res: Response) => {
					console.log("uploaded");
				}}
				onUploadError={(error: Error) => {
					console.log("Error: ", error);
				}}
			></UploadButton>
		</div>
	);
}
export default Upload