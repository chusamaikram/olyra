"use client"
import MainHeading from '@/components/common/MainHeading'
import SecHeading from '@/components/common/SecHeading'
import SectionBox from '@/components/common/SectionBox'
import HealthProfile from '../profile/HealthProfile'
import { useMarkerStore } from '@/store/markerstore'
import FunctionalMarkerCard from '@/components/FunctionalMarkerCard'
import { WeightIcon, HeightIcon, GripIcon, BloodPressure, Weist, Glucose, HeartRate, Wind, Depression, Anxiety, Exercise, Smoking, Alchohol, Sleep, Diet, Pain } from '@/assets/FunctionalMarkerIcons'
import { useState } from 'react'
import Modal from '@/components/common/Model'
import ModelInput from '@/components/common/ModelInput'
import Divider from '@/components/common/Divider'
import Button from '@/components/common/Button'
import Disclaimer from '@/components/common/Disclaimer'
import VaccineCard from './VaccineCard'

const QuestionnairesView = () => {

    const [markerModel, setMarkerModel] = useState<string | null>(null)
    const [inputValue, setInputValue] = useState<string>('')

    const { markers, updateMarker } = useMarkerStore()

    const iconMap: Record<string, React.ReactNode> = {
        height: <HeightIcon />,
        weight: <WeightIcon />,
        gripStrength: <GripIcon />,
        bloodPressure: <BloodPressure />,
        waist: <Weist />,
        glucose: <Glucose />,
        heartRate: <HeartRate />,
        vo2max: <Wind />,
        depression: <Depression />,
        anxiety: <Anxiety />,
        exercise: <Exercise />,
        wellbeing: <Depression />,
        smoking: <Smoking />,
        alcohol: <Alchohol />,
        sleep: <Sleep />,
        diet: <Diet />,
        pain: <Pain />
    }

    const functionalMarkers = markers.filter(marker => marker.category === 'functional')
    const lifestyleMarkers = markers.filter(marker => marker.category === 'lifestyle')

    const selectedMarker = markers.find((marker) => marker.id === markerModel);
    return (
        <>
            <MainHeading
                mainHeading='Questionnaires'
                desc='View different questionnaires about health.'
            />
            <SectionBox className='mt-6 '>
                <div className='space-y-4'>
                    <SecHeading
                        Title='My Health Profile'
                    />
                    <HealthProfile />
                    <VaccineCard />
                </div>
            </SectionBox>
            <SectionBox className='mt-6'>
                <SecHeading
                    Title='Functional Markers'
                />
                <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {functionalMarkers.map(marker => (
                        <FunctionalMarkerCard key={marker.id}
                            title={marker.title}
                            unit={marker.unit}
                            desc={marker.desc}
                            icon={iconMap[marker.id]}
                            value={marker.value}
                            showbutton
                            onClick={() => setMarkerModel(marker.id)}
                        />

                    ))}
                </div>
            </SectionBox>
            <SectionBox className='mt-6'>
                <SecHeading
                    Title='Lifestyle Markers'
                />
                <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {lifestyleMarkers.map(marker => (
                        <FunctionalMarkerCard key={marker.id}
                            title={marker.title}
                            unit={marker.unit}
                            desc={marker.desc}
                            icon={iconMap[marker.id]}
                            showbutton={false}
                        />

                    ))}
                </div>
            </SectionBox>
            <Disclaimer />

            {markerModel === selectedMarker?.id && (
                <Modal onClose={() => setMarkerModel(null)}>
                    <Modal.Header onClose={() => setMarkerModel(null)}>
                        <div className="flex items-center gap-1.5">
                            <div className="h-10 w-10 rounded-full bg-[#E5E7D4] flex items-center justify-center">
                                {iconMap[selectedMarker?.id]}
                            </div>
                            <h3 className="text-xl/ text-[#1E1E23] font-serif">{selectedMarker?.title}</h3>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <ModelInput
                            label={`Enter Your ${selectedMarker?.title}`}
                            type='number'
                            value={inputValue}
                            onChage={(e) => setInputValue(e.target.value)}
                            placeholder={selectedMarker?.value?.toString() || ''}
                            unit={`${selectedMarker?.title} should be in ${selectedMarker?.unit} `}
                        />
                        <Divider />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={() => {
                            setMarkerModel(null)
                        }}>
                            Cancel
                        </Button>
                        <Button variant='primary' onClick={() => {
                            if (selectedMarker && inputValue) {
                                updateMarker(selectedMarker.id, Number(inputValue))
                                setInputValue('')
                                setMarkerModel(null)
                            }
                        }}>
                            Save
                        </Button>

                    </Modal.Footer>

                </Modal>

            )}

        </>
    )
}

export default QuestionnairesView