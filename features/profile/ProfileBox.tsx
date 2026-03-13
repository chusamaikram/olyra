"use client"
import Image from 'next/image'
import Avatar from "@/assets/images/Avatar.png"
import { Mail, SquarePen } from 'lucide-react'
import { useState } from 'react'
import ModelInput from '@/components/common/ModelInput'
import Modal from '@/components/common/Model'
import Divider from '@/components/common/Divider'
import Button from '@/components/common/Button'

const ProfileBox = () => {
    const [isEdit, setIsEdit] = useState(false)
    const [name, setName] = useState('Diego Castellon')
    const [email, setEmail] = useState('Afridi.100@gmail.com')
    const [tempName, setTempName] = useState('')
    const [tempEmail, setTempEmail] = useState('')

    const handleEdit = () => {
        setTempName(name)
        setTempEmail(email)
        setIsEdit(true)
    }

    const handleSave = () => {
        setName(tempName)
        setEmail(tempEmail)
        setIsEdit(false)
    }

    const handleCancel = () => {
        setIsEdit(false)
    }

    return (
        <div className='p-4 rounded-xl bg-white border border-[#E9EAEB] flex flex-col items-start gap-4 w-full '>
            <div className='flex items-start md:items-center justify-between w-full'>
                <div className='flex flex-col md:flex-row items-start md:items-center gap-4'>
                    <div className='w-15 h-15 rounded-full overflow-hidden'>
                        <Image src={Avatar} alt='avatar ' height={60} width={60} className='w-full h-full object-cover' />
                    </div>
                    <div className='flex flex-col items-start gap-0.5'>
                        <h2 className='text-xl/6.5 font-semibold text-[#181D27]' >{name}</h2>
                        <div className='flex items-center gap-2'>
                            <Mail size={20} color='#484A54' />
                            <p className='text-[#414651] text-sm/6 '>{email}</p>
                        </div>
                    </div>

                </div>
                <button
                    onClick={handleEdit}
                    className='px-4 py-2 rounded-md flex items-center gap-2 bg-[#BE735B]'>
                    <SquarePen size={16} color='white' />
                    <span className='text-white text-sm/5 font-medium'>Edit</span>
                </button>

            </div>
 
            <div className='flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:ps-19'>
                <div className='flex flex-col items-start gap-2 w-full '>
                    <label className='text-sm font-medium text-[#18181B]'>Birthdate</label>
                    <input
                        type='number'
                        className='px-3 py-2 rounded-md border border-[#E4E4E7] bg-white w-full text-sm/5 text-[#71717A] outline-none'
                        value={'11-05-1999'}
                        placeholder='11-05-1999'
                        readOnly
                    />
                </div>
                <div className='flex flex-col items-start gap-2 w-full'>
                    <label className='text-sm font-medium text-[#18181B]'>Phone no</label>
                    <input
                        type='number'
                        className='px-3 py-2 rounded-md border border-[#E4E4E7] bg-white w-full text-sm/5 text-[#71717A] outline-none'
                        value={'+35 48090684'}
                        placeholder='+35 48090684'
                        readOnly
                    />
                </div>

            </div>

            {isEdit && (
                <Modal onClose={handleCancel}>
                    <Modal.Header onClose={handleCancel}>
                        <h3 className='text-xl/5 text-[#1E1E23]'>Edit Profile</h3>
                    </Modal.Header>
                    <Modal.Body>
                        <ModelInput
                            label='Full Name'
                            type='text'
                            value={tempName}
                            placeholder={name}
                            onChage={(e) => setTempName(e.target.value)}
                        />
                        <ModelInput
                            label='Email Address'
                            type='email'
                            value={tempEmail}
                            placeholder={email}
                            onChage={(e) => setTempEmail(e.target.value)}
                        />
                        <Divider />
                    </Modal.Body>
                    <Modal.Footer>
                        <div className='flex items-center justify-end gap-2'>
                            <Button variant='secondary' type='button' onClick={handleCancel} >
                                Cancel
                            </Button>
                            <Button variant='primary' type='button' onClick={handleSave} >
                                Save
                            </Button>
                        </div>
                    </Modal.Footer>


                </Modal>
            )}
        </div>
    )
}

export default ProfileBox