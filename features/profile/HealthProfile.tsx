"use client"
import QuestionnairesCard from '@/components/common/QuestionnairesCard'
import { useState } from 'react'
import { Heart } from "@/assets/CustomIcons"
import Modal from '@/components/common/Model'
import ModelInput from '@/components/common/ModelInput'
import Divider from '@/components/common/Divider'
import Button from '@/components/common/Button'


const HealthProfile = () => {
    const [HealthModel, setHealthModel] = useState(false)
    const [formData, setFormData] = useState({
        chronicIllness: '',
        medications: '',
        allergies: '',
        familyHistory: ''
    })

    const handleSave = () => {
        alert("saved")
        setFormData({
            chronicIllness: '',
            medications: '',
            allergies: '',
            familyHistory: ''
        })
        setHealthModel(false)
    }


    const handleCancel = () => {
        setHealthModel(false)
    }
    return (
        <>
            <QuestionnairesCard
                icon={<Heart />}
                title='My Health Profile'
                description='Chronic illnesses, medications, allergies, family history'
                onclick={() => setHealthModel(true)}
            />
            {HealthModel && (
                <Modal onClose={() => setHealthModel(false)}>
                    <Modal.Header onClose={() => setHealthModel(false)}>
                        <h3 className='text-xl/5 text-[#1E1E23] font-serif'>My health Profile</h3>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='space-y-6'>
                            <ModelInput
                                label='Chronis Illnesses'
                                type='text'
                                placeholder='Add Chronic Illness...'
                                value={formData.chronicIllness}
                                onChage={(e) => setFormData({ ...formData, chronicIllness: e.target.value })}
                            />
                            <ModelInput
                                label='Current Medications'
                                type='text'
                                placeholder='Add medication...'
                                value={formData.medications}
                                onChage={(e) => setFormData({ ...formData, medications: e.target.value })}
                            />
                            <ModelInput
                                label='Allergies'
                                type='text'
                                placeholder='Add Allergy...'
                                value={formData.allergies}
                                onChage={(e) => setFormData({ ...formData, allergies: e.target.value })}
                            />
                            <div>
                                <label className='text-sm font-medium text-[#18181B]'>Family History</label>
                                <textarea
                                    className='px-3 py-2 rounded-md border border-[#E4E4E7] w-full resize-none'
                                    placeholder='Describe family history...'
                                    rows={4}
                                    value={formData.familyHistory}
                                    onChange={(e) => setFormData({ ...formData, familyHistory: e.target.value })}
                                />
                            </div>
                            <Divider />
                        </div>

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

export default HealthProfile