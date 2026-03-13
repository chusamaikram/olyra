"use client"
import React from 'react'
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import Step4 from './step4'
import Step5 from './step5'
import Modal from '@/components/common/Model'
import Button from '@/components/common/Button'

interface StepperProps {
    steps: { id: number; text: string }[]
    activeStep: number
    completedSteps: number[]
    goToNextStep: (currentStep: number) => void
    goToPreviousStep: () => void
    resetSurvey: () => void
    handleFinalCompletion: () => void
    submitModel: boolean
    setSubmitModel: React.Dispatch<React.SetStateAction<boolean>>
}

const Stepper = ({ steps, activeStep, completedSteps, goToNextStep, goToPreviousStep, resetSurvey, handleFinalCompletion, submitModel, setSubmitModel }: StepperProps) => {

    const getStepStyles = (stepId: number) => {
        if (completedSteps.includes(stepId)) {
            // Completed state
            return {
                circle: "border-[#BE735B] bg-[#BE735B]",
                text: "text-[#BE735B]",
                number: "text-white"
            }
        } else if (stepId === activeStep) {
            // Active state
            return {
                circle: "border-[#BE735B] bg-white",
                text: "text-[#BE735B]",
                number: "text-[#BE735B]"
            }
        } else {
            // Normal state
            return {
                circle: "border-[#C6C8D0] bg-white",
                text: "text-[#CECFD2]",
                number: "text-[#CECFD2]"
            }
        }
    }

    return (
        <div className='w-full flex flex-col items-start'>
            <div className='flex items-center justify-between w-full '>
                <div className='flex items-center gap-2'>
                    <span className='h-5 w-1 bg-[#BE735B] block'></span>
                    <span className='text-sm font-medium uppercase text-[#314158]'>Lifestyle Questionnaire</span>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-xs/4 font-semibold text-white ${steps.length === completedSteps.length ? "bg-[#1CA34E]" : "bg-[#002850]"}`}>{steps.length === completedSteps.length ? "Completed" : "In progress"}</span>
            </div>
            <div className=' py-4 flex items-start justify-between lg:gap-1.25 w-full'>
                {steps.map((step) => (
                    <React.Fragment key={step.id}>
                        <div className=' flex flex-col items-center gap-2' >
                            <div className={` w-10 h-10 rounded-full flex items-center justify-center border-2 ${getStepStyles(step.id).circle}`}>
                                <span className={`text-base/6 font-medium ${getStepStyles(step.id).number}`}>0{step.id}</span>
                            </div>
                            <span className={`max-w-[123px] hidden lg:block text-center text-sm/5 ${getStepStyles(step.id).text}`}>{step.text}</span>
                        </div>
                        {step.id < steps.length && (
                            <span className={`w-12.5 lg:w-18 h-5 block border-b border-dashed ${completedSteps.includes(step.id) ? "border-[#BE735B]" : "border-[#C6C8D0]"}`}></span>
                        )}
                    </React.Fragment>
                ))}

            </div>
            {activeStep === 1 && <Step1 onclick={() => goToNextStep(1)} />}
            {activeStep === 2 && <Step2 onclick={() => goToNextStep(2)} onBack={goToPreviousStep} />}
            {activeStep === 3 && <Step3 onclick={() => goToNextStep(3)} onBack={goToPreviousStep} />}
            {activeStep === 4 && <Step4 onclick={() => goToNextStep(4)} onBack={goToPreviousStep} />}
            {activeStep === 5 && <Step5 onComplete={handleFinalCompletion} onBack={goToPreviousStep} />}

            {submitModel && (
                <div onClick={() => setSubmitModel(false)} className='fixed inset-0 bg-black/50 z-999 flex items-center justify-center '>
                    <div className='relative mx-auto  w-[512px] bg-white p-6 rounded-lg border border-[#E4E4E7] flex flex-col items-center gap-3'>
                        <span className='block'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
                                <path d="M65.7722 21.3968C64.9171 19.1203 63.8267 16.9368 62.5482 14.8706C62.1395 14.2099 61.0491 13.934 60.6191 14.7224C60.166 15.553 59.6624 16.242 59.4468 16.5362C59.4448 16.5389 59.4428 16.5417 59.4408 16.5444C59.0871 17.0298 59.0494 17.6773 59.3443 18.2005C61.8659 22.6744 63.3906 27.7135 63.4378 32.8369C63.4459 33.5026 63.433 34.3261 63.3836 34.9878C63.3432 35.6721 63.2631 36.4494 63.1491 37.1257C62.8595 39.0023 62.2957 40.8611 61.685 42.6569C61.5402 43.0346 61.3363 43.621 61.1746 43.9883L60.9003 44.6467C60.7976 44.8603 60.5517 45.4136 60.4498 45.6198C60.3446 45.8229 60.072 46.3664 59.9628 46.5759C59.6288 47.181 59.251 47.8556 58.8822 48.4348C57.1487 51.1688 54.9663 53.6327 52.4806 55.7051C49.9876 57.7742 47.1654 59.4713 44.1612 60.6878C43.5205 60.9418 42.782 61.2063 42.1325 61.4199C41.9189 61.4878 41.2969 61.6674 41.1011 61.7289C40.8625 61.796 40.3108 61.9279 40.0592 61.9991C29.2953 64.6005 17.2227 60.3578 10.4077 51.6363C5.65793 45.5939 3.38496 37.5625 4.49718 29.9411C5.65067 22.2663 10.2662 15.3228 16.3466 10.5771C25.4211 3.45483 38.8563 2.30853 49.0956 7.60894C49.7882 7.96749 50.8482 7.85093 51.4494 7.35423C51.9556 6.93609 52.0497 6.67126 52.5099 6.18218C53.129 5.52421 52.8944 4.72067 52.2365 4.32951C51.8825 4.11904 51.5196 3.91101 51.2437 3.77114C38.9397 -2.53742 22.9172 -0.862194 12.4558 8.2799C6.22659 13.6493 1.62078 21.1016 0.366986 29.3159C-1.71024 42.5776 5.19202 56.5294 16.9848 62.9309C23.0305 66.3073 30.0913 67.8967 37.0024 67.21C37.7587 67.1453 38.7407 66.9996 39.4865 66.867C40.5631 66.6785 41.6899 66.4213 42.7399 66.1172C47.0035 64.9119 51.0253 62.8395 54.5408 60.1483C57.6089 57.7848 60.3268 54.9302 62.4865 51.714C63.3367 50.4619 64.1165 49.0973 64.7927 47.7448C65.0572 47.1939 65.4228 46.4061 65.6533 45.8358C65.8434 45.4047 66.0917 44.7163 66.2616 44.2714C66.3449 44.0118 66.5755 43.3315 66.6523 43.0799C66.7543 42.6884 66.8926 42.2613 66.9856 41.8706C67.3108 40.5384 67.5648 39.1188 67.7209 37.7574C68.4432 32.2359 67.7532 26.5963 65.7722 21.3968Z" fill="#1FB356" />
                                <path d="M62.4886 4.52558C61.8953 3.53839 60.614 3.21914 59.6268 3.81253C59.3721 3.96568 59.1376 4.13669 58.9085 4.31241C57.8586 5.09561 56.7607 6.35646 55.875 7.30632C48.0944 15.6974 41.0435 24.8315 35.2262 34.7134C34.6474 35.6757 34.0473 36.7317 33.5617 37.7451C33.0942 38.7002 32.5962 39.7525 32.1515 40.724C29.0916 35.1222 24.2774 28.9748 18.5628 26.4593C16.278 25.5139 14.0172 27.9198 15.1486 30.1525C15.484 30.8109 15.8755 31.4251 16.2673 32.0438C18.1775 35.0533 20.4223 37.802 22.4061 40.7485C24.9283 44.4399 27.0527 48.3484 29.1073 52.3094C30.5226 54.9801 34.5315 54.5796 35.3754 51.6502C36.7924 48.6692 38.2488 45.7244 39.8063 42.8207C40.3038 41.8788 40.8784 40.876 41.3565 39.9275C41.8213 38.9956 42.3437 37.9179 42.827 36.9926C46.8335 29.1493 51.6405 21.7533 56.8383 14.6258C57.7192 13.4243 58.922 11.7978 59.8234 10.6096C60.3966 9.84173 61.3153 8.70936 61.8077 7.91132C62.1143 7.4299 62.402 6.9387 62.6247 6.40589C62.8724 5.81329 62.8439 5.11744 62.4886 4.52558Z" fill="#1FB356" />
                            </svg>
                        </span>
                        <div>
                            <h3 className='text-xl/7 font-serif text-[#0F172B] text-center'>Questionnaire Completed!</h3>
                            <p className='text-sm/5 text-[#71717A] mt-2 text-center'>Thank you for completing the NOM-035 questionnaire. Your responses have been successfully recorded.</p>
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <Button variant='primary' type='button' onClick={() => { setSubmitModel(false); resetSurvey(); }} className='w-full' >Take Again</Button>
                            <Button variant='secondary' type='link' href='/enterprise' className='w-full' >Back</Button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default Stepper