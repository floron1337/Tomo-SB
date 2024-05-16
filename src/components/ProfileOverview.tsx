import Link from "next/link";
import React from "react";
import Image from "next/image";

const ProfileOverview = () => {
  return (
    <div className="bg-backgound w-screen h-screen flex flex-col bg-background">
      <div className="position absolute w-screen h-14 flex flex-col justify-center bg-[#08171b] text-white font-bold p-2">
        <Link href={"/"} className="ml-4">
          Tomo
        </Link>
      </div>

      <div className="flex flex-col bg-foreground  w-2/3 h-4/5 max-w-[30rem] m-auto rounded-3xl">
        <Image
          width={100}
          height={100}
          alt=""
          src={"/download 1.png"}
          className="rounded-full flex mx-auto mt-6"
        />
        <h6 className="flex text-white text-opacity-65 mt-1 mx-auto text-2xl">
          @Koshm
        </h6>
      </div>
    </div>
  );
};

export default ProfileOverview;
