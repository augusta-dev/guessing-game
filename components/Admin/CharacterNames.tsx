import React from "react";

export default function CharacterNames() {
	return (
		<div className="w-full">
			<label htmlFor="textarea"></label>
			<textarea
				title="textarea"
				className="w-full bg-transparent border-2 border-cyan rounded-lg p-2 mt-2 text-cyan placeholder:text-cyan"
				placeholder="Enter the list of characters in order of the images uploaded"
			/>
		</div>
	);
}
