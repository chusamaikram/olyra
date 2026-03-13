import React from 'react'

export default function Progressbar({ totalSteps, completedSteps }: { totalSteps: number; completedSteps: number }) {

    const progress = (completedSteps / totalSteps) * 100
    return (
        <div className='my-6 w-full'>
            <div className='flex items-center justify-between w-full'>
                <span className='text-base/8 text-[#0F172B]'>Questionnaire progress</span>
                <span className='text-base/8 text-[#0F172B]'>{completedSteps}/{totalSteps}</span>
            </div>
            <div className='mt-2 h-4 w-full bg-[#BAE7CB] rounded-full relative'>
                <div className='absolute inset-0 h-4 rounded-full bg-[#1CA34E] transition-all duration-500 ease-out' style={{ width:`${progress}%` }} ></div>
            </div>


        </div>
    )
}

