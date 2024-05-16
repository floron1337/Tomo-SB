import { db } from "@/lib/db"
import { posts } from "@/lib/db/schema"
import { auth } from "@clerk/nextjs/server"
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"

export async function DELETE(req: Request, res: Response){
    const {userId} = await auth()
    if(!userId){
        return NextResponse.json({error:"unauthorized"} , {status: 401})
    }
    try{
        const body = await req.json()
        const {postId, creatorId } = body
        
        if(creatorId != userId)
            return NextResponse.json({error:"unauthorized"} , {status: 401})
        
        console.log(postId)
        const response = await db.delete(posts).where(eq(posts.id, postId))
        
        return NextResponse.json({message: "success"}, {status: 200})
    }
    catch(err){

    }
}