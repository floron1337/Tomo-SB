import { auth } from "@clerk/nextjs/server";
import React from "react";
import Image from "next/image";

type Props = {
  message: string;
  authorImg: string;
};
const TextMessage = ({ message, authorImg }: Props) => {
  return (
    <div className="flex flex-end max-w-[30rem] px-[8px] mt-3  rounded-xl  ">
      <p className="mt-2 px-[4px] text-slate-900 bg-primary h-full rounded-md ">
        {message}
      </p>
      <div className="flex min-w-[3rem] h-auto mb-auto">
        <Image
          width={40}
          height={40}
          alt=""
          src={authorImg}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default TextMessage;
