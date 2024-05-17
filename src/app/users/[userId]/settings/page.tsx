'use client'
import TopBar from '@/components/TopBar'
import { Button } from '@/components/ui/button'
import { UserProfile } from '@clerk/clerk-react'
import { Undo2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='h-auto flex flex-col items-center'>
            <TopBar/>
            <div className='mt-20 overflow-x-hidden flex flex-col items-center'>
                <UserProfile />
                <Button
                    className="w-1/4 ml-auto mr-auto bg-secondary hover:bg-accent mt-4 flex flex-row gap-2"
                    asChild
                >
                    <Link href='/'>
                        Return Home <Undo2 />
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default page
