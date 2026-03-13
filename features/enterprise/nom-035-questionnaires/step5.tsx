"use client"
import StepperComponent from '@/components/common/StepperComponent'
import React, { useState } from 'react'

const Step5 = ({ onComplete, onBack }: { onComplete?: () => void; onBack?: () => void }) => {
    const [answers, setAnswers] = useState<{ [key: string]: string }>({})

    const questions = [
        {
            id: 'q20',
            text: 'How often do you engage in physical activity each week?  ',
            category: 'Work relationships'
        },
        {
            id: 'q21',
            text: 'When I have problems at work I receive support from my coworkers',
            category: 'Work relationships'
        },
        {
            id: 'q22',
            text: 'My coworkers help me when I have difficulties',
            category: 'Work relationships'
        },
    ]


    const handleAnswerChange = (questionId: string, value: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }))
    }

    const handleSubmit = () => {
        // Handle final submission
        console.log('Final answers:', answers)
        onComplete?.()
    }

    return (
        <StepperComponent
            questions={questions}
            answers={answers}
            handleAnswerChange={handleAnswerChange}
            onclick={handleSubmit}
            onBack={onBack}
            btnText='Submit Questionnaires'
        />
    )
}

export default Step5