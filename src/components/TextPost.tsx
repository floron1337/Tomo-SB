import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Forward, Heart, MessageSquareMore, UsersRound } from "lucide-react";
import Image from "next/image";

interface TextPostPrps {
  user: string;
  description: string;
  likes: number;
  friends: number;
  comments: number;
}

const TextPost = ({
  user,
  description,
  likes,
  friends,
  comments,
}: TextPostPrps) => {
  return (
    <div className="flex flex-row w-full max-w-[46rem] min-w-96 min-h-[10rem] h-auto bg-foreground pr-4 pl-1 py-4 rounded-2xl">
      <div className="flex flex-col gap-0 align-top justify-start ml-2 w-2/4 max-w-24 min-w-20 h-auto">
    <div className="flex flex-row w-2/3 max-w-[46rem] min-w-96 h-auto bg-foreground pr-4 pl-1 py-4 rounded-2xl">
      <div className="h-auto flex flex-col gap-0 align-top justify-start ml-2 w-2/4 max-w-24 min-w-20">
        <div className="flex size-16 bg-sky-400 rounded-full"></div>
        <h6 className="flex text-white text-opacity-65 mt-1">@{user}</h6>
        <div className="flex flex-row p-1 gap-1">
          <UsersRound className="size-4 text-secondary" />
          <p className="text-white text-xs text-opacity-30">{friends}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-secondary-foreground p-1">{description}</p>
        <div className="flex flex-row gap-2 mx-2">
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

export default TextPost;
