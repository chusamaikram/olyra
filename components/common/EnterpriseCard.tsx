import { ArrowUpRight } from 'lucide-react';
import React from 'react'
import Divider from './Divider';
import Button from './Button';
import Link from 'next/link';

interface EnterpriseCardProps {
    icon: React.ReactNode;
    title: string;
    desc: string
    btnText: string
    path: string
}

export default function EnterpriseCard({ icon, title, desc, btnText, path }: EnterpriseCardProps) {
    return (
        <Link href={path} aria-label='enterprise cards ' className='p-6 rounded-xl border border-[#E9EAEB] bg-white  w-full hover:border-[#BE735B] transition-colors duration-300'>
            <div className='flex items-start gap-6 w-full'>
                <div className='flex flex-col items-start gap-3'>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center bg-[#E5E7D4]'>
                        {icon}
                    </div>
                    <h2 className='text-lg/6.25 font-medium text-[#1E1E23]'>{title}</h2>
                    <p className='text-sm/4.5 text-[#5F5F69]'>{desc}</p>
                </div>
                <ArrowUpRight size={24} color='#484A54' />
            </div>
            <Divider />
            <div className='flex items-start justify-start'>
                <Button variant='secondary' type='button'  showArrow >
                    {btnText}
                </Button>
            </div>

        </Link>
    )
}
