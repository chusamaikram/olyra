"use client"
import React, { useState } from 'react'
import { Copy, Share2 } from 'lucide-react'
import StackedBarChart from '@/components/StackedChart';
import Modal from '@/components/common/Model';
import Link from 'next/link';


function HealthOverview() {

    const [openModal, setOpenModal] = useState<string | null>(null)

    const OverviewCard = [
        {
            score: "57",
            label: "Health score",
            desc: "Based on your recent biomarkers & health data",
            unit1: "Low",
            unit2: "Optimal",
            color: "linear-gradient(90deg, #D26464 0%, #E5E7EB 50%, #86BF9B 100%)",

        },
        {
            score: "49",
            label: "Biological Age",
            desc: "3.1 years younger than your chronological age",
            unit1: "Younger",
            unit2: "Older",
            color: "linear-gradient(90deg, #86BF9B 0%, #E5E7EB 50%, #D26464 100%)",
        },
    ]

    const SnapshotData = [
        { label: "Optimal", value: 18, color: "#16A34A" },     // green
        { label: "Normal", value: 12, color: "#D4A000" },      // yellow
        { label: "Out of Range", value: 5, color: "#DC2626" }, // red
        { label: "Missing", value: 3, color: "#6B7280" },      // gray
    ];
    return (
        <>
            <section className='mt-6  '>
                <div className='p-4 bg-[#F5F5F5] border border-[#E9EAEB] rounded-xl flex flex-col items-start gap-4'>
                    <div>
                        <h2 className='text-xl/6.5 font-semibold text-[#181D27] mb-[2px]'>Health Overview</h2>
                        <p className='text-sm/6 text-[#414651] '>An overall summary derived from your recent biomarkers and health indicators.</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-full'>
                        {OverviewCard.map((card) => (

                            <div onClick={() => setOpenModal(card.label)} key={card.label} className='cursor-pointer p-6 border border-[#E9EAEB] rounded-lg flex flex-col items-start gap-12.5 bg-white hover:border-[#BE735B] transition-colors duration-400'>
                                <div className='flex flex-col items-start w-full'>
                                    <div className='flex items-start justify-between w-full'>
                                        <div>
                                            <h3 className='text-[60px]/12 text-[#252613] font-serif mb-3 text-left'>{card.score}</h3>
                                            <span className='text-left text-lg/6.25 font-medium text-[#1E1E23]  '>{card.label}</span>
                                        </div>
                                        {card.label == "Biological Age" &&

                                            <button aria-label='share button' className='py-3 px-3.5 rounded-md flex items-center justify-center bg-[#4F512D]'>
                                                <Share2 size={12} color='white' />
                                            </button>
                                        }

                                    </div>
                                    <p className='text-left text-sm/5 text-[#5F5F69] mt-2'>{card.desc}</p>
                                </div>
                                <div className='flex flex-col items-start gap-1.5 w-full'>
                                    <div className='py-2 flex-1 w-full'>
                                        <div className='w-full h-2 rounded-full relative' style={{ background: `${card.color}` }}>
                                            <div className='absolute -top-2 bg-white px-2' style={{ left: `${card.score}%` }}>
                                                <span className='block bg-black h-6 w-0.5'></span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='flex items-center justify-between w-full'>
                                        <span className='text-xs/4 text-[#8C8C96]'>{card.unit1}</span>
                                        <span className='text-xs/4 text-[#8C8C96]'>{card.unit2}</span>
                                    </div>

                                </div>
                            </div>
                        ))}
                        <button onClick={() => setOpenModal('Health Snapshot')} className='p-6 border border-[#E9EAEB] rounded-lg flex flex-col items-start gap-6 bg-white hover:border-[#BE735B] transition-colors duration-400'>
                            <div className='flex flex-col items-start gap-3 w-full'>
                                <div>
                                    <h3 className='text-left text-lg/6 font-medium text-[#1E1E23]'>Health Snapshot</h3>
                                    <p className='text-left text-sm/5 text-[#5F5F69] mt-2'>Biomarker status overview</p>
                                </div>
                                <div className='w-full'>
                                    {/*chart here  */}
                                    <StackedBarChart data={SnapshotData}
                                        height={24}
                                        showLegend={false}
                                    />

                                </div>

                            </div>
                            <div className='bg-[#E3E3E3] h-[1px] w-full'></div>
                            <div className="grid grid-cols-2 gap-y-4 gap-x-4 w-full">
                                {SnapshotData.map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex items-center justify-between w-full"
                                    >
                                        <div className="flex items-center gap-2">
                                            <span
                                                className="w-4 h-4 rounded"
                                                style={{ backgroundColor: item.color }}
                                            />
                                            <span className="text-base text-[#5F5F69]">
                                                {item.label}
                                            </span>
                                        </div>

                                        <span className="text-lg font-medium text-[#1E1E23]">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </button>


                    </div>
                </div>

                {openModal === 'Health score' && (
                    <Modal onClose={() => setOpenModal(null)}>
                        <Modal.Header onClose={() => setOpenModal(null)}>
                            <h3 className='mb-1.5 text-xl text-[#1E1E23] font-serif'>Health Score</h3>
                            <p className='text-sm/5 text-[#5F5F69] '>health score based on your data</p>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='flex flex-col items-start gap-4 w-full'>
                                <div className='w-full'>
                                    <h3 className='text-[60px]/12 text-[#252613] font-serif mb-3 text-left'>{OverviewCard[0].score}</h3>
                                    <span className='text-left text-lg/6.25 font-medium text-[#1E1E23]  '>{OverviewCard[0].label}</span>
                                </div>
                                <div className='flex flex-col items-start gap-1.5 w-full'>
                                    <div className='py-2 flex-1 w-full'>
                                        <div className='w-full h-2 rounded-full relative' style={{ background: `${OverviewCard[0].color}` }}>
                                            <div className='absolute -top-2 bg-white px-2' style={{ left: `${OverviewCard[0].score}%` }}>
                                                <span className='block bg-black h-6 w-0.5'></span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='flex items-center justify-between w-full'>
                                        <span className='text-xs/4 text-[#8C8C96]'>{OverviewCard[0].unit1}</span>
                                        <span className='text-xs/4 text-[#8C8C96]'>{OverviewCard[0].unit2}</span>
                                    </div>

                                </div>

                            </div>
                            <div className='my-6 bg-[#E3E3E3] w-full h-[1px]'></div>
                            <p className='text-sm/5 text-[#5F5F69]'>Your Health Score is calculated based on your biomarkers. The more biomarkers you get tested, and the more are in optimal ranges, the higher your score will be. Keep tracking your health to improve your score!</p>

                        </Modal.Body>
                        <Modal.Footer>

                        </Modal.Footer>

                    </Modal>
                )}
                {openModal === 'Biological Age' && (
                    <Modal onClose={() => setOpenModal(null)}>
                        <Modal.Header onClose={() => setOpenModal(null)}>
                            <h3 className='mb-1.5 text-xl text-[#1E1E23] font-serif'>Biological Age</h3>
                            <p className='text-sm/5 text-[#5F5F69] '>Your biological age based on your data</p>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='flex flex-col items-start gap-4 w-full'>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='w-full'>
                                        <h3 className='text-[60px]/12 text-[#252613] font-serif mb-3 text-left'>{OverviewCard[1].score}</h3>
                                        <span className='text-left text-lg/6.25 font-medium text-[#1E1E23]  '>{OverviewCard[1].label}</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <h3 className='text-[60px]/12 text-[#1CA34E] font-serif mb-3 text-left'>3.1</h3>
                                        <span className='text-left text-lg/6.25 font-medium text-[#1CA34E] whitespace-nowrap '>Years Younger</span>
                                    </div>

                                </div>
                                <div className='flex flex-col items-start gap-1.5 w-full'>
                                    <div className='py-2 flex-1 w-full'>
                                        <div className='w-full h-2 rounded-full relative' style={{ background: `${OverviewCard[1].color}` }}>
                                            <div className='absolute -top-2 bg-white px-2' style={{ left: `${OverviewCard[1].score}%` }}>
                                                <span className='block bg-black h-6 w-0.5'></span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='flex items-center justify-between w-full'>
                                        <span className='text-xs/4 text-[#8C8C96]'>{OverviewCard[1].unit1}</span>
                                        <span className='text-xs/4 text-[#8C8C96]'>{OverviewCard[1].unit2}</span>
                                    </div>

                                </div>

                            </div>
                            <div className='my-6 bg-[#E3E3E3] w-full h-[1px]'></div>
                            <p className='text-sm/5 text-[#5F5F69]'>Your Biological Age is estimated using an algorithm that predicts biological age based on circulating blood biomarkers. This provides an indicator of how your body is aging compared to your calendar age.</p>
                            <div className='mt-6 p-3 rounded-xl border border-[#E5E7EB]'>
                                <p className='text-sm/6.5 text-[rgba(95,95,105,0.80)]'>Bortz, Jordan, Andrea Guariglia, Lucija Klaric, David Tang, Peter Ward, Michael Geer, Marc Chadeau-Hyam, Dragana Vuckovic, and Peter K. Joshi. "Biological age estimation using circulating blood biomarkers." Communications Biology 6, no. 1 (2023): 1089.</p>
                                <Link href="doi.org/10.1038/s42003-023-05456-z" target='blank' className='mt-2.5 text-sm/6/5 text-[#007AFF] underline'>doi.org/10.1038/s42003-023-05456-z</Link>
                            </div>

                        </Modal.Body>
                        <Modal.Footer>
                            <button className='px-4 py-2 bg-[#BE735B] rounded-md flex items-center gap-2'>
                                <Share2 size={12} color='white' />
                                <span className='text-sm/5 font-medium text-white'>Share</span>
                            </button>
                            <button className='px-4 py-2 border border-[#BE735B] rounded-md flex items-center '>
                                <Copy size={16} color='#BE735B' />
                            </button>


                        </Modal.Footer>

                    </Modal>
                )}

                {openModal === 'Health Snapshot' && (
                    <Modal onClose={() => setOpenModal(null)}>
                        <Modal.Header onClose={() => setOpenModal(null)}>
                            <h3 className='mb-1.5 text-xl text-[#1E1E23] font-serif'>Health Snapshot</h3>
                            <p className='text-sm/5 text-[#5F5F69] '>Biomarker status overview</p>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='flex flex-col items-start gap-4 w-full'>
                                <StackedBarChart data={SnapshotData} height={24} showLegend={false} />
                                <div className="grid grid-cols-4 gap-8 w-full">
                                    {SnapshotData.map((item) => (
                                        <div key={item.label} className="flex items-center justify-between w-full">
                                            <div className="flex items-center gap-2">
                                                <span className="w-4 h-4 rounded" style={{ backgroundColor: item.color }} />
                                                <span className="text-base text-[#5F5F69]">{item.label}</span>
                                            </div>
                                            <span className="text-lg font-medium text-[#1E1E23]">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='my-6 bg-[#E3E3E3] w-full h-[1px]'></div>
                            <p className='text-sm/5 text-[#5F5F69]'>This snapshot shows the distribution of your biomarkers across different health ranges.</p>

                        </Modal.Body>
                          <Modal.Footer>
                            
                        </Modal.Footer>

                    </Modal>
                )}


            </section>

        </>
    )
}

export default HealthOverview
