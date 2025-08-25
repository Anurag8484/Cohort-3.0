import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    const data = await req.json()
    try {
       await prisma.user.create({
        data: {
          name: data.name,
          password: data.password,
          email: data.email,
        },
      });  
      return NextResponse.json({
        message:"registered"
      })    
    } catch (error) {
      console.error(error);
    }
    }
