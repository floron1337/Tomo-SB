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
import ProfileOverview from "@/components/ProfileOverview";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <>
      <SignedIn>
        <main className="h-auto overflow-x-hidden">
          <TopBar/>

          <div className="flex flex-row items-start h-screen w-screen overflow-hidden">
            <ProfileOverview/>
            <Feed />
            
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
