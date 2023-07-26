import { NextResponse } from "next/server";
import { connectDatabase } from "../libs/connectDb";
import Event from "@/models/EventSchema";

export const POST = async (req: Request) => {
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ message: "no id provided" });
  }

  try {
    await connectDatabase();
    const event = await Event.findById(id).exec();
    if (!event) {
      return NextResponse.json({ message: "no event found" });
    }
    return NextResponse.json(event);
  } catch (error) {
    return NextResponse.error();
  }
};
