import FriendList from "@/components/FriendList";
import Profile from "@/components/Profile";
import ProfileOverview from "@/components/ProfileOverview";
import TopBar from "@/components/TopBar";
import { Separator } from "@/components/ui/separator";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { Heart, MessageSquareMore } from "lucide-react";

export default function Page({ params }: { params: { userId: string } }) {
  return (
    <>
      <SignedIn>
        <main className="h-auto max-md:h-screen overflow-x-hidden">
          <TopBar />
          <div className="flex flex-row max-md:flex-col max-md:v-vh items-start h-screen w-screen px-4 overflow-hidden">
            <ProfileOverview />
            <Profile userId={params.userId} />
            <FriendList />
          </div>
        </main>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
