import { Heart, LogOut, UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { db } from "@/lib/db";
import { friends } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";

const ProfileOverview = async () => {
  const userId = await auth().userId;
  const user = await clerkClient.users.getUser(userId!);
  const friendCount = (
    await db
      .select()
      .from(friends)
      .where(and(eq(friends.userId, userId!), eq(friends.accepted, true)))
  ).length;

  return (
    <div className="flex flex-col justify-center size-full basis-1/3 max-md:hidden">
      <div className="flex flex-col items-center m-auto bg-foreground px-3 py-4 rounded-xl w-3/4 h-3/4">
        <Link href={`/users/${userId}`}>
          <Image
            width={80}
            height={80}
            alt=""
            src={user.imageUrl}
            className="rounded-full"
          />
        </Link>
        <h6 className="flex text-white text-opacity-65 mt-1 text-xl">
          @{user.fullName}
        </h6>
        <SignOutButton redirectUrl="/sign-in">
          <Button className="mt-4 bg-background hover:bg-accent-foreground flex flex-row gap-2">
            Sign Out <LogOut className="size-4" />
          </Button>
        </SignOutButton>
        <ul className="text-white w-full divide-y divide-slate-700 space-y-[10px] mt-8">
          <li className="flex flex-row gap-1 py-2 items-center">
            <UserRound className="size-5" />
            {`${friendCount} Friends`}
          </li>
          <li className="flex flex-row gap-1 py-2 items-center">
            <Heart className="size-5" />
            <p>Likes</p>
          </li>
          <li className="flex flex-col gap-1 py-2">
            <h3>Top Quote</h3>
            <div className="w-full h-[3rem] opacity-5 bg-accent">a</div>
          </li>
          <li className="flex flex-col gap-1 py-2">
            <h3>Top Post</h3>
            <div className="w-full h-[10rem] opacity-5 bg-accent">a</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileOverview;
