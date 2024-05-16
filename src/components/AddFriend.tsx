'use client'
import React from 'react'
import { Button } from './ui/button'
import axios from 'axios'
import { UserRoundPlus } from 'lucide-react'

type Props = {
    userId: string,
    friendId: string,
    text: string
}

const AddFriend = ({ userId, friendId, text } : Props) => {
    async function addFriend() {
        const response = await axios.post('/api/add-friend', {
          userId,
          friendId
        })
    }
    
    return (
        <Button className="w-1/4 ml-auto mr-auto bg-secondary hover:bg-accent flex flex-row gap-1" onClick={addFriend}>
           {text} <UserRoundPlus className='text-white size-5'/>
        </Button>
    )
}

export default AddFriend
