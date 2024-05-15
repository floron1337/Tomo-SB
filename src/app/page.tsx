import { RedirectToSignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import TextPost from "../components/TextPost";
import FileUpload from "@/components/FileUpload";

export default function Home() {
  return (
    <>
    <SignedIn>
        <main className="flex h-screen w-screen">
          <div className="flex flex-row justify-center p-24 h-screen w-screen bg-background">
            <FileUpload/>
            <TextPost></TextPost>
            <UserButton/>
          </div>
        </main>
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </>
  );
}
