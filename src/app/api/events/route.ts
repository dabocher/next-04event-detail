import Event from "@/models/EventSchema";
import { NextResponse } from "next/server";
import { connectDatabase } from "../libs/connectDb";

export const GET = async (req?: Request) => {
  await connectDatabase();
  try {
    const event = await Event.find();
    return NextResponse.json(event);
  } catch (error) {
    return NextResponse.error();
  }
};
