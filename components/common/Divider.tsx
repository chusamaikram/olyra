import React from 'react'

const Divider = ({ className = "my-6" }: { className?: string }) => {
    return (
        <div className={`h-[1px] w-full bg-[#E3E3E3] ${className} `}></div>
    )
}

export default Divider