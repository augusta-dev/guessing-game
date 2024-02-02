import { NextResponse } from "next/server";
import connectMongo from "../../../libs/mongodb";
import Series from "@/models/uploadContent";

export async function POST(req: Request) {
	try {
		const { name, images, characters } = await req.json();
		await connectMongo();
		await Series.create({
			name,
			characters,
			images,
		});
		return NextResponse.json(
			{ message: "Section created" },
			{ status: 201 },
		);
	} catch (err: any) {
		return NextResponse.json({ message: err.message }, { status: 501 });
	}
}
