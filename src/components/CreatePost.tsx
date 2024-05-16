'use client'
import React, { FormEvent, useState } from 'react'
import { Form } from 'react-hook-form'
import { Input } from './ui/input'
import FileUpload from './FileUpload'
import { Button } from './ui/button'
import { currentUser } from '@clerk/nextjs/server'
import { uploadToS3 } from '@/lib/s3'
import toast from 'react-hot-toast'
import axios from 'axios'
import { postTypeEnum } from '@/lib/db/schema'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

const CreatePost = () => {

    const [showCreate, setShowCreate] = useState(false)
    const [file, setFile] = useState<File | null>(null);
    const [uploaded, setUploaded] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const router = useRouter()
    //const user = await currentUser()

    async function onSubmit(event: FormEvent<HTMLFormElement>){
        setLoading(true)
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const title = formData.get('title')
        const description = formData.get('description')
        
        if(file != null){
            const data = await uploadToS3(file!)
            if(!data?.file_key || !data.file_name){
                return
            }
            setUploaded(false)
            
            const file_key = data.file_key
            const type = file.type 
            const postType = type.split('/')[0]

            const response = await axios.post('/api/create-post', {title, description, file_key, postType})
            setLoading(false)
            setShowCreate(false)
            router.refresh()
            return
        }
        const file_key = ""
        const postType = "text"
        const response = await axios.post('/api/create-post', {title, description, file_key, postType})
        setUploaded(false)
        setShowCreate(false)
        setLoading(false)
        router.refresh()
    }

    return (
        <div className="flex flex-col w-full max-w-[46rem] min-w-96 bg-foreground p-4 rounded-2xl text-white" id='create-post'>
            {showCreate? (
                <form onSubmit={onSubmit} className='flex flex-col gap-5'>
                    <div className='flex flex-row items-center'>
                        <h3 className='min-w-24'>Post Title</h3>
                        <Input className='bg-background text-white w-1/2' type="text" name="title"/>
                    </div>
                    <div>
                        <h3 className=''>Description</h3>
                        <textarea className='bg-background text-white min-h-32 w-full items-start justify-start border rounded-xl' name="description"/>
                    </div>
                    <FileUpload file={file} setFile={setFile} uploaded={uploaded} setUploaded={setUploaded}/>
                    <Button className='w-1/4 ml-auto mr-auto bg-background hover:bg-accent-foreground' type="submit" disabled={loading}>
                        Create Post
                        {loading && <Loader2 className="h-5 w-5 text-white animate-spin"/>}
                    </Button>
                </form>
            ): (
                <div className='flex flex-col items-center gap-4'>
                    <h1>What are you thinking about?</h1>
                    <Button className='w-1/4 ml-auto mr-auto bg-background hover:bg-accent-foreground' onClick={(e) => {
                        setShowCreate(true)
                        console.log(showCreate)
                    }}>
                        Create Post
                    </Button>
                </div>
            )}
            
        </div>
    )
}

export default CreatePost
