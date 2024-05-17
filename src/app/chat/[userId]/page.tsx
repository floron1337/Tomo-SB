import FriendList from "@/components/FriendList";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import Image from "next/image";
import ChatFriendList from "@/components/ChatFriendList";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { set, string } from "zod";
import TextMessage from "@/components/TextMessage";
import Messages from "@/components/Messages";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { chats, message } from "@/lib/db/schema";
import { and, eq, or } from "drizzle-orm";
import { useRouter } from "next/navigation";

export default async function Page({ params }: { params: { userId: string } }) {
  const {userId} = await auth()
  const user = await clerkClient.users.getUser(userId!);
  const friendUser = await clerkClient.users.getUser(params.userId);

  const chat = (await db.select().from(chats).where(
    or(
      and(
        eq(chats.user1_id, userId!),
        eq(chats.user2_id, params.userId)
      ),
      and(
        eq(chats.user1_id, params.userId),
        eq(chats.user2_id, userId!)
      )
    ))
  )
  const chatId = chat[0].id
  const messages = await db.select().from(message).where(eq(message.chatId, chatId))

  return (
    <div className="w-screen h-screen justify-start flex flex-row">
      <ChatFriendList />
      <Messages
        messageList={messages} 
        chatId={chatId}
        userId={userId!} 
        userImg={user.imageUrl} 
        friendId={params.userId} 
        friendName={friendUser.fullName!} 
        friendImg={friendUser.imageUrl}
      />
    </div>
  );
};