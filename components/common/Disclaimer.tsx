import React from 'react'

interface DisclaimerProps {
    title?: string,
    desc?: string
}

const Disclaimer = ({
    title = "Notice:",
    desc = "This app does not provide medical advice, does not replace a doctor, and you should always contact a healthcare professional for medical concerns."
}: DisclaimerProps) => {
    return (
        <div className='w-full pt-6 pb-18 lg:pt-0 lg:pb-0'>
            <div className='mt-6 p-3 rounded-xl bg-[#FDF7E6] border border-[#805F00] flex items-start gap-2.5 w-full'>
                <p className='text-lg/7 text-[#805F00] font-serif'>{title}</p>
                <p className='text-sm/6.75 text-[#805F00]'>{desc}</p>
            </div>
        </div>
    )
}

export default Disclaimer