import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import TextPost from "../components/TextPost";
import ImagePost from "@/components/ImagePost";
import { LogOut, Settings, UserRound, UsersRound } from "lucide-react";
import FileUpload from "@/components/FileUpload";
import { db } from "@/lib/db";
import { postTypeEnum, posts } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import UserPost from "@/components/UserPost";
import Feed from "@/components/Feed";
import CreatePost from "@/components/CreatePost";

export default function Home() {
  return (
    <>
      <SignedIn>
        <main className="h-auto overflow-x-hidden">
          <div className="position absolute w-screen h-14 flex flex-col justify-center bg-[#08171b] text-white font-bold p-2">
            <h1 className='ml-4'>Tomo</h1>
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
              <div className="flex flex-col items-center m-auto w-3/4 h-3/4 bg-foreground pr-4 pl-1 py-4 rounded-xl">
                
                <div className="flex size-16 bg-sky-400 rounded-full"></div>
                <h6 className="flex text-white text-opacity-65 mt-1 text-xl">
                  @Koshmi
                </h6>
                <ul className="text-white space-y-4 mt-8">
                  <li className="flex flex-row gap-1 border-solid">
                    <p className="hover:text-accent hover:cursor-pointer">
                      <UserRound className="size-5" />
                      friends
                    </p>
                  </li>
                  <li>
                    <UserRound className="size-5" />
                    Home
                  </li>
                  <li>
                    <UserRound className="size-5" />
                    Settings
                  </li>
                  <li>
                    <UserRound className="size-5" />
                    logout
                  </li>
                </ul>
              </div>
            </div>

            <Feed />

            {/*<div className="h-auto">
              <UserButton />
              </div>*/}
            <div className=" size-full basis-1/3"></div>
          </div>
        </main>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
