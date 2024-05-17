'use client'
import FriendList from "@/components/FriendList";
import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import Image from "next/image";
import ChatFriendList from "@/components/ChatFriendList";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { set, string } from "zod";
import TextMessage from "@/components/TextMessage";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { ChatMessage, chats } from "@/lib/db/schema";
import axios from "axios";
import { db } from "@/lib/db";
import { or } from "drizzle-orm";
import { useRouter } from "next/navigation";

type Props = {
    userId: string,
    userImg: string,
    friendId: string,
    friendImg: string, 
    friendName: string,
    chatId: number,
    messageList: ChatMessage[]
}

const Messages = ({chatId, userId, userImg, friendId, friendImg, friendName, messageList} : Props) => {
    const [input, setInput] = useState<string>("");
    const [strings, setStrings] = useState<string[]>([]);
    const router = useRouter()

    const addString = (newString: string) => {
      if (newString.trim() !== "") {
        const newStrings = strings;
        newStrings.push(newString);
        setStrings(newStrings);
        setInput("");
      }
    };
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
    };
    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        //addString(input);
        sendMessage()
      }
    };
    
    async function sendMessage(){
        const textMessage = input
        const author = userId

        if(textMessage != ""){
            axios.post('/api/send-message', {
                chatId,
                textMessage,
                author
            })
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
          // Reload the page
          router.refresh();
        }, 1500); // Refresh interval: 3 seconds
    
        // Clean up the interval on component unmount
        return () => clearInterval(interval);
      }, []);

    return (
        <div className="flex flex-col justify-between basis-2/3 h-full max-w-[48rem] bg-foreground w-auto">
            <div className="flex flex-row h-[6rem] w-full p-3 border-b-2 border-secondary border-opacity-50">
                <Image src={friendImg} width={68} height={68} alt="" className='rounded-full'></Image>
                <h1 className="my-auto mx-3 flex w-auto h-auto text-white text-3xl">
                {friendName}
                </h1>
            </div>
            <div className="flex flex-col items-end justify-end content-end py-4 pr-1 gap-2  w-full h-full">
                
                {/*strings.map((string, index) => (
                    <TextMessage
                        key={index}
                        message={string}
                        authorImg={"/download 1.png"}
                    />
                ))*/
                messageList.map((message, index) => (
                    <TextMessage
                        key={index}
                        message={message.textMessage}
                        authorImg={(userId === message.author ? userImg : friendImg)}
                    />
                 ))
                }
            </div>
            <div className="flex flex-row h-auto pt-4 border-t-[1px] border-secondary border-opacity-50 w-full">
                form
                <Input
                className="bg-background self-end ml-auto mr-1 border-[0px] text-white w-3/4"
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                />
                <Button
                    className=" size-10 bg-secondary self-end mr-auto rounded-full hover:bg-accent"
                    onClick={sendMessage}
                >
                    <Send />
                </Button>
            </div>
        </div>
    )
}

export default Messages
