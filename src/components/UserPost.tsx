import { Post, postTypeEnum } from '@/lib/db/schema'
import React from 'react'
import TextPost from './TextPost'
import ImagePost from './ImagePost'
import { auth, clerkClient, currentUser } from '@clerk/nextjs/server'

type Props = {
    post: Post
}

const UserPost = async ({post} : Props) => {
    const user = await clerkClient.users.getUser(post.userId)
    const currentUserId = await auth().userId

    return (
        <>
            {post.postType === 'text' && 
            <TextPost 
                postId={post.id}
                userId={post.userId}
                currentUserId={currentUserId!}
                username={user.fullName!}
                userImg={user.imageUrl}
                title={post.title}
                description={post.description}
                likes={post.likes}
                friends={0}
                comments={0}
            />
            }
            {
            post.postType === 'image' && 
            <ImagePost
                postId={post.id}
                userId={post.userId}
                currentUserId={currentUserId!}
                username={user.fullName!}
                userImg={user.imageUrl}
                title={post.title}
                description={post.description}
                likes={post.likes}
                friends={0}
                comments={0}
                imageUrl={post.fileUrl}
            />
            }
        </>
    )
}

export default UserPost
