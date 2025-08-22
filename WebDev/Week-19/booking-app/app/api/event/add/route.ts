import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/db";

export async function POST(req: NextRequest) {
    const data = await req.json();
    const dateStr = data.date
    const isoDate =new Date(dateStr)
    console.log(data)
  try {
    await prisma?.event.create({
      data: {
        title: data.title,
        description: data.description,
        location: data.location,
        date: isoDate,
        creator: { connect: { id: data.userId } },
      },
    });
    return NextResponse.json({
        message:"Event Added"
    })
    console.log("Event added")
  } catch (error) {
      console.error(error);
      return NextResponse.json({
        error: "Something Went wrong " + error
      })
    
  }
}
