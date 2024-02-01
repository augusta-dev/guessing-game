import mongoose, { Schema } from "mongoose";
const seriesSchema = new Schema(
	{
		name: String,
        images: Array,
        characters: Array, 
	},
	{ timestamps: true },
);
const Series = mongoose.models.Series || mongoose.model("Series", seriesSchema);
export default Series;
