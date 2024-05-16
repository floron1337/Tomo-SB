import React from "react";
import FriendListItem from "./FriendListItem";
import { UsersRound } from "lucide-react";
import Link from "next/link";

const FriendList = () => {
  return (
    <div className="flex flex-col items-center m-auto w-3/4 h-3/4 bg-foreground p-1 rounded-xl">
      <div className="flex flex-row w-full h-auto justify-between ">
        <h5 className="text-white text-xl self-start m-2">Your Friends</h5>
        <div className="inline-flex mr-2">
          <UsersRound className="flex size-4 text-secondary self-end my-auto" />
          <p className="text-white text-xs text-opacity-50 self-end my-auto">
            20
          </p>
        </div>
      </div>
      <ul className="flex flex-col w-full h-auto overflow-y-scroll overflow-x-hidden no-scrollbar">
        <li>
          <FriendListItem userImg="/download 1.png" username="Pulla" />
        </li>
      </ul>
    </div>
  );
};

export default FriendList;
