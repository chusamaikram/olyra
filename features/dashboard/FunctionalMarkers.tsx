"use client"
import Button from '@/components/common/Button'
import SecHeading from '@/components/common/SecHeading'
import SectionBox from '@/components/common/SectionBox'
import React, { useState } from 'react'
import { WeightIcon, BloodPressure, Weist, Glucose, HeightIcon, GripIcon } from '@/assets/FunctionalMarkerIcons'
import FunctionalMarkerCard from '@/components/FunctionalMarkerCard'
import Modal from '@/components/common/Model'
import ModelInput from '@/components/common/ModelInput'
import Divider from '@/components/common/Divider'
import { useMarkerStore } from '@/store/markerstore'

export default function FunctionalMarkersSection() {

    const [selectedMarker, setSelectedMarker] = useState<string | null>(null)
    const [inputValue, setInputValue] = useState<string>('')
    const [showModel, setShowModel] = useState(false)


    const { markers, updateMarker } = useMarkerStore()
    const functionalMarkers = markers.filter(
        (m) => m.category === "functional"
    )

    const HomeMarkers = functionalMarkers.slice(0, 6)


    const iconMap: Record<string, React.ReactNode> = {
        height: <HeightIcon />,
        weight: <WeightIcon />,
        gripStrength: <GripIcon />,
        bloodPressure: <BloodPressure />,
        glucose: <Glucose />,
        waist: <Weist />,
    }


    const selectedMarkerData = HomeMarkers.find((marker) => marker.id === selectedMarker);

    return (
        <SectionBox className='mt-6'>
            <div className='flex items-center justify-between w-full'>
                <SecHeading Title='Functional Markers'
                    desc="Recent functional health measurements."
                />
                <Button type='link' href='/questionnaires' showArrow>
                    View More
                </Button>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {HomeMarkers.map((item) => (
                    <FunctionalMarkerCard
                        onClick={() => {
                            setSelectedMarker(item.id)
                            setShowModel(true)
                        }
                        }
                        key={item.id}
                        title={item.title}
                        value={item.value}
                        unit={item.unit}
                        desc={item.desc}
                        icon={iconMap[item.id]}
                        showbutton
                    />
                ))}


            </div>

            {showModel && selectedMarker == selectedMarkerData?.id && (
                <Modal onClose={() => { setShowModel(false), setSelectedMarker(null) }}>
                    <Modal.Header onClose={() => {
                        setShowModel(false); setSelectedMarker(null)
                    }}>
                        <div className="flex items-center gap-1.5">
                            <div className="h-10 w-10 rounded-full bg-[#E5E7D4] flex items-center justify-center">
                                {iconMap[selectedMarker]}
                            </div>
                            <h3 className="text-xl/ text-[#1E1E23] font-serif">{selectedMarkerData?.title}</h3>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <ModelInput
                            label={`Enter Your ${selectedMarkerData?.title}`}
                            type='number'
                            placeholder={selectedMarkerData?.value?.toString() || ''}
                            value={inputValue}
                            onChage={(e) => setInputValue(e.target.value)}
                            unit={`${selectedMarkerData?.title} should be in ${selectedMarkerData?.unit} `}
                        />
                        <Divider />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={() => {
                            setShowModel(false), setSelectedMarker(null)
                        }}>
                            Cancel
                        </Button>
                        <Button variant='primary' onClick={() => {
                            if (selectedMarkerData && inputValue) {
                                updateMarker(selectedMarkerData.id, Number(inputValue))
                                setInputValue('')
                                setShowModel(false)
                                setSelectedMarker(null)
                            }
                        }}>
                            Save
                        </Button>

                    </Modal.Footer>


                </Modal>
            )}



        </SectionBox>
    )
}

