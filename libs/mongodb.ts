import mongoose from "mongoose";
let passcode = process.env.MONGODB_URI ? process.env.MONGODB_URI : "";

async function connectMongo() {
	try {
		await mongoose.connect(passcode);
		console.log("Connected to mongodb successful");
	} catch (e) {
		// throw new Error("Error connecting to Mongo");
		console.log("Error connecting to Mongo");
	}
}
export default connectMongo;
