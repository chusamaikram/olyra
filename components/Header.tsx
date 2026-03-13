import React from 'react'
import { Language } from '@/assets/CustomIcons'
import { Bell } from "lucide-react"
import Image from 'next/image'
import Profile from "@/assets/images/profile.png"
import Link from 'next/link'
import logo from "@/assets/images/Logo.svg"

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 right-0 py-4 px-4 lg:px-16 flex items-center justify-between lg:justify-end gap-4 border-b border-[#E9EAEB] bg-white z-10">
            <Link href="/" className='block lg:hidden'>
                <Image src={logo}
                    alt='logo'
                    width={143}
                    height={38}
                    className='object-contain'
                />
            </Link>
            <div className='flex items-center justify-end gap-4 '>
                <button aria-label='language button' type="button" className="p-2.5 rounded-full h-10 w-10 bg-[#F5F5F5] flex items-center justify-center">
                    <Language />
                </button>
                <div className="h-10 w-10 p-2.5 rounded-full bg-[#F5F5F5]">
                    <Bell size={20} />

                </div>
                <div className="h-10 w-10 rounded-full overflow-hidden">
                    <Image
                        src={Profile}
                        alt="profile image"
                        className="h-full w-full object-cover"
                        width={40}
                        height={40}

                    />

                </div>
            </div>

        </header>
    )
}

export default Header
