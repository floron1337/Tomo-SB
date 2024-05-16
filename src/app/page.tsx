import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import TextPost from "../components/TextPost";
import ImagePost from "@/components/ImagePost";
import { LogOut, Settings, UserRound, UsersRound } from "lucide-react";

export default function Home() {
  return (
    <>
      <SignedIn>
        <main className="h-auto overflow-x-hidden">
          <div className="position absolute w-screen h-10 bg-[#08171b] text-white font-bold p-2">
            Tomo
          </div>

          <div className="flex flex-row items-start h-screen w-screen overflow-hidden">
            {/*
              <div className="flex flex-col bg-foreground w-full h-auto m-4 p-0 col-span-1 rounded-2xl">
              <div className="flex size-16 bg-sky-400 rounded-full m-2"></div>
              <h6 className="flex text-white text-opacity-65mt-1  ml-2">
                @Koshmar
              </h6>
            </div>
            
               */}
            <div className="flex flex-col justify-center size-full basis-1/3 bg-green-600">
              <div className="flex flex-col items-center m-auto w-3/4 h-3/4 bg-foreground pr-4 pl-1 py-4 rounded-xl">
                <div className="flex size-16 bg-sky-400 rounded-full"></div>
                <h6 className="flex text-white text-opacity-65 mt-1 text-xl">
                  @Koshmi
                </h6>
                <ul className="text-white space-y-4 mt-8">
                  <li>
                    <UserRound className="size-3" />
                    <p>friends</p>
                  </li>
                  <li>
                    <UserRound className="size-3" />
                    Home
                  </li>
                  <li>
                    <UserRound className="size-3" />
                    Settings
                  </li>
                  <li>
                    <UserRound className="size-3" />
                    logout
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col basis-2/3 gap-8 justify-start items-center py-20 h-full w-auto overflow-y-scroll no-scrollbar">
              <ImagePost
                user={"nigger"}
                likes={0}
                friends={0}
                photo={"/yosemite.png"}
                description="Om cu nas mare mere in parc"
                title="Intalnirea mea cu spinul"
                content={
                  "Cel mai mare nas pe care l am vazut in viata mea a fost atunci cand l- am intalnit pe Florin Venis"
                }
                comments={0}
              ></ImagePost>
              <TextPost
                user={"nigger"}
                likes={0}
                friends={0}
                content={
                  "Cel mai mare nas pe care l am vazut in viata mea a fost atunci cand l- am intalnit pe Florin Venis"
                }
                comments={0}
              ></TextPost>
              <ImagePost
                user={"nigger"}
                likes={0}
                friends={0}
                photo={"/yosemite.png"}
                description="Om cu nas mare mere in parc"
                title="Intalnirea mea cu spinul"
                content={
                  "Cel mai mare nas pe care l am vazut in viata mea a fost atunci cand l- am intalnit pe Florin Venis"
                }
                comments={0}
              ></ImagePost>
              <ImagePost
                user={"nigger"}
                likes={0}
                friends={0}
                photo={"/yosemite.png"}
                description="Om cu nas mare mere in parc"
                title="Intalnirea mea cu spinul"
                content={
                  "Cel mai mare nas pe care l am vazut in viata mea a fost atunci cand l- am intalnit pe Florin Venis"
                }
                comments={0}
              ></ImagePost>
              <ImagePost
                user={"nigger"}
                likes={0}
                friends={0}
                photo={"/yosemite.png"}
                description="Om cu nas mare mere in parc"
                title="Intalnirea mea cu spinul"
                content={
                  "Cel mai mare nas pe care l am vazut in viata mea a fost atunci cand l- am intalnit pe Florin Venis"
                }
                comments={0}
              ></ImagePost>
              <ImagePost
                user={"nigger"}
                likes={0}
                friends={0}
                photo={"/yosemite.png"}
                description="Om cu nas mare mere in parc"
                title="Intalnirea mea cu spinul"
                content={
                  "Cel mai mare nas pe care l am vazut in viata mea a fost atunci cand l- am intalnit pe Florin Venis"
                }
                comments={0}
              ></ImagePost>

              {/*<div className="h-auto">
              <UserButton />
              </div>*/}
            </div>
            <div className=" size-full basis-1/3 bg-green-600"></div>
          </div>
        </main>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
