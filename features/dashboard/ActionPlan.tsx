"use client"
import ActionPlanCard from "@/components/ActionPlanCard";
import Button from "@/components/common/Button";
import Divider from "@/components/common/Divider";
import Modal from "@/components/common/Model";
import SecHeading from "@/components/common/SecHeading";
import SectionBox from "@/components/common/SectionBox";
import actionPlanData from "@/public/data/action-plan.json";
import { useState } from "react";


export default function ActionPlan() {
    const [showModel, setShowModel] = useState(false)
    const [selectedCard, setSelectedCard] = useState<string | null>(null)

    const selectedCardData = actionPlanData.find((card) => card.id == selectedCard)
    return (
        <SectionBox className="mt-6">
            <div className="flex items-center justify-between w-full">
                <SecHeading
                    Title="Action Plan"
                    desc="Evidence-based recommendations derived from your biomarker results and health profile."
                />
                <Button type="link" href="/action-plan" showArrow>
                    View More
                </Button>
            </div>
            <div className="mt-4 flex flex-col items-start gap-4 ">
                {actionPlanData.map((card) => (
                    <ActionPlanCard
                        key={card.id}
                        heading={card.title}
                        desc={card.description}
                        category={card.category}
                        onClick={() => { setShowModel(true), setSelectedCard(card.id) }}
                    />
                ))}
            </div>

            {showModel && selectedCard === selectedCardData?.id && (
                <Modal onClose={() => { setShowModel(false), setSelectedCard(null) }}>
                    <Modal.Header onClose={() => { setShowModel(false), setSelectedCard(null) }}>
                        <div className="flex items-center gap-4">
                            <h4 className="text-xl text-[#1E1E23] font-serif">{selectedCardData?.title}</h4>
                            <span className="px-2.5 py-0.5 text-white text-xs/4 font-semibold rounded-full bg-[#ADB37D]">
                                {selectedCardData?.category}
                            </span>
                        </div>

                    </Modal.Header>
                    <Modal.Body>
                        <Divider className="mb-6" />
                        <div className="flex flex-col items-start gap-6">
                            {selectedCardData?.content.map((item, index) => (
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

        </SectionBox>
    )
}