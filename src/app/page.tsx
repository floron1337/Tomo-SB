import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import TextPost from "../components/TextPost";
import ImagePost from "@/components/ImagePost";

export default function Home() {
  return (
    <>
      <SignedIn>
        <main className="h-auto overflow-x-auto">
          <div className="position absolute w-screen h-10 bg-[#08171b] text-white font-bold p-2">
            Tomo
          </div>

          <div className="h-screen p-10 overflow-scroll overflow-x-hidden">
            <div className="flex flex-col gap-8 justify-center items-center pt-5 h-auto w-screen bg-background">
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

              {/*<div className="h-auto">
              <UserButton />
              </div>*/}
            </div>
          </div>
        </main>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
