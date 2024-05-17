'use client'
import { Forward, Heart, Loader2, MessageSquareMore, Trash, UsersRound } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ImagePost {
  postId: number;
  userId:string;
  currentUserId:string;
  username: string;
  userImg: string;
  title:string;
  description: string;
  likes: number;
  imageUrl: string;
}

const ImagePost = ({
  postId,
  userId,
  currentUserId,
  username,
  userImg,
  title,
  description,
  likes,
  imageUrl,
}: ImagePost) => {
  const [loadingDelete, setLoadingDelete] = useState(false)
  const router = useRouter();

  async function deletePost(){
    setLoadingDelete(true)
    const creatorId = userId
    const response = await axios.delete("/api/delete-post", {
      data:{
        postId,
        creatorId
      }
    })
    router.refresh()
    setLoadingDelete(false)
  }

  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-[46rem] min-w-96 h-auto bg-foreground pr-4 pl-1 py-4 rounded-2xl">
      <div className="w-full h-auto flex flex-row gap-1 ml-1 items-center">
        <Link href={`/users/${userId}`} className='flex flex-row gap-4'>
          <Image width={60} height={60} alt="" src={userImg} className='rounded-full'/>
          <h6 className="flex text-white text-opacity-65 mt-3 text-2xl">@{username}</h6>
        </Link>
        { currentUserId === userId &&
          <Button className='bg-destructive hover:bg-red-600 p-2 ml-auto' onClick={deletePost} disabled={loadingDelete}>
            {loadingDelete?
              <Loader2/>
              :
              <Trash/>
            }
          </Button>
        }
      </div>
      <Image
        src={imageUrl}
        width={200}
        height={160}
        alt="Picture of the author"
        className="flex p-2 items-center"
      />

      <div className="flex flex-col gap-2 justify-start mr-auto items-start">
        <h3 className="flex text-secondary-foreground text-2xl px-3">
          {title}
        </h3>
        <p className="flex text-secondary-foreground px-5 line-clamp-2 focus:line-clamp-none cursor-pointer">
          {description}
        </p>

        <div className="flex flex-row gap-2 px-5">
          <div className="inline-flex gap-1 ">
            <Heart className="text-secondary hover:text-accent hover:cursor-pointer size-4" />
            <div className="text-white text-xs text-opacity-30">{likes}</div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default ImagePost;
