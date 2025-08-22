import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/db";

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    const user = await prisma?.user.findFirst({
      where: {
        email: data.email,
        password: data.password,
      },
    });

    if (user) {
      return NextResponse.json({
        message: "You are Signed In.",
        user
      });
    } else {
      return NextResponse.json({
        message: "Credentials not found",
      });
    }
  } catch (error) {
    console.error("Error occured while adding to db", error);
    return NextResponse.json({
      error: "Error connection to DB, " + error,
    });
  }
}
