import React from 'react'

interface ModelInputProps {
    label: string,
    type: string,
    placeholder: string,
    value?: number | string,
    unit?: string,
    onChage?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ModelInput = ({
    label,
    type,
    placeholder,
    value,
    onChage,
    unit
}: ModelInputProps) => {
    return (
        <form>
            <label htmlFor='marker value' className='text-sm font-medium text-[#18181B] mb-2'>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChage}
                className='w-full px-3 py-2 border border-[#E4E4E7] rounded-md focus:outline-none overflow-hidden my-2 text-[#71717A] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
            />
            <p className='text-xs text-[#71717A] '>{unit}</p>

        </form>
    )
}

export default ModelInput