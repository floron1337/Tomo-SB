import Link from 'next/link'
import React from 'react'

const TopBar = () => {
    return (
        <div className="position absolute w-screen h-14 flex flex-col justify-center bg-[#08171b] text-white font-bold p-2">
            <Link href={"/"} className="ml-4">
                Tomo
            </Link>
      </div>
    )
}

export default TopBar
