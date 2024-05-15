import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import TextPost from "../components/TextPost";
import ImagePost from "@/components/ImagePost";
import FileUpload from "@/components/FileUpload";
import { db } from "@/lib/db";
import { postTypeEnum, posts } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import UserPost from "@/components/UserPost";
import Feed from "@/components/Feed";

export default function Home(){
  return (
    <>
      <SignedIn>
        <main className="h-auto overflow-x-auto">
          <div className="position absolute w-screen h-10 bg-[#08171b] text-white font-bold p-2">
            Tomo
          </div>
          <Feed/>
        </main>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
