import FriendList from "@/components/FriendList";
import Profile from "@/components/Profile";
import ProfileOverview from "@/components/ProfileOverview";
import TopBar from "@/components/TopBar";
import { Separator } from "@/components/ui/separator";
import { RedirectToSignIn, SignedIn, SignedOut} from "@clerk/nextjs";
import { Heart, MessageSquareMore } from "lucide-react";

export default function Page({ params }: { params: { userId: string } }) {
    return(
        <>
            <SignedIn>
                <main className="h-auto overflow-x-hidden">
                    <TopBar/>
                    <div className="flex flex-row items-start h-screen w-screen overflow-hidden">
                        <ProfileOverview/>
                        <Profile userId={params.userId}/>
                        <div className="flex flex-col justify-center size-full basis-1/3">
                            <FriendList />
                        </div>
                    </div>
                </main>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    )
}