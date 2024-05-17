import { db } from "@/lib/db";
import { chats, friends, message, posts } from "@/lib/db/schema";
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
        const {chatId, textMessage, author} = body

        const upload = await db.insert(message).values({
            chatId,
            textMessage,
            author
        })

        console.log(upload)

        return NextResponse.json({message: "success"}, {status: 200})
    }
    catch(err){
        console.log(err)
    }
}