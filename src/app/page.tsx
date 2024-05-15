import TextPost from "./myComponents/TextPost";
export default function Home() {
  return (
    <main className="flex h-screen w-screen">
      <div className="flex flex-row justify-center p-24 h-screen w-screen bg-background">
        <TextPost></TextPost>
      </div>
    </main>
  );
}
