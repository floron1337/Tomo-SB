"use client";
import {
  Ellipsis,
  Forward,
  Heart,
  Loader2,
  MessageSquareMore,
  Trash,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./ui/menubar";
import { Button } from "./ui/button";
import { auth } from "@clerk/nextjs/server";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

interface TextPostPrps {
  postId: number;
  userId: string;
  currentUserId: string;
  username: string;
  userImg: string;
  title: string;
  description: string;
  likes: number;
}

const TextPost = ({
  postId,
  userId,
  currentUserId,
  username,
  userImg,
  title,
  description,
  likes,
}: TextPostPrps) => {
  const router = useRouter();
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [liked, setLiked] = useState(false);
  const [like, setLike] = useState(likes);

  async function deletePost() {
    setLoadingDelete(true);
    const creatorId = userId;
    const response = await axios.delete("/api/delete-post", {
      data: {
        postId,
        creatorId,
      },
    });

    router.refresh();
    setLoadingDelete(false);
  }

  const handleLikeAction = () => {
    console.log("liked a post");
    //setLiked(true);
    setLike(like + 1);
  };

  return (
    <div className="flex flex-row w-full max-w-[46rem] min-w-96 min-h-[10rem] h-auto bg-foreground pr-4 pl-1 py-4 rounded-2xl">
      <div className="flex flex-col gap-0 align-top justify-start ml-2 h-auto">
        <Link href={`/users/${userId}`}>
          <Image
            width={60}
            height={60}
            alt=""
            src={userImg}
            className="rounded-full"
          />
          <h6 className="flex text-white text-opacity-65 mt-1">@{username}</h6>
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <h3 className="flex text-secondary-foreground text-2xl px-3">
          {title}
        </h3>
        <p className="text-secondary-foreground p-1">{description}</p>
        <div className="flex flex-row gap-2 mx-2">
          <div className="inline-flex gap-1 ">
            <Heart
              className="text-secondary hover:text-accent hover:cursor-pointer size-4"
              onClick={handleLikeAction}
            />
            <div className="text-white text-xs text-opacity-30">{like}</div>
          </div>
        </div>
      </div>
      {currentUserId === userId && (
        <Button
          className="bg-destructive hover:bg-red-600 p-2"
          onClick={deletePost}
          disabled={loadingDelete}
        >
          {loadingDelete ? <Loader2 /> : <Trash />}
        </Button>
      )}
    </div>
  );
};

export default TextPost;
