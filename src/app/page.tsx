import { RedirectToSignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <SignedIn>
      <main className="">
        <UserButton/>
      </main>
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </>
  );
}
