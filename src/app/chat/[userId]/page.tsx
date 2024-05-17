"use client";
import FriendList from "@/components/FriendList";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import Image from "next/image";
import ChatFriendList from "@/components/ChatFriendList";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { set, string } from "zod";
import TextMessage from "@/components/TextMessage";
type Props = {
  username: string;
  userImg: string;
};
const page = ({ username, userImg }: Props) => {
  const [input, setInput] = useState<string>("");
  const [strings, setStrings] = useState<string[]>([]);
  const addString = (newString: string) => {
    if (newString.trim() !== "") {
      const newStrings = strings;
      newStrings.push(newString);
      setStrings(newStrings);
      console.log(strings);
      setInput("");
    }
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("Enter key pressed"); // Debug log
      addString(input);
    }
  };
  return (
    <div className="w-screen h-screen justify-start flex flex-row">
      <ChatFriendList />
      <div className="flex flex-col justify-between basis-2/3 h-full max-w-[48rem] bg-foreground w-auto">
        <div className="flex flex-row h-[6rem] w-full p-3 border-b-2 border-secondary border-opacity-50">
          <Image src={"/download 1.png"} width={68} height={68} alt=""></Image>
          <h1 className="my-auto mx-3 flex w-auto h-auto text-white text-3xl">
            Nume
          </h1>
        </div>
        <div className="flex flex-col items-end justify-end content-end py-4 pr-1 gap-2  w-full h-full">
          {strings.map((string, index) => (
            <TextMessage
              key={index}
              message={string}
              authorImg={"/download 1.png"}
            />
          ))}
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
            onClick={() => {
              console.log(input);
              addString(input);
            }}
          >
            <Send />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
