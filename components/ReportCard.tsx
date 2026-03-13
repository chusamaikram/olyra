"use client"
import { ChevronDown, Trash, Trash2 } from 'lucide-react'
import Divider from './common/Divider'
import Button from './common/Button';

interface labValuesprops {
    name: string;
    value: number;
    unit: string;
}

interface labelsdataprops {
    id: string;
    name: string;
    clinic: string;
    doctor: string;
    patient: string;
    reportDate: string;
    uploaded: string;
    size: string;
    status: string;
    [key: string]: any;
    labValues?: labValuesprops[]
}
interface ReportLabelsProps {
    labelsdata: labelsdataprops
    isOpen: boolean
    onToggle: () => void
}

const ReportCard = ({ labelsdata, isOpen, onToggle }: ReportLabelsProps) => {

    const ReportLabels = [
        { label: "Clinic", key: "clinic" },
        { label: "Doctor", key: "doctor" },
        { label: "Patient Name", key: "patient" },
        { label: "Report Date", key: "reportDate" },
        { label: "ID", key: "id" },
        { label: "Uploaded", key: "uploaded" },
        { label: "Size", key: "size" },
        { label: "Status", key: "status" }
    ]

    return (
        <div  className='bg-white w-full p-4 rounded-xl border border-[#E9EAEB]'>
            <div onClick={onToggle} className='flex items-center justify-between w-full cursor-pointer '>
                <h3 className='text-xl/6.5 font-semibold text-[#181D27] line-clamp-1'>{labelsdata.name}</h3>
                <div className='flex items-center gap-4 justify-end'>
                    <span className='block px-2.5 py-0.5 bg-[#D9967E] rounded-full text-xs/4 font-semibold text-white whitespace-nowrap'>Lab Values Extracted</span>
                    <ChevronDown size={24} color='#484A54' className={`${isOpen ? "rotate-180" : ""} transition-transform duration-300`} />
                </div>
            </div>

            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className='overflow-hidden'>
                    <Divider className='my-4' />
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                        {ReportLabels.map((label) => (
                            <div key={label.key}>
                                <span className='text-base/6.5 font-semibold text-[#181D27]'>{label.label}</span>
                                <p className='text-sm/6 text-[#414651]'>{labelsdata[label.key]} </p>
                            </div>
                        ))}
                    </div>
                    <Divider className='my-4' />
                    <h3 className='text-xl/6.5 font-semibold text-[#181D27]'>Lab Values</h3>
                    <div className='pt-4 w-full'>
                        {labelsdata.labValues && labelsdata.labValues.length > 0 ?
                            <div className='w-full'>
                                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full'>
                                    {labelsdata.labValues?.map((value) => (
                                        <div key={value.name} className='p-4 rounded-lg border border-[#E9EAEB] flex flex-col items-start w-full'>
                                            <span className='text-[32px]/9.5 text-[#252613] capitalize'>{value.name}</span>
                                            <Divider className='my-3' />
                                            <p className='flex items-baseline gap-0.5 text-3xl/12 font-serif text-black'>
                                                {value.value}
                                                <span className='text-base/6 text-[#414651]'>{value.unit}</span>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <Divider className='my-4' />
                                <div className='flex items-center justify-end gap-4'>
                                    <Button variant='primary' type='button' >Download PDF</Button>
                                    <button className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center">
                                        <Trash2 size={24} color='#484A54' />
                                    </button>
                                </div>
                            </div>
                            :
                            (<p className='text-[#414651] text-lg/7 font-medium text-center'>No Lab Values Found</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportCard