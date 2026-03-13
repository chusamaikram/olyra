import React from 'react'

const MainHeading = ({ mainHeading, desc }: { mainHeading: string, desc: string }) => {
    return (
        <>
            <h1 className='text-4xl/9.5 text-[#181D27] font-serif' >{mainHeading}</h1>
            <p className='text-sm/6 text-[#535862] '>{desc}</p>
        </>
    )
}

export default MainHeading