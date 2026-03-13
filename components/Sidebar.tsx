'use client'
import Link from 'next/link'
import React from 'react'
import Logo from "../assets/images/Logo.svg"
import Image from 'next/image'
import { Dashboard, Insights, ActionPlan, Profile, Chatboat, Enterprise, Questionaries } from '@/assets/CustomIcons'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const pathname = usePathname()

    const navLinks = [
        {
            name: "Dashboard",
            href: "/",
            icon: Dashboard,
        },
        {
            name: "Health Insights",
            href: "/health-insights",
            icon: Insights,
        },
        {
            name: "Action plan",
            href: "/action-plan",
            icon: ActionPlan,
        },
        {
            name: "Chatboat",
            href: "/chatboat",
            icon: Chatboat
        },
        {
            name: "Profile",
            href: "/profile",
            icon: Profile
        },
        {
            name: "Enterprise",
            href: "/enterprise",
            icon: Enterprise
        },
        {
            name: "Questionnaires",
            href: "/questionnaires",
            icon: Questionaries
        },
    ]
    return (
        <aside className='hidden lg:block sticky top-0 left-0 py-6 px-4 border-r bg-white border-[#E9EAEB] ' >
            <nav>
                <Link href="/" className=''>
                    <Image src={Logo}
                        alt='logo'
                        width={182}
                        height={38}
                    />
                </Link>
                <p className='mt-6 mb-4 text-sm/7 text-[#535862] px-4'>Main Navigation</p>
                <ul className='flex flex-col items-start gap-2'>
                    {navLinks.map((link, index) => {
                        const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
                        return (
                            <li key={index} className=' w-full'>
                                <Link href={link.href} className={`flex items-center gap-4 px-3 py-2 rounded-xl w-full ${isActive ? 'bg-[#BE735B] text-white font-medium' : 'font-normal'}`}>
                                    <span >
                                        {<link.icon isActive={isActive} />}
                                    </span>
                                    <span className={`text-base/6 `}>{link.name}</span>
                                </Link>
                            </li>
                        )
                    })}

                </ul>

            </nav>
        </aside>
    )
}

export default Sidebar
