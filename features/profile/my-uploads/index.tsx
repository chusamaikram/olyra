"use client"
import { UploadIcon } from '@/assets/CustomIcons'
import ReportCard from '@/components/ReportCard'
import Disclaimer from '@/components/common/Disclaimer'
import MainHeading from '@/components/common/MainHeading'
import SecHeading from '@/components/common/SecHeading'
import SectionBox from '@/components/common/SectionBox'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'


const MyUploadsView = () => {
    const [labsData, setLabsData] = useState([])
    const [openIndex, setOpenIndex] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/lab-data.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                // Extract reports from the nested structure
                setLabsData(result[0].reports);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])
    return (
        <>
            <div className='relative ms-7 md:ms-0 '>
                <MainHeading
                    mainHeading='My Uploads'
                    desc="Manage your uploaded PDF files and view extracted lab values"
                />
                <Link href={'/enterprise'} className='absolute top-2 -left-8' >
                    <ArrowLeft size={24} color='#484A54' />
                </Link>

            </div>
            <SectionBox className='my-6'>
                <div className='p-4 rouunded-xl bg-white border border-[#E9EAEB] flex items-center justify-between w-full'>
                    <h2 className='text-xl/6.5 font-semibold text-[#181D27]'>Upload New PDF</h2>
                    <button className='p-2 rounded-md border border-[#BE735B] flex items-center gap-2 relative'>
                        <UploadIcon stroke='#BE735B' />
                        <span className='text-[#BE735B] text-sm font-medium'>Upload</span>
                        <input type='file'
                            accept='.pdf'
                            className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                        />
                    </button>
                </div>
            </SectionBox>
            <SectionBox >
                <SecHeading
                    Title='Uploaded PDF’s'
                    desc='Below are the PDF’s that are uploaded'
                />
                <div className='mt-4 space-y-4'>
                    {labsData.map((data, index) => (
                        <ReportCard 
                            key={index} 
                            labelsdata={data} 
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>

            </SectionBox>

            <Disclaimer />
        </>
    )
}

export default MyUploadsView