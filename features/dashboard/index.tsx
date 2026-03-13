import React from 'react'
import { UploadIcon } from '@/assets/CustomIcons'
import HealthOverview from './HealthOverview'
import KeyBiomarkers from './KeyBiomarkers'
import SectionBox from '@/components/common/SectionBox'
import SecHeading from '@/components/common/SecHeading'
import FunctionalMarkers from './FunctionalMarkers'
import ActionPlan from './ActionPlan'
import Link from 'next/link'
import { WhtspIcon } from '@/assets/CustomIcons'
import { MessageCircleMore } from 'lucide-react'
import Crausel from './Crausel'
import Disclaimer from '@/components/common/Disclaimer'

const Dashboard = () => {
    return (
        <>
            <div className='flex items-center justify-between w-full py-2'>
                <div className='flex flex-col items-start gap-1'>
                    <h1 className='text-4xl/9.5 text-[#181D27] font-serif '>Welcome, Diego</h1>
                    <p className='text-sm/6 text-[#535862] '>Your health. Your data. Your life.</p>
                </div>
                <div className='py-2 px-4 rounded-md bg-[#BE735B] flex items-center gap-2 relative h-10'>
                    <UploadIcon />
                    <span className='text-sm/5 font-medium text-white'>Upload Lab Results</span>
                    <input
                        type='file'
                        accept='.pdf,.doc,.docx,.txt'
                        className='absolute inset-0 opacity-0'
                    />
                </div>

            </div>
            <HealthOverview />
            <KeyBiomarkers />

            <SectionBox className="mt-6">
                <SecHeading
                    Title="Specialists Notes"
                    desc="Expert interpretation of recent health metrics and lab data."
                />
                <div className="mt-4 p-6 rounded-lg bg-white border border-[#E9EAEB] flex flex-col items-start gap-[23px] w-full">
                    <div>
                        <h3 className="text-lg/7 text-black font-serif mb-2">Lipid Panel Interpretation</h3>
                        <p className="text-base/6.5 text-[rgba(95,95,105,0.80)]">Your LDL cholesterol reading of 142 mg/dL falls into the borderline high category. While not critically elevated, this level is associated with increased cardiovascular risk. Dietary modifications emphasizing soluble fiber, omega-3 fatty acids, and reduced saturated fat intake may help lower LDL levels naturally. Consider a follow-up lipid panel in 3 months to assess response to lifestyle interventions.</p>
                    </div>
                    <div>
                        <h3 className="text-lg/7 text-black font-serif mb-2">Glucose Metabolism</h3>
                        <p className="text-base/6.5 text-[rgba(95,95,105,0.80)]">Your HbA1C of 5.8% indicates prediabetes range. This is an important early indicator that requires attention to prevent progression to type 2 diabetes. Focus on low glycemic index foods, regular physical activity, and stress management. Fasting glucose and insulin resistance markers (HOMA-IR) would provide additional metabolic clarity.</p>
                    </div>
                    <div className="w-full h-[1px] bg-[#E3E3E3]"></div>
                    <div>
                        <h3 className="text-lg/7 text-black font-serif mb-2">Medical Disclaimer:</h3>
                        <div className="p-3 rounded-xl border border-[#E5E7EB]">
                            <p className="text-base/6.5 text-[rgba(95,95,105,0.80)]">This information is for educational purposes only and does not constitute medical advice. Always consult with a qualified healthcare provider before making decisions about your health or treatment.</p>
                        </div>
                        <p className="mt-2 text-sm/6.5 text-[#5F5F69]">Reviewed by Olyra Intelligence • Last updated: October 15, 2025</p>

                    </div>

                </div>



            </SectionBox>

            <FunctionalMarkers />
            <ActionPlan />

            <SectionBox className='my-6'>
                <div className='flex items-center justify-between w-full'>
                    <SecHeading
                        Title='Help Centre'
                        desc="Ask Questions, clear doubts or get guidance, with expert available 24/7"
                    />
                    <div className='w-full flex items-center justify-end gap-4'>
                        <Link href="" target='blank' className='px-4 py-2 rounded-md bg-[#BE735B] text-sm/5 font-medium text-white flex items-center gap-2'>
                            Chat with a specialist
                            <WhtspIcon />
                        </Link>
                        <Link href="/chatbot" className='px-4 py-2 rounded-md bg-[#4F512D] text-sm/5 font-medium text-white flex items-center gap-2'>
                            Chat with Olyra Intelligence
                            <MessageCircleMore size={16} color='white' />
                        </Link>
                    </div>
                </div>

            </SectionBox>

            <Crausel />
            <Disclaimer />


        </>
    )
}

export default Dashboard
