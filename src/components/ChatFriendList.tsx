import React from "react";
import FriendListItem from "./FriendListItem";
import { Home } from "lucide-react";
import Link from "next/link";
import { auth, getAuth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { friends } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";

const ChatFriendList = async () => {
  const userId = await auth().userId
  const friendList = await db
    .select()
    .from(friends)
    .where(and(eq(friends.userId, userId!), eq(friends.accepted, true)));
  
  return (
    <div className="flex flex-col text-white bg-foreground border-opacity-50 basis-1/3 border-r-[1px] border-y-[1px] border-secondary w-full max-w-[24rem]">
      <Link
        href="/"
        className="flex flex-row gap-[2px] items-center text-2xl h-[5.8rem] w-full p-3 border-b-2 border-secondary border-opacity-50"
      >
        <Home className="size-8" /> Home
      </Link>

      <ul className="flex flex-col w-full h-auto overflow-y-scroll overflow-x-hidden no-scrollbar">
        {friendList.map((friend, index) => (
          <li key={index}>
            <FriendListItem friendId={friend.friendId} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatFriendList;
