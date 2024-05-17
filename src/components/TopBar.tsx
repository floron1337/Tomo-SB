import Link from "next/link";
import Image from "next/image";
import React from "react";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { friends } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";
import FriendListItem from "./FriendListItem";
import { User } from "lucide-react";

const TopBar = async () => {
  const userId = await auth().userId;
  const user = await clerkClient.users.getUser(userId!);
  const friendList = await db
    .select()
    .from(friends)
    .where(and(eq(friends.userId, userId!), eq(friends.accepted, true)));

  return (
    <div className="position absolute w-screen h-auto flex-col bg-[#08171b]">
      <div className=" flex flex-row justify-between  text-white font-bold p-2">
        <Link href={"/"} className="flex my-auto">
          Tomo
        </Link>
        <Link href={`/users/${userId}`} className="my-auto md:hidden">
          <Image
            width={40}
            height={40}
            alt=""
            src={user.imageUrl}
            className="rounded-full"
          />
        </Link>
      </div>
      <div className="flex flex-row border-t-[2px] border-secondary border-opacity-20 pt-2 md:hidden">
        <User className="size-auto text-white ml-3"></User>
        <ul className="flex flex-row gap-1  w-full h-auto max-md:overflow-x-scroll  no-scrollbar">
          {friendList.map((friend) => (
            <li className="size-[3rem]">
              <FriendListItem friendId={friend.friendId} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
