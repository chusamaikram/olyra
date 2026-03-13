"use client"
import StepperComponent from '@/components/common/StepperComponent'
import React, { useState } from 'react'

const Step1 = ({ onclick }: { onclick: () => void }) => {
    const [answers, setAnswers] = useState<{ [key: string]: string }>({})

    const questions = [
        {
            id: 'q1',
            text: 'In my work I can express my opinions without fear of reprisals',
            category: 'Work environment conditions'
        },
        {
            id: 'q2',
            text: 'When I have problems at work I receive support from my coworkers',
            category: 'Work environment conditions'
        },
        {
            id: 'q3',
            text: 'My coworkers help me when I have difficulties',
            category: 'Work environment conditions'
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
        />


    )
}

export default Step1