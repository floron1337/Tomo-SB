import { Post, postTypeEnum } from '@/lib/db/schema'
import React from 'react'
import TextPost from './TextPost'
import ImagePost from './ImagePost'

type Props = {
    post: Post
}

const UserPost = ({post} : Props) => {
    return (
        <>
            {post.postType === 'text' && 
            <TextPost 
                user={post.creator}
                description={post.description}
                likes={post.likes}
                friends={0}
                comments={0}
            />
            }
            {
                post.postType === 'image' && 
                <ImagePost
                    user={post.creator}
                    title={post.title}
                    photo={"/yosemite.png"}
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
