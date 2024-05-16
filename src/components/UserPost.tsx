import { Post, postTypeEnum } from '@/lib/db/schema'
import React from 'react'
import TextPost from './TextPost'
import ImagePost from './ImagePost'
import { clerkClient, currentUser } from '@clerk/nextjs/server'

type Props = {
    post: Post
}

const UserPost = async ({post} : Props) => {
    const user = await clerkClient.users.getUser(post.userId)
    return (
        <>
            {post.postType === 'text' && 
            <TextPost 
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
                    username={user.fullName!}
                    userImg={user.imageUrl}
                    title={post.title}
                    imageUrl={post.fileUrl}
                    description={post.description}
                    likes={post.likes}
                    friends={0}
                    comments={0}
                />
            }
        </>
    )
}

export default UserPost