import { ArrowUpRight } from 'lucide-react'
import React from 'react'

interface QuestionnairesCardProps {
    icon: React.ReactNode,
    title: string,
    description: string,
    onclick?: () => void
    hasStatus?: boolean
    totalCount?:
    number,
    completedCount?: number
}

const QuestionnairesCard = ({ icon, title, description, onclick, hasStatus, totalCount, completedCount }: QuestionnairesCardProps) => {
    return (
        <div onClick={onclick} className='p-4 rounded-xl bg-white border border-[#E9EAEB] w-full flex items-start md:items-center justify-between cursor-pointer hover:border-[#BE735B] transition-colors duration-300'>
            <div className='flex flex-col md:flex-row items-start md:items-center gap-4'>
                <div className='w-10 h-10 rounded-full bg-[#E5E7D4] flex items-center justify-center'>
                    {icon}
                </div>
                <div>
                    <div className='flex items-center gap-5'>
                        <h3 className='text-xl/6.5 font-semibold text-[#181D27]'> {title} </h3>
                        {hasStatus &&
                            <div className='flex items-center gap-1.5'>
                                <span className={`${totalCount === completedCount ? "text-green-500" : "text-[#D12A2A]"}  text-base/8`}> {completedCount}/{totalCount} </span>
                                <span className={`text-sm ${totalCount === completedCount ? "text-green-500" : "text-[#D12A2A]"}`}>Completed</span>

                            </div>
                        }
                    </div>
                    <p className='text-sm/6 text-[#414651] mt-0.5'>{description}</p>
                </div>
            </div>
            <button onClick={onclick} className='p-2 rounded-md border border-[#BE735B] text-[#BE735B] text-sm font-medium flex items-center gap-2' >
                view
                <ArrowUpRight size={16} color='#BE735B' />
            </button>


        </div>
    )
}

export default QuestionnairesCard