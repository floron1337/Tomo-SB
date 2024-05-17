import React from "react";
import Image from "next/image";
import next from "next";
import { Send, UsersRound } from "lucide-react";
import Link from "next/link";
import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "./ui/button";

type Props = {
  friendId: string;
};

const FriendListItem = async ({ friendId }: Props) => {
  const friendUser = await clerkClient.users.getUser(friendId);
  return (
    <div className="mb-1 flex flex-row justify-between gap-1 w-full border-t-[1px] border-secondary border-opacity-30 p-2 text-white">
      <div className="w-full gap-2  inline-flex">
        <Image
          width={50}
          height={50}
          alt=""
          src={friendUser.imageUrl}
          className="rounded-full self-start flex"
        />
        <h4 className="flex text-white text-xl  my-auto">
          {friendUser.fullName}
        </h4>
      </div>
      <Link
        href={`/chat/${friendUser.id}`}
        className="flex  size-5 justify-center my-auto"
      >
        <Send />
      </Link>
    </div>
  );
};

export default FriendListItem;
