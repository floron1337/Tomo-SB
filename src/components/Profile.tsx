import Link from "next/link";
import React from "react";
import Image from "next/image";
import { auth, clerkClient } from "@clerk/nextjs/server";
import TopBar from "./TopBar";
import { Check, Cog, Heart, Hourglass, MessageSquareMore, Settings, User, UserRoundPlus } from "lucide-react";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { friends, posts } from "@/lib/db/schema";
import { and, asc, desc } from 'drizzle-orm/expressions';
import UserPost from "./UserPost";
import { Button } from "./ui/button";
import axios from "axios";
import AddFriend from "./AddFriend";

type Props = {
  userId: string
}

const Profile = async ({userId}: Props) => {
  const currentUserId = await auth().userId
  const user = await clerkClient.users.getUser(userId)
  const _posts = await db.select().from(posts).where(eq(posts.userId, userId)).orderBy(desc(posts.createdAt))
  const sentFriendReq = await db.select().from(friends).where(and(eq(friends.userId, currentUserId!), eq(friends.friendId, userId)))
  const receivedFriendReq = await db.select().from(friends).where(and(eq(friends.userId, userId), eq(friends.friendId, currentUserId!)))

  return (
      <div className='flex flex-col basis-2/3 gap-8 justify-start items-center py-20 h-full w-full overflow-y-scroll no-scrollbar text-white'>
        <div className='flex flex-row justify-center items-center gap-2'>
          <Image src={user.imageUrl} width={75} height={75} alt="" className='rounded-full'></Image>
          <h1 className='text-4xl'>{user.fullName}</h1>
        </div>
        <div className='flex flex-row gap-4'>
          <div className="inline-flex gap-1 ">
              <Heart className="text-secondary hover:text-accent hover:cursor-pointer  size-4" />
              <div className="text-white text-xs text-opacity-30">0 Likes</div>
          </div>
          <div className="inline-flex gap-1">
              <User className="text-secondary hover:text-accent hover:cursor-pointer size-4" />
              <div className="text-white text-xs text-opacity-30">0 Friends</div>
          </div>
        </div>
        {currentUserId === userId ? (
          <Button className="w-1/4 ml-auto mr-auto bg-secondary hover:bg-accent flex flex-row gap-1" asChild>
            <Link href={`/users/${userId}/settings`}>
              Profile Settings <Settings className='text-white size-5'/>
            </Link>
          </Button>
        ) : (sentFriendReq.length > 0 && receivedFriendReq.length > 0) ? 
        (
          <div className='bg-secondary flex flex-row rounded-xl py-2 px-4 items-center justify-center gap-1'>
            <h1>Friends</h1><Check  className='size-4'/>
          </div>
        ) : (sentFriendReq.length > 0) ? (
          <div className='bg-secondary flex flex-row rounded-xl py-2 px-4 items-center justify-center gap-1'>
            <h1>Friend Request Sent</h1><Hourglass className='size-4'/>
          </div>
        ) :
        (receivedFriendReq.length > 0) ? (
          <AddFriend text={"Accept Friend Request"} userId={currentUserId!} friendId={userId}/>
        ) :
        (
          <AddFriend text={"Add as Friend"} userId={currentUserId!} friendId={userId}/>
        )
        }
        
        <h1 className='mt-5 text-4xl font-bold'>User's Posts</h1>
        <div className="flex flex-col gap-8 justify-center items-center pt-5 h-auto w-full bg-background">
          {_posts.map((post) => (
            <UserPost post={post} />
          ))}
      </div>
      </div>
  );
};

export default Profile;
