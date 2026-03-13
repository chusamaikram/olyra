"use client"
import StepperComponent from '@/components/common/StepperComponent'
import React, { useState } from 'react'

const Step3 = ({ onclick, onBack }: { onclick: () => void; onBack?: () => void }) => {
    const [answers, setAnswers] = useState<{ [key: string]: string }>({})

    const questions = [
        {
            id: 'q10',
            text: 'In my work I can develop new skills',
            category: 'Lack of control over work'
        },
        {
            id: 'q11',
            text: 'In my work I can aspire to a better position',
            category: 'Lack of control over work'
        },
        {
            id: 'q12',
            text: 'During my workday I can take breaks when I need them',
            category: 'Lack of control over work'
        },
    ]


    const handleAnswerChange = (questionId: string, value: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }))
    }

    return (
        <StepperComponent
            questions={questions}
            onclick={onclick}
            onBack={onBack}
            handleAnswerChange={handleAnswerChange}
            answers={answers}
        />
    )
}

export default Step3