import React from 'react'

interface SecHeadingProps {
    Title: string,
    desc?: string
}

const SecHeading = ({ Title, desc }: SecHeadingProps) => {
    return (
        <div>
            <h2 className='text-xl/6.5 text-[#181D27] font-semibold '>{Title}</h2>
            <p className='text-sm/6 text-[#414651] mt-0.5 whitespace-nowrap'>{desc}</p>

        </div>
    )
}

export default SecHeading
