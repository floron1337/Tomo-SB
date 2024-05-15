import { db } from "@/lib/db";
import { getS3Url } from "@/lib/s3";
import { useClerk } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response){
    /*
    const clerk = useClerk()
    
    if(!clerk.user){
        return NextResponse.json({error:"unauthorized"} , {status: 401})
    }
    console.log("SUCCESS!!")
    
    try{
        const body = await req.json()
        const {file_key, file_name} = body
        await loadS3intoPinecone(file_key)

        const chat_id = await db.insert(chats).values({
            fileKey: file_key,
            pdfName: file_name,
            pdfUrl: getS3Url(file_key),
            userId,
        }).returning({
            insertedId: chats.id
        })

        return NextResponse.json({
            chat_id: chat_id[0].insertedId
        }, {status: 200})
    }
    catch(error){
        console.error(error);
        return NextResponse.json(
            { error: "internal server error" },
            { status: 500 }
        )
    }
    */
}