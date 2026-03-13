"use client"
import StepperComponent from '@/components/common/StepperComponent'
import React, { useState } from 'react'

const Step2 = ({ onclick, onBack }: { onclick: () => void; onBack?: () => void }) => {
    const [answers, setAnswers] = useState<{ [key: string]: string }>({})

    const questions = [
        {
            id: 'q5',
            text: 'My work requires me to make a lot of physical effort',
            category: 'Workload'
        },
        {
            id: 'q6',
            text: 'I worry about suffering an accident at my work',
            category: 'Workload'
        },
        {
            id: 'q7',
            text: 'I consider that the activities I perform are dangerous',
            category: 'Workload'
        },
    ]

    const handleAnswerChange = (questionId: string, value: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }))
    }

    return (
        <StepperComponent
            questions={questions}
            answers={answers}
            handleAnswerChange={handleAnswerChange}
            onclick={onclick}
            onBack={onBack}
        />
    )
}

export default Step2