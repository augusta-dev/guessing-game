import connectMongo from "@/libs/mongodb";
import Series from "@/models/uploadContent";
import { NextResponse } from "next/server";

export const GET = async () => {
	try {
		await connectMongo();
		const series = await Series.find();

		return new NextResponse(JSON.stringify(series));
	} catch (err) {
		console.log(err);
	}
};