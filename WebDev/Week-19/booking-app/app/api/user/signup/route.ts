import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/db";

export async function POST(req: NextRequest){
    const data = await req.json();
    try {
        await prisma?.user.create({
            data:{
                name: data.name,
                password: data.password,
                email: data.email
            }
        });
        alert("You are Signed Up")
        return NextResponse.json({
            message:"You are Signed Up."
    
        })
        
    } catch (error) {
        console.error("Error occured while adding to db", error);
        return NextResponse.json({
            error:"Error connection to DB, "+ error
        })
        
    }
    
}