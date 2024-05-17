import React from "react";
import FriendListItem from "./FriendListItem";
import { Home } from "lucide-react";
import Link from "next/link";

const ChatFriendList = () => {
  return (
    <div className="flex flex-col text-white bg-foreground border-opacity-50 basis-1/3 border-r-[1px] border-y-[1px] border-secondary w-full max-w-[24rem]">
      <Link
        href="/"
        className="flex flex-row gap-[2px] items-center text-2xl h-[5.8rem] w-full p-3 border-b-2 border-secondary border-opacity-50"
      >
        <Home className="size-8" /> Home
      </Link>

      <ul className="flex flex-col w-full h-auto overflow-y-scroll overflow-x-hidden no-scrollbar">
        <li>
          <FriendListItem userImg="/download 1.png" username="Pulla" />
        </li>
        <li>
          <FriendListItem userImg="/download 1.png" username="Pulla" />
        </li>
        <li>
          <FriendListItem userImg="/download 1.png" username="Pulla" />
        </li>
        <li>
          <FriendListItem userImg="/download 1.png" username="Pulla" />
        </li>
        <li>
          <FriendListItem userImg="/download 1.png" username="Pulla" />
        </li>
        <li>
          <FriendListItem userImg="/download 1.png" username="Pulla" />
        </li>
      </ul>
    </div>
  );
};

export default ChatFriendList;
