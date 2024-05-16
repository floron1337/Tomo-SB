import React from "react";
import Image from "next/image";
import next from "next";
import { UsersRound } from "lucide-react";

const FriendListItem = () => {
  return (
    <div className=" flex flex-row size-full text-white px-3 py-6">
      <Image
        width={30}
        height={30}
        alt=""
        src={"/download 1.png"}
        className="rounded-full"
      />
      <h6 className="flex text-white text-opacity-65 mt-1">Florin</h6>
      <div className="flex flex-row p-1 gap-1">
        <UsersRound className="size-4 text-secondary" />
        <p className="text-white text-xs text-opacity-30">0</p>
      </div>
    </div>
  );
};

export default FriendListItem;
