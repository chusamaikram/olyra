"use client"
import MainHeading from '@/components/common/MainHeading'
import SectionBox from '@/components/common/SectionBox'
import { Uploads } from '@/assets/CustomIcons'
import { useRouter } from 'next/navigation'

import ProfileBox from './ProfileBox'
import HealthProfile from './HealthProfile'
import QuestionnairesCard from '@/components/common/QuestionnairesCard'
import SecHeading from '@/components/common/SecHeading'
import Link from 'next/link'
import { ArrowUpRight, Info, SquareArrowRightEnter } from 'lucide-react'
import { useState } from 'react'
import Modal from '@/components/common/Model'
import Button from '@/components/common/Button'
import Disclaimer from '@/components/common/Disclaimer'

const ProfilePage = () => {
    const [logout, setLogout] = useState(false)

    const router = useRouter()
    const handleUploadsClick = () => {
        router.push('/profile/my-uploads') // Replace with your target route
    }

    return (
        <>
            <MainHeading
                mainHeading='My Profile'
                desc="Your health. Your data. Your life."
            />
            <SectionBox className="mt-6">
                <div className='flex flex-col items-start gap-6 '>
                    <ProfileBox />

                    <HealthProfile />

                    <QuestionnairesCard
                        title='My Uploads'
                        description='Manage your uploaded PDF files and view the extracted lab values'
                        icon={<Uploads />}
                        onclick={handleUploadsClick}
                    />

                    <div className='p-4 rounded-xl border border-[#E9EAEB] bg-white w-full'>
                        <SecHeading
                            Title='Account Settings'
                            desc='Manage your uploaded PDF files and view the extracted lab values'
                        />
                        <div className='mt-4 w-full'>
                            <label className='text-sm text-[#18181B] font-medium '>Language / Region</label>
                            <select className='mt-2 w-full px-3 py-2 rounded-md border border-[#E4E4E7] outline-none'>
                                <option value="English">English</option>
                                <option value="Espanol">Espanol</option>
                            </select>

                        </div>

                    </div>
                    <div className='p-4 rounded-xl border border-[#E9EAEB] bg-white w-full'>
                        <SecHeading
                            Title='About Olyra'
                        />
                        <div className='mt-4 w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-2.5'>
                            <Link href={'/privacy-notice'} className='px-2 py-3 flex items-center justify-between gap-2 bg-[#F5F5F5] rounded-md w-full' >
                                <Info size={16} color='#181D27' />
                                <p className='grow text-sm font-medium text-[#181D27] '>Privacy Notes</p>
                                <ArrowUpRight size={16} color='#181D27' />
                            </Link>
                            <Link href={'/terms-of-services'} className='px-2 py-3 flex items-center justify-between gap-2 bg-[#F5F5F5] rounded-md w-full' >
                                <Info size={16} color='#181D27' />
                                <p className='grow text-sm font-medium text-[#181D27] '>Terms  of services</p>
                                <ArrowUpRight size={16} color='#181D27' />
                            </Link>
                            <button onClick={() => setLogout(true)} className='px-2 py-3 bg-[#BE735B] rounded-md  flex items-center gap-2 justify-center w-full md:w-fit text-sm font-medium text-white'>
                                <SquareArrowRightEnter size={16} color='white' />
                                Logout
                            </button>
                        </div>
                    </div>

                </div>

                {logout && (
                    <Modal onClose={() => setLogout(false)} className='max-w-[512px]' >
                        <Modal.Header onClose={() => setLogout(false)} className='pb-2' >
                            <h3 className='text-lg text-[#18181B] font-serif'>Logout</h3>
                        </Modal.Header>
                        <Modal.Body>
                            <p className='mb-4 text-sm text-[#71717A]'>Are you sure want to logout?</p>

                        </Modal.Body>
                        <Modal.Footer>
                            <button onClick={() => setLogout(false)} className='border border-[#E4E4E7] text-[#18181B] px-4 py-2 rounded-md'>
                                Cancel
                            </button>
                            <Button variant='primary' type='button' onClick={() => setLogout(false)}  >
                                Yes, Logout
                            </Button>
                        </Modal.Footer>

                    </Modal>
                )}


            </SectionBox>
            <Disclaimer />
        </>
    )
}

export default ProfilePage