"use client"
import QuestionnairesCard from '@/components/common/QuestionnairesCard'
import { useState } from 'react'
import { Vaccine } from '@/assets/CustomIcons'
import Modal from '@/components/common/Model'
import Divider from '@/components/common/Divider'
import Button from '@/components/common/Button'


const VaccineCard = () => {
    const [vaccineModal, setVaccineModal] = useState(false)
    const [vaccines, setVaccines] = useState([
        { id: 1, name: 'COVID-19', description: 'Every year or per latest schedule', checked: false },
        { id: 2, name: 'Influenza (Flu)', description: 'Yearly, starting at 6 months', checked: false },
        { id: 3, name: 'Tdap/Td', description: 'Once, then every 10 years', checked: false },
        { id: 4, name: 'MMR (Measles, Mumps, Rubella)', description: '2 doses in childhood; verify immunity in adults', checked: false },
        { id: 5, name: 'HPV', description: 'Ages 9-26 (up to 45 in some cases)', checked: false },
        { id: 6, name: 'Hepatitis B', description: 'Childhood series; adults per risk', checked: false }
    ])
    const [tempVaccines, setTempVaccines] = useState(vaccines)

    const totalCount = vaccines.length
    const completedCount = vaccines.filter(v => v.checked).length

    const handleVaccineChange = (id: number) => {
        setTempVaccines(prev => prev.map(v =>
            v.id === id ? { ...v, checked: !v.checked } : v
        ))
    }

    const handleSave = () => {
        setVaccines(tempVaccines)
        setVaccineModal(false)
    }

    const handleCancel = () => {
        setTempVaccines(vaccines)
        setVaccineModal(false)
    }

    const handleModalOpen = () => {
        setTempVaccines(vaccines)
        setVaccineModal(true)
    }

    return (
        <>
            <QuestionnairesCard
                icon={<Vaccine />}
                title='Vaccine'
                description='Checklist of recommended vaccines and boosters'
                hasStatus
                totalCount={totalCount}
                completedCount={completedCount}
                onclick={handleModalOpen}
            />

            {vaccineModal && (
                <Modal onClose={handleCancel}>
                    <Modal.Header onClose={handleCancel}>
                        <h3 className='text-xl text-[#1E1E23] font-serif'>Vaccine</h3>

                    </Modal.Header>
                    <Modal.Body>
                        <div className='space-y-4 w-full'>
                            {tempVaccines.slice(0, 3).map((vaccine) => (
                                <div key={vaccine.id} className='p-3 rounded-lg border border-[#E9EAEB] flex items-start gap-2.5 w-full'>
                                    <input
                                        type='checkbox'
                                        checked={vaccine.checked}
                                        onChange={() => handleVaccineChange(vaccine.id)}
                                        className='h-4 w-4 outline-[#ACAFBB] mt-2.5'
                                    />
                                    <div className='flex flex-col items-start gap-1.25 w-full'>
                                        <h4 className='text-lg/9.5 text-[#0F172B] font-serif'>{vaccine.name}</h4>
                                        <div className='h-[1px] w-full bg-[#E3E3E3]'></div>
                                        <p className='text-sm/5.5 text-[#5F5F69]'>{vaccine.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Divider />
                        <div className='space-y-4 w-full'>
                            {tempVaccines.slice(3, tempVaccines.length).map((vaccine) => (
                                <div key={vaccine.id} className='p-3 rounded-lg border border-[#E9EAEB] flex items-start gap-2.5 w-full '>
                                    <input
                                        type='checkbox'
                                        checked={vaccine.checked}
                                        onChange={() => handleVaccineChange(vaccine.id)}
                                        className='h-4 w-4 outline-[#ACAFBB] mt-2.5'
                                    />
                                    <div className='flex flex-col items-start gap-1.25 w-full'>
                                        <h4 className='text-lg/9.5 text-[#0F172B] font-serif'>{vaccine.name}</h4>
                                        <div className='h-[1px] w-full bg-[#E3E3E3]'></div>
                                        <p className='text-sm/5.5 text-[#5F5F69]'>{vaccine.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
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

        </>
    )
}

export default VaccineCard