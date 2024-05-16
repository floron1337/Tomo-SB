'use client'
import { uploadToS3 } from "@/lib/s3";
import { useMutation } from "@tanstack/react-query";
import { Inbox, Loader2, Trash } from "lucide-react";
import React, { useState } from "react";
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation'
import Image from "next/image";
import { Button } from "./ui/button";

type Props = {
    file: File | null,
    setFile: React.Dispatch<React.SetStateAction<File | null>>
    uploaded: boolean,
    setUploaded: React.Dispatch<React.SetStateAction<boolean>>
}

const FileUpload = ({file, setFile, uploaded, setUploaded} : Props) => {
    const [path, setPath] = useState("")

    const {getRootProps, getInputProps} = useDropzone({
        accept: {'image/*': ['.jpeg', '.png']},
        maxFiles: 1,
        onDrop: async (acceptedFiles) => {
            if(acceptedFiles[0].size > 10 * 1024 * 1024){
                toast.error('Please upload a smaller file!')
                return
            }
            setFile(acceptedFiles[0])
            setPath(URL.createObjectURL(acceptedFiles[0]))
            setUploaded(true)
        }
    })

    return (
        <div className="border rounded-xl">
            <div {...getRootProps({
                className: 'border-dashed-2 rounded-xl cursor-pointer bg-background py-8 flex justify-center items-center flex-col'
            })}>
                {uploaded ? (
                    <>
                        <Image 
                            src={path} 
                            alt="your uploaded file" 
                            width={200}
                            height={160}
                        />
                    </>
                ): (
                    <>
                        <Inbox className="w-8 h-8 text-white"/>
                        <p className="mt-2 text-sm text-slate-400">Upload an image or a video.</p>
                    </>
                )
                }

                <input {...getInputProps()}/>
                {
                    /*
                    
                    
                {(uploading || isPending)?(
                    <>
                        <Loader2 className="h-8 w-8 text-white animate-spin"/>
                        <p className="mt-2 text-sm text-slate-400">
                            Loading..
                        </p>
                    </>
                ):(
                    <>
                        <Inbox className="w-8 h-8 text-white"/>
                        <p className="mt-2 text-sm text-slate-400">Upload an image or a video.</p>
                    </>
                )}
                */ 
            }
            </div>
        </div>
    )
}

export default FileUpload