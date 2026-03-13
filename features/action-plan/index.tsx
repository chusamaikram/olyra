"use client"
import MainHeading from "@/components/common/MainHeading"
import { useState } from "react"
import ActionplanData from "@/public/data/action-plan.json"
import SectionBox from "@/components/common/SectionBox"
import ActionPlanCard from "@/components/ActionPlanCard"
import Modal from "@/components/common/Model"
import Divider from "@/components/common/Divider"
import Disclaimer from "@/components/common/Disclaimer"
export default function ActionPlan() {

    const [activeTab, setActiveTab] = useState<string>("all")
    const [selectedCard, setSelectedCard] = useState<string | null>(null)
    const [showModel, setShowModel] = useState(false)

    const ActionTabs = [
        {
            id: "all",
            title: "All",
        },
        {
            id: "Diet",
            title: "Diet",
        },
        {
            id: "Supplements",
            title: "Supplements",
        },
        {
            id: "Exercise",
            title: "Exercise",
        },
        {
            id: "Medication",
            title: "Medication",
        },
    ]

    const getCategoryCount = (category: string) => {
        return category === "all"
            ? ActionplanData.length
            : ActionplanData.filter(item => item.category === category).length
    }

    const SelectedCardData = ActionplanData.find(card => card.id === selectedCard)
    return (
        <>
            <section>
                <MainHeading
                    mainHeading="Action Plan"
                    desc="View your lab results by category and level of attention needed."
                />
                <ul className="my-6 p-1 rounded-xl bg-[#F3F4EC] flex items-center justify-start max-w-fit">
                    {ActionTabs.map((tab, index) => (
                        <li key={index}  >
                            <button
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-3 py-2.5 flex items-center gap-2 rounded-lg
                                 ${activeTab === tab.id ? "bg-[#4F512D]" : "bg-transparent"} `}>
                                <span className={`text-sm/5 ${activeTab === tab.id ? "text-white font-medium" : "text-[#252613] font-normal"}`}>{tab.title}</span>

                                {tab.id !== "all" && (
                                    <span className={` p-1 rounded-full bg-white text-[#7E844E] flex items-center justify-center `}>{getCategoryCount(tab.id).toString().padStart(2, '0')}</span>
                                )}

                            </button>

                        </li>
                    ))
                    }


                </ul >
              
                <SectionBox className="">
                    <div className="flex flex-col items-start gap-4">
                        {ActionplanData
                            .filter(item => activeTab === "all" || item.category === activeTab)
                            .map((item) => (
                                <ActionPlanCard
                                    key={item.id}
                                    heading={item.title}
                                    desc={item.description}
                                    category={item.category}
                                    onClick={() => {
                                        setShowModel(true),
                                            setSelectedCard(item.id)
                                    }}

                                />
                            ))}
                    </div>

                </SectionBox>
                {showModel && selectedCard === SelectedCardData?.id && (
                    <Modal onClose={() => { setShowModel(false), setSelectedCard(null) }}>
                        <Modal.Header onClose={() => { setShowModel(false), setSelectedCard(null) }}>
                            <div className="flex items-center gap-4">
                                <h4 className="text-xl text-[#1E1E23] font-serif">{SelectedCardData?.title}</h4>
                                <span className="px-2.5 py-0.5 text-white text-xs/4 font-semibold rounded-full bg-[#ADB37D]">
                                    {SelectedCardData?.category}
                                </span>
                            </div>

                        </Modal.Header>
                        <Modal.Body>
                            <Divider className="mb-6" />
                            <div className="flex flex-col items-start gap-6">
                                {SelectedCardData?.content.map((item, index) => (
                                    <div key={index} className="flex flex-col gap-2 items-start">
                                        <h5 className="text-sm/5 font-semibold text-[#1E1E23]">{item.question}</h5>
                                        <p className="text-sm/5 text-[#5F5F69]">{item.answer}</p>
                                    </div>
                                ))}

                            </div>

                        </Modal.Body>
                        <Modal.Footer>

                        </Modal.Footer>
                    </Modal>
                )}

            </section >
            <Disclaimer 
            title="Disclaimer"
            desc="The information provided is for educational and informational purposes only and is not intended as medical advice. It is not a substitute for professional medical advice, diagnosis, or treatment."
            />
        </>
    )
}