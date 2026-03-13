"use client"
import StepperComponent from '@/components/common/StepperComponent'
import React, { useState } from 'react'

const Step4 = ({ onclick, onBack }: { onclick: () => void; onBack?: () => void }) => {
    const [answers, setAnswers] = useState<{ [key: string]: string }>({})

    const questions = [
        {
            id: 'q15',
            text: 'My work allows me to attend to personal or family matters or activities',
            category: 'Work schedule'
        },
        {
            id: 'q16',
            text: 'My work allows me to spend time with my family or close people',
            category: 'Work schedule'
        },
        {
            id: 'q17',
            text: 'My work allows me to rest for the time I need',
            category: 'Work schedule'
        },

    ]

    const handleAnswerChange = (questionId: string, value: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }))
    }

    return (
        <StepperComponent
            questions={questions}
            answers={answers}
            onclick={onclick}
            onBack={onBack}
            handleAnswerChange={handleAnswerChange}
        />
    )
}

export default Step4