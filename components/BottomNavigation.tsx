"use client"
import Link from 'next/link'
import { Dashboard, Insights, ActionPlan, Profile, Chatboat, Enterprise, Questionaries } from '@/assets/CustomIcons'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu } from 'lucide-react'

const BottomNavigation = () => {
  const pathname = usePathname()
  const [viewMore, setViewMore] = useState(false)

  const navLinks = [
    {
      name: "Home",
      href: "/",
      icon: Dashboard,
    },
    {
      name: "Insights",
      href: "/health-insights",
      icon: Insights,
    },
    {
      name: "Chat",
      href: "/chatboat",
      icon: Chatboat
    },
    {
      name: "Action plan",
      href: "/action-plan",
      icon: ActionPlan,
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
    <aside className='block lg:hidden shadow-lg fixed z-999 bottom-0 left-0 right-0 px-4 rounded-xl bg-white  ' >
      <nav>
        <ul className='flex items-center justify-between'>
          {navLinks.slice(0, 4).map((link, index) => {
            const isActive = pathname === link.href
            return (
              <li key={index} className=' w-full'>
                <Link href={link.href} className={`flex flex-col items-center gap-1.25 px-3.5 py-3 w-full ${isActive ? ' text-[#BE735B] ' : 'text-[#9DB2CE]'}`}>
                  <span >
                    {<link.icon pathname={pathname} />}
                  </span>
                  <span className={`text-base/6 `}>{link.name}</span>
                </Link>
              </li>
            )
          })}
          <li>
            <button
              onClick={() => setViewMore(!viewMore)}
              className={`relative flex flex-col items-center gap-1.25 px-3.5 py-3 w-full ${viewMore ? ' text-[#BE735B] ' : 'text-[#9DB2CE]'}`}>
              <Menu size={24} color={`${viewMore ? '#BE735B' : '#9DB2CE'}`} />
              <span>More</span>
            </button>
            {viewMore && (
              <div className='absolute -top-20 right-10  bg-white rounded-xl shadow-lg w-max'>
                <ul className='flex items-center '>
                  {navLinks.slice(4, 7).map((link, index) => {
                    const isActive = pathname === link.href
                    return (
                      <li key={index} className=' w-full'>
                        <Link href={link.href} className={`flex flex-col items-center gap-1.25 px-3.5 py-3 w-full ${isActive ? ' text-[#BE735B] ' : 'text-[#9DB2CE]'}`}>
                          <span >
                            {<link.icon pathname={pathname} />}
                          </span>
                          <span className={`text-base/6 `}>{link.name}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

          </li>

        </ul>

      </nav>
    </aside>
  )
}

export default BottomNavigation
