import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";
import React from "react";
import { eq } from "drizzle-orm";
import UserPost from "./UserPost";

const Feed = async () => {
  const _posts = await db.select().from(posts);
  return (
    <div className="flex flex-col basis-2/3 gap-8 justify-start items-center py-20 h-full w-full overflow-y-scroll no-scrollbar">
      <div className="flex flex-col gap-8 justify-center items-center pt-5 h-auto w-full bg-background">
        {_posts.map((post) => (
          <UserPost post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
