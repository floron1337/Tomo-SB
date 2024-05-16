import React from "react";
import FriendListItem from "./FriendListItem";

const FriendList = () => {
  return (
    <div className="flex flex-col items-center m-auto w-3/4 h-3/4 bg-foreground px-3 py-4 rounded-xl">
      <h5 className="text-white text-xl">Your Freinds</h5>
      <ul className="flex flex-col w-full h-auto my-10">
        <li>
          <FriendListItem />
        </li>
        <li>
          <FriendListItem />
        </li>
        <li>
          <FriendListItem />
        </li>
      </ul>
    </div>
  );
};

export default FriendList;
