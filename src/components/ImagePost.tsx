import { Forward, Heart, MessageSquareMore, UsersRound } from "lucide-react";
import React from "react";
import Image from "next/image";

interface ImagePost {
  username: string;
  userImg: string;
  title:string;
  imageUrl:string;
  description: string;
  likes: number;
  friends: number;
  comments: number;
}

const ImagePost = ({
  username,
  userImg,
  title,
  imageUrl,
  description,
  likes,
  friends,
  comments,
}: ImagePost) => {
  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-[46rem] min-w-96 h-auto bg-foreground pr-4 pl-1 py-4 rounded-2xl">
      <div className="w-full h-auto flex flex-row gap-1 ml-1">
        <Image width={60} height={60} alt="" src={userImg} className='rounded-full'/>
        <div className="flex flex-col ml-2">
          <h6 className="flex text-white text-opacity-65 mt-3 text-2xl">
            @{username}
          </h6>
          <div className="flex flex-row pl-1 gap-1">
            <UsersRound className="size-4 text-secondary" />
            <p className="text-white text-xs text-opacity-30">{friends}</p>
          </div>
        </div>
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
            <Heart className="text-secondary hover:text-accent hover:cursor-pointer  size-4" />
            <div className="text-white text-xs text-opacity-30">{likes}</div>
          </div>
          <div className="inline-flex gap-1 ">
            <MessageSquareMore className="text-secondary hover:text-accent hover:cursor-pointer size-4" />
            <div className="text-white text-xs text-opacity-30">{comments}</div>
          </div>
          <Forward className="text-secondary hover:text-accent hover:cursor-pointer size-4" />
        </div>
      </div>
    </div>
  );
};

export default ImagePost;
