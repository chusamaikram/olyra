import React from 'react'
import Button from './Button'
import Divider from './Divider'

interface StepperProps {
    questions: { id: string; text: string }[]
    onclick: () => void
    onBack?: () => void
    handleAnswerChange: (questionId: string, value: string) => void
    answers: { [id: string]: string | undefined }
    btnText?: string
}

const StepperComponent = ({ questions, onclick, onBack, handleAnswerChange, answers, btnText = "Continue"
}: StepperProps) => {

    const options = [
        { value: 'always', label: 'Always', color: 'bg-green-100 text-green-800' },
        { value: 'almost_always', label: 'Almost always', color: 'bg-blue-100 text-blue-800' },
        { value: 'sometimes', label: 'Sometimes', color: 'bg-yellow-100 text-yellow-800' },
        { value: 'almost_never', label: 'Almost never', color: 'bg-orange-100 text-orange-800' },
        { value: 'never', label: 'Never', color: 'bg-red-100 text-red-800' }
    ]
    return (
        <>
            <div className='space-y-6 w-full'>
                {questions.map((question, index) => (
                    <div key={question.id} className=''>
                        <div className=''>
                            <span className='text-xl/9.5 font-medium text-[#0F172B]'>
                                Question{index + 1}
                            </span>
                            <h3 className='text-xl/9.5 text-[#626366]'>
                                {question.text}
                            </h3>
                        </div>
                        <Divider />

                        <div className='flex flex-col items-start gap-3 w-full'>
                            <span className='text-xl/9.5 font-medium text-[#0F172B]'>Options:</span>
                            {options.map((option) => (
                                <div key={option.value} className='p-3 rounded-md border border-[#E5E7EB] flex items-center gap-2.5 w-full'>
                                    <input
                                        type='radio'
                                        name={question.id}
                                        value={option.value}
                                        checked={answers[question.id] === option.value}
                                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                                        className='cursor-pointer'
                                    />
                                    <label className='text-sm/5.5 text-[#7D8796] cursor-pointer'>{option.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <Divider />
            <div className='flex items-center justify-between w-full'>
                {onBack && (
                    <Button variant='primary' type='button' className='bg-[#4F512D]!' onClick={onBack}>Back</Button>
                )}
                <div className={onBack ? '' : 'ml-auto'}>
                    <Button variant='primary' type='button'  onClick={onclick}>{btnText}</Button>
                </div>
            </div>
        </>
    )
}

export default StepperComponent