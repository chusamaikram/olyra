
import React from 'react'
import Divider from './common/Divider'

interface ActionPlanCardProps {
    heading: string,
    desc: string,
    category: string,
    onClick: () => void
}

function ActionPlanCard({
    heading,
    desc,
    category,
    onClick
}: ActionPlanCardProps) {
    return (
        <button onClick={onClick} aria-label='action card' type='button' className='p-3 rounded-lg bg-white border border-[#E9EAEB] w-full hover:border-[#BE735B] transition-colors duration-300'>
            <div className='flex items-center justify-between w-full'>
                <h3 className='text-left text-lg/9.5 text-[#0F172B] font-serif'>{heading}</h3>
                <div className='px-2.5 py-0.5 rounded-full bg-[#ADB37D] flex items-center justify-center '>
                    <span className=' text-white text-xs/4 font-semibold'>{category}</span>
                </div>
            </div>
            <Divider className='my-2.5' />
            <p className='text-left text-sm/5.5 text-[#5F5F69]'>{desc}</p>
        </button>
    )
}

export default ActionPlanCard