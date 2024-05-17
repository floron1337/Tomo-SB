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
import { Inter } from "next/font/google";

export default function Home() {
  // If loading a variable font, you don't need to specify the font weight

  return (
    <>
      <SignedIn>
        <main className="h-auto overflow-x-hidden font-mono">
          <TopBar />

          <div className="flex flex-row max-sm:flex-col  items-start h-screen w-screen overflow-hidden">
            <ProfileOverview />
            <Feed />
            <FriendList />
          </div>
        </main>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
