import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

type ButtonProps = {
    children: React.ReactNode
    variant?: 'primary' | 'secondary'
    type?: 'button' | 'submit' | 'link'
    showArrow?: boolean
    href?: string
    onClick?: () => void
    className?: string
}

const Button = ({ 
    children, 
    variant = 'primary', 
    type = 'button', 
    showArrow = false, 
    href, 
    onClick,
    className = ''
}: ButtonProps) => {
    const baseStyles = 'px-4 py-2 rounded-md flex items-center justify-center gap-2 text-sm/5 font-medium'
    const variantStyles = variant === 'primary' 
        ? 'bg-[#BE735B] text-white' 
        : 'bg-white text-[#BE735B] border border-[#BE735B]'
    
    const combinedStyles = `${baseStyles} ${variantStyles} ${className}`

    if (type === 'link' && href) {
        return (
            <Link href={href} className={combinedStyles}>
                <span>{children}</span>
                {showArrow && <ArrowUpRight size={16} />}
            </Link>
        )
    }

    return (
        <button 
            type={type === 'submit' ? 'submit' : 'button'} 
            onClick={onClick}
            className={combinedStyles}
        >
            <span>{children}</span>
            {showArrow && <ArrowUpRight size={16} />}
        </button>
    )
}

export default Button
