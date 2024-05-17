import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return(
    <div className='flex flex-col items-center justify-center w-screen h-screen animated-background pb-20'>
        <div className='w-1/4 flex flex-col items-center text-white mb-10 max-lg:w-5/6'>
          <h1 className='font-bold text-3xl'>Welcome to Tomo</h1>
          <h3 className='font-bold text-sm'>AIR Original</h3>
          <p>
          Tomo is a cutting-edge social media app designed to foster authentic connections
          and meaningful interactions. With Tomo, you can effortlessly share moments from
            your life, stay updated with friends and family, and discover new interests, all
            within a vibrant and inclusive community.
          </p>
        </div>
        <SignIn path="/sign-in" />
    </div>
  )
}