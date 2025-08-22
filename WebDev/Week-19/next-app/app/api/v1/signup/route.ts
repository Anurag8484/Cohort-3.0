import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/app/lib/db";

export async function POST(req: NextRequest) {
  const data = await req.json();
  await prisma.user.create({
    data: {
      username: data.username,
      password: data.password,
    },
  });

  return NextResponse.json({
    message: "You are signed Up",
  });
}


export async function GET(req: NextRequest){
  const user = await prisma.user.findFirst();

  return NextResponse.json({
    message: user
  })
}
