import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/db";
export default async function bookEvent(req: NextRequest){
    const [userId, eventId] = await req.json()
    try {
        await prisma.booking.create({
          data: {
            user: { connect: { id: userId } },
            event: { connect: { id: eventId } },
          },
        });
        return NextResponse.json({
            message:"Booking Made"
        })
    } catch (error) {
        console.error(error)
        return NextResponse.json({
            error: `Error while creating a booking, ${error}`
        })
    }
}