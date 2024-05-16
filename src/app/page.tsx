import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import TextPost from "../components/TextPost";
import ImagePost from "@/components/ImagePost";
import { Heart, LogOut, Settings, UserRound, UsersRound } from "lucide-react";
import FileUpload from "@/components/FileUpload";
import { db } from "@/lib/db";
import { postTypeEnum, posts } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import UserPost from "@/components/UserPost";
import Feed from "@/components/Feed";
import CreatePost from "@/components/CreatePost";
import { clerkClient } from "@clerk/nextjs/server";
import FriendList from "@/components/FriendList";

export default function Home() {
  return (
    <>
      <SignedIn>
        <main className="h-auto overflow-x-hidden">
          <div className="position absolute w-screen h-14 flex flex-col justify-center bg-[#08171b] text-white font-bold p-2">
            <h1 className="ml-4">Tomo</h1>
          </div>

          <div className="flex flex-row items-start h-screen w-screen overflow-hidden">
            {/*
              <div className="flex flex-col bg-foreground w-full h-auto m-4 p-0 col-span-1 rounded-2xl">
              <div className="flex size-16 bg-sky-400 rounded-full m-2"></div>
              <h6 className="flex text-white text-opacity-65mt-1  ml-2">
                @Koshmar
              </h6>
            </div>
            
               */}
            <div className="flex flex-col justify-center size-full basis-1/3">
              <div className="flex flex-col items-center m-auto w-3/4 h-3/4 bg-foreground px-3 py-4 rounded-xl">
                <Link href={"/user-page"}>
                  <Image
                    width={80}
                    height={80}
                    alt=""
                    src={"/download 1.png"}
                    className="rounded-full"
                  />
                </Link>
                <h6 className="flex text-white text-opacity-65 mt-1 text-xl">
                  @Koshmi
                </h6>
                <ul className="text-white w-full divide-y divide-slate-700 space-y-[10px] mt-8">
                  <li className="flex flex-row gap-1 py-2">
                    <UserRound className="size-5" />
                    <p className="hover:text-accent hover:cursor-pointer">
                      Friends
                    </p>
                  </li>
                  <li className="flex flex-row gap-1 py-2">
                    <Heart className="size-5" />
                    <p>Likes</p>
                  </li>

                  <li className="flex flex-col gap-1 py-2">
                    <h3>Top Quote</h3>
                    <div className="w-full h-[3rem] opacity-5 bg-accent">a</div>
                  </li>
                  <li className="flex flex-col gap-1 py-2">
                    <h3>Top Post</h3>
                    <div className="w-full h-[10rem] opacity-5 bg-accent">
                      a
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <Feed />

            {/*<div className="h-auto">
              <UserButton />
              </div>*/}
            <div className="flex flex-col justify-center size-full basis-1/3">
              <FriendList />
            </div>
          </div>
        </main>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
