"use client"
import MainHeading from "@/components/common/MainHeading";
import SectionBox from "@/components/common/SectionBox";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useState } from "react";
import { useBiomarkers } from "@/hooks/useBiomarkers";
import BiomarkerTrendChart from "@/components/BiomarkerCard";
import Modal from "@/components/common/Model";
import Disclaimer from "@/components/common/Disclaimer";


export default function HealthInsightsPage() {
    const [activeTab, setActiveTab] = useState<string>("all")
    const [searchInput, setSearchInput] = useState("")
    const [activeCategory, setActiveCategory] = useState<string>("all")
    const [currentPage, setCurrentPage] = useState(1)

    const [activeModel, setActiveModel] = useState<string | null>(null)
    const itemsPerPage = 9

    const { error, loading, biomarkers } = useBiomarkers()

    // Filter biomarkers based on tab, category, and search
    const filteredBiomarkers = biomarkers?.filter((biomarker) => {
        const matchesTab = activeTab === "all" || biomarker.status.toLowerCase() === activeTab.toLowerCase()
        const matchesCategory = activeCategory === "all" || biomarker.category.toLowerCase() === activeCategory.toLowerCase()
        const matchesSearch = biomarker.title.toLowerCase().includes(searchInput.toLowerCase())
        return matchesTab && matchesCategory && matchesSearch
    })

    const totalPages = Math.ceil((filteredBiomarkers?.length || 0) / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentBiomarkers = filteredBiomarkers?.slice(startIndex, endIndex)

    const Tabs = [{
        id: "all",
        title: "All",
    },
    {
        id: "optimal",
        title: "Optimal",
    },
    {
        id: "normal",
        title: "Normal",
    },
    {
        id: "high",
        title: "Out of Range",
    },
    {
        id: "missing",
        title: "Missing",
    },
    ]

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
        setCurrentPage(1)
    }

    const Category = [
        {
            id: "all",
            label: "All Category",
        },
        {
            id: "inflammation",
            label: "Inflammation",
        },
        {
            id: "blood",
            label: "Blood health",
        },
        {
            id: "cancer",
            label: "Cancer Screening",
        },
        {
            id: "heart",
            label: "Heart",
        },
        {
            id: "hormonal",
            label: "Hormonal Health",
        },
        {
            id: "kidney",
            label: "Kidney Health",
        },
        {
            id: "liver",
            label: "Liver Health",
        },
        {
            id: "nutrients",
            label: "Nutrients",
        },
    ]

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'optimal': return 'bg-[#1CA34E]';
            case 'normal': return 'bg-[#D39D00]';
            case 'out of range': return 'bg-[#D12A2A]';
            case 'missing': return 'bg-gray-500';
            default: return 'bg-gray-500';
        }
    };
    return (
        <>
            <section>
                <MainHeading
                    mainHeading="Health Insights"
                    desc="View your lab results by category and level of attention needed."
                />
                <div className="my-6 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between ">
                    <ul className=" p-1 rounded-xl bg-[#F3F4EC] flex items-center justify-start max-w-fit">
                        {Tabs.map((tab, index) => (
                            <li key={index}  >
                                <button
                                    onClick={() => {
                                        setActiveTab(tab.id)
                                        setCurrentPage(1)
                                    }}
                                    className={`px-3 py-2.5 flex items-center  rounded-lg text-sm/5
                                 ${activeTab === tab.id ? "bg-[#4F512D] text-white font-medium" : "bg-transparent text-[#252613] font-normal"} `}>
                                    {tab.title}
                                </button>

                            </li>
                        ))
                        }
                    </ul >
                    <div className="relative rounded-md border border-[#E4E4E7] bg-white w-full md:w-[322] h-10">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchInput}
                            onChange={(e) => HandleChange(e)}
                            className=" px-8 py-2  outline-none absolute inset-0 "
                        />
                        <Search color="#71717A" size={16} className="absolute top-2.75 left-3" />
                    </div>
                </div>
            </section>
            <SectionBox className="">
                <div className="flex items-start justify-between gap-3">
                    <button className="w-8 h-8 rounded-full border hidden lg:flex border-[#4F512D]  items-center justify-ceter">
                        <ChevronLeft size={26} color="#4F512D" />
                    </button>
                    <ul className="flex items-center justify-between flex-grow-1 flex-wrap lg:flex-nowrap max-w-[810px] 2xl:max-w-full overflow-x-auto  p-1 scrollbar-hide space-y-4 ">
                        {Category.map((cat) => (
                            <li key={cat.id}>
                                <button
                                    onClick={() => {
                                        setActiveCategory(cat.id)
                                        setCurrentPage(1)
                                    }}
                                    className={` px-4 pb-3 text-sm/5 font-medium ${activeCategory === cat.id ? "border-b-2 border-[#4F512D] text-[#4F512D]" : "text-[#252613]"} `}>{cat.label}</button>
                            </li>
                        ))}

                    </ul>
                    <button className="w-8 h-8 rounded-full border border-[#4F512D] hidden lg:flex items-center justify-ceter">
                        <ChevronRight size={26} color="#4F512D" />
                    </button>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {currentBiomarkers?.map((card) => (
                        <BiomarkerTrendChart key={card.id}
                            title={card.title}
                            unit={card.unit}
                            data={card.data}
                            ranges={card.ranges}
                            status={card.status as "optimal" | "normal" | "high" | "missing"}
                            onclick={() => {
                                setActiveModel(card.title)
                            }}
                        />
                    ))}
                </div>
                {totalPages > 1 && (
                    <div className="my-6 flex items-center justify-end gap-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 rounded-lg border border-[#E4E4E7] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F5F5F5]">
                            Previous
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-10 h-10 rounded-lg ${currentPage === page ? "bg-[#4F512D] text-white" : "border border-[#E4E4E7] hover:bg-[#F5F5F5]"}`}>
                                {page}
                            </button>
                        ))}
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 rounded-lg border border-[#E4E4E7] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F5F5F5]">
                            Next
                        </button>
                    </div>
                )}
            </SectionBox>

            {activeModel && (() => {
                const selectedMarker = currentBiomarkers.find(card => card.title === activeModel);
                if (!selectedMarker) return null;

                const currentValue = selectedMarker.data[selectedMarker.data.length - 1]?.value ?? null;

                return (
                    <Modal onClose={() => setActiveModel(null)}>
                        <Modal.Header onClose={() => setActiveModel(null)}>
                            <div className='flex items-center gap-1.5'>
                                <h4 className='text-xl font-serif text-[#1E1E23]'>{selectedMarker.title}</h4>
                                <span className={`flex px-2.5 py-0.5 capitalize items-center justify-center text-white text-xs/4 font-semibold rounded-full ${getStatusColor(selectedMarker.status)}`}>
                                    {selectedMarker.status}
                                </span>
                            </div>
                            <div className='mt-3 flex items-baseline font-serif'>
                                <span className='text-[48px]/12 text-[#252613]'>{currentValue}</span>
                                <span className='text-xl/12 text-[#252613]'> {selectedMarker.unit}</span>
                            </div>
                        </Modal.Header>
                        <Modal.Body>

                            <BiomarkerTrendChart
                                title={selectedMarker.title}
                                unit={selectedMarker.unit}
                                data={selectedMarker.data}
                                ranges={selectedMarker.ranges}
                                hideHeader
                                hideBorder
                            />
                            <div className='my-6 bg-[#E3E3E3] h-[1px] w-full'></div>
                            <div className='flex flex-col items-start gap-6
                            '>
                                {selectedMarker.content?.map((item, index) => (
                                    <div key={index} className='flex flex-col gap-2 items-start'>
                                        <h5 className='text-sm/5 font-semibold text-[#1E1E23]'>{item.question}</h5>
                                        <p className='text-sm/5 text-[#5F5F69]'>{item.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>
                );
            })()}
            <Disclaimer />
        </>
    )
}