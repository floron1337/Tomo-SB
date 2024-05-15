import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Forward, Heart, MessageSquareMore } from "lucide-react";
import Image from "next/image";
const TextPost = () => {
  return (
    <div className="flex flex-row w-2/3 min-w-96 h-2/6 bg-foreground p-4 rounded-2xl">
      <div className="flex-col justify-center align-middle w-2/4 max-w-24 min-w-20 h-2/3">
        <div className="size-10 bg-amber-400 rounded-full">a</div>
      </div>
      <div className="flex flex-col">
        <p className="text-secondary-foreground p-1">
          Lorem ipssadasd adsad asd asdsa as dasd sdsa asd a sdadasd asdadd asd
          ada das da
        </p>
        <div className="flex flex-row gap-2 mx-2">
          <Heart className="text-secondary hover:text-accent hover:cursor-pointer size-4" />
          <MessageSquareMore className="text-secondary hover:text-accent hover:cursor-pointer size-4" />
          <Forward className="text-secondary hover:text-accent hover:cursor-pointer size-4" />
        </div>
      </div>
    </div>
  );
};

export default TextPost;
