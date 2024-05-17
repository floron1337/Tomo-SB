import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";
import React from "react";
import { eq } from "drizzle-orm";
import UserPost from "./UserPost";
import CreatePost from "./CreatePost";
import { asc, desc } from "drizzle-orm/expressions";

const Feed = async () => {
  const _posts = await db.select().from(posts).orderBy(desc(posts.createdAt));
  return (
    <div className="flex flex-col max-md:basis-full basis-2/3 gap-8 justify-start items-center py-20 max-md:py-40 h-full w-full overflow-y-scroll no-scrollbar">
      <CreatePost />
      <div className="flex flex-col  max-md:px-4 gap-8 justify-center items-center pt-5 h-auto w-full bg-background">
        {_posts.map((post) => (
          <UserPost post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
