import React, { Children } from 'react'

interface SectionProps {
    children: React.ReactNode
    className?: string
}

function SectionBox({ className = "", children }: SectionProps) {
    return (
        <section className={`${className} `}>
            <div className='p-4 rounded-xl bg-[#F5F5F5] border border-[#E9EAEB]'>
                {children}

            </div>

        </section>
    )
}

export default SectionBox
