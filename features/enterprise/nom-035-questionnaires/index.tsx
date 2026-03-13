"use client"
import MainHeading from '@/components/common/MainHeading'
import { ArrowLeft, MoveLeft } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import Progressbar from './progressbar'
import SectionBox from '@/components/common/SectionBox'
import Stepper from './stepper'
import Disclaimer from '@/components/common/Disclaimer'

const NomQuestionnaires = () => {
    const [activeStep, setActiveStep] = useState<number>(1)
    const [completedSteps, setCompletedSteps] = useState<number[]>([])
    const [submitModel, setSubmitModel] = useState(false)

    const steps = [
        {
            id: 1,
            text: "Work environment conditions",
        },
        {
            id: 2,
            text: "Workload",
        },
        {
            id: 3,
            text: "Lack of control over work",
        },
        {
            id: 4,
            text: "Work schedule",
        },
        {
            id: 5,
            text: "Work relationships",
        },
    ]

    const markStepAsCompleted = (stepNumber: number) => {
        if (!completedSteps.includes(stepNumber)) {
            setCompletedSteps(prev => [...prev, stepNumber])
        }
    }

    const goToNextStep = (currentStep: number) => {
        markStepAsCompleted(currentStep)
        setActiveStep(currentStep + 1)
    }

    const goToPreviousStep = () => {
        if (activeStep > 1) {
            // Remove the current step from completed steps when going back
            setCompletedSteps(prev => prev.filter(step => step !== activeStep))
            setActiveStep(activeStep - 1)
        }
    }

    const resetSurvey = () => {
        setActiveStep(1)
        setCompletedSteps([])
    }

    const handleFinalCompletion = () => {
        markStepAsCompleted(5)
        setSubmitModel(true)

    }
    return (
        <>
            <div className=' '>
                <div className='relative ms-7 md:ms-0 '>
                    <MainHeading
                        mainHeading='NOM-035 Questionnaire'
                        desc='Evaluation of psychosocial risk factors and organizational environment at work in accordance with NOM-035-STPS-2018'
                    />

                    <Link href={'/enterprise'} className='absolute top-2 -left-8' >
                        <ArrowLeft size={24} color='#484A54' />
                    </Link>

                </div>
                <Progressbar
                    totalSteps={5}
                    completedSteps={activeStep}
                />
            </div>
            <SectionBox className=''>
                <div className='p-6 rounded-xl border border-[#F3F3F5] bg-white shadow-[0_1px_12px_0_rgba(0,0,0,0.05)]'>
                    <Stepper
                        steps={steps}
                        activeStep={activeStep}
                        completedSteps={completedSteps}
                        goToNextStep={goToNextStep}
                        goToPreviousStep={goToPreviousStep}
                        resetSurvey={resetSurvey}
                        handleFinalCompletion={handleFinalCompletion}
                        submitModel={submitModel}
                        setSubmitModel={setSubmitModel}
                    />
                </div>
            </SectionBox>

            <Disclaimer
                desc='This questionnaire is a tool for identifying psychosocial risk factors in accordance with NOM-035-STPS-2018. Your responses are confidential and will be used solely for organizational diagnostic purposes.'

            />
        </>
    )
}

export default NomQuestionnaires