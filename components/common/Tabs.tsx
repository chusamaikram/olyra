import React from 'react'
interface TabsProps {
    activeTab: string,
    setActiveTab: (id: string) => void,
    ActionTabs: { id: string; title: string }[],
    getCategoryCount: (id: string) => number
}

const Tabs = ({ activeTab, setActiveTab, ActionTabs, getCategoryCount }: TabsProps) => {
    return (
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
    )
}

export default Tabs