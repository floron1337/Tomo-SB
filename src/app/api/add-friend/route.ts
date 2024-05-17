import { db } from "@/lib/db";
import { friends, posts } from "@/lib/db/schema";
import { getS3Url } from "@/lib/s3";
import { useClerk } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response){
    const {userId} = await auth()
    if(!userId){
        return NextResponse.json({error:"unauthorized"} , {status: 401})
    }
    try{
        const body = await req.json()
        const {userId, friendId} = body

        const upload = await db.insert(friends).values({
            userId, friendId
        })

        const friendshipStatus = await db.select().from(friends).where(and(eq(friends.friendId, userId), eq(friends.userId, friendId)))
        if(friendshipStatus.length > 0){
            await db.update(friends).set({accepted: true}).where(and(eq(friends.userId, userId), eq(friends.friendId, friendId)))
            await db.update(friends).set({accepted: true}).where(and(eq(friends.userId, friendId), eq(friends.friendId, userId)))
        }

        return NextResponse.json({message: "success"}, {status: 200})
    }
    catch(err){

    }
}