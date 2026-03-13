"use client";
import BiomarkerTrendChart from '@/components/BiomarkerCard';
import Button from '@/components/common/Button'
import Modal from '@/components/common/Model';
import SecHeading from '@/components/common/SecHeading'
import SectionBox from '@/components/common/SectionBox'
import { useBiomarkers } from "@/hooks/useBiomarkers";
import { useState } from 'react';

function KeyBiomarkers() {

    const [markerModel, setMarkerModel] = useState<string | null>(null)

    const { biomarkers, error, loading } = useBiomarkers()
    if (loading) return <div>Loading biomarkers...</div>;
    if (error) return <div>Error: {error}</div>;

    const HomeMarkers = biomarkers.slice(0, 3);
    // const currentValue = HomeMarkers.find(card => card.title === markerModel)!.data[data.length - 1]?.value ?? null;

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'optimal': return 'bg-[#1CA34E]';
            case 'normal': return 'bg-[#D39D00]';
            case 'out of range': return 'bg-[#D12A2A]';
            case 'missing': return 'bg-gray-500';
            default: return 'bg-gray-500';
        }
    };


    return (
        <SectionBox className='mt-6' >
            <div className='flex items-center justify-between mb-4'>
                <SecHeading Title='Key Biomarkers'
                    desc="Individual laboratory values with clinical reference ranges and recent trends."
                />
                <Button type='link' href='/health-insights' showArrow>
                    View More
                </Button>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-full' >
                {HomeMarkers.map((card) => (
                    <BiomarkerTrendChart
                        key={card.title}
                        title={card.title}
                        unit={card.unit}
                        data={card.data}
                        ranges={card.ranges}
                        onclick={() => setMarkerModel(card.title)}
                    />
                ))}
            </div>

            {markerModel && (() => {
                const selectedMarker = HomeMarkers.find(card => card.title === markerModel);
                if (!selectedMarker) return null;

                const currentValue = selectedMarker.data[selectedMarker.data.length - 1]?.value ?? null;

                return (
                    <Modal onClose={() => setMarkerModel(null)}>
                        <Modal.Header onClose={() => setMarkerModel(null)}>
                            <div className='flex items-center gap-1.5'>
                                <h4 className='text-xl font-serif text-[#1E1E23]'>{selectedMarker.title}</h4>
                                <span className={`flex px-2.5 py-0.5 capitalize items-center justify-center text-white text-xs/4 font-semibold rounded-full ${getStatusColor(selectedMarker.status)}`}>
                                    {selectedMarker.status}
                                </span>
                            </div>
                            <div className='mt-3 flex items-baseline font-serif'>
                                <span className='text-[48px]/12 text-[#252613]'>{currentValue}</span>
                                <span className='text-xl/12 text-[#252613]'> {selectedMarker.unit}</span>
                            </div>
                        </Modal.Header>
                        <Modal.Body>

                            <BiomarkerTrendChart
                                title={selectedMarker.title}
                                unit={selectedMarker.unit}
                                data={selectedMarker.data}
                                ranges={selectedMarker.ranges}
                                hideHeader
                                hideBorder
                            />
                            <div className='my-6 bg-[#E3E3E3] h-[1px] w-full'></div>
                            <div className='flex flex-col items-start gap-6'>
                                {selectedMarker.content?.map((item, index) => (
                                    <div key={index} className='flex flex-col gap-2 items-start'>
                                        <h5 className='text-sm/5 font-semibold text-[#1E1E23]'>{item.question}</h5>
                                        <p className='text-sm/5 text-[#5F5F69]'>{item.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>	
                    </Modal>
                );
            })()}




        </SectionBox>
    )
}

export default KeyBiomarkers
