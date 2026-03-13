// import React, { Children } from 'react'

// const ModelHeader = ({ children, onClose }: { children: React.ReactNode; onClose: () => void }) => {
//     return (
//         <div className='relative'>
//             {children}
//             <button className='absolute top-0 right-0 w-4 h-4 flex items-center justify-center text-lg font-semibold text-black' onClick={onClose}> X </button>
//         </div>
//     )
// }

// const ModelBody = ({ children }: { children: React.ReactNode }) => {
//     return <div className='max-h-[calc(100vh-160px)] overflow-y-auto'>{children}</div>
// }

// const ModelFooter = ({ children }: { children: React.ReactNode }) => {
//     return <div>{children}</div>
// }

// const Model = ({ children, onClose, onClick }: { children: React.ReactNode; onClose: () => void; onClick?: () => void }) => {


//     return (
//         <div className='fixed inset-0 z-50'>
//             <div className='absolute inset-0 bg-black/50 flex items-center justify-center '>
//                 <div className='bg-white p-6 rounded-lg shadow-lg mx-auto w-full max-w-md max-h-[calc(100vh-80px)]' >
//                     <ModelHeader onClose={() => { }}>
//                         {children}
//                     </ModelHeader>
//                     <ModelBody>
//                         {children}
//                     </ModelBody>
//                     <ModelFooter>
//                         {children}
//                     </ModelFooter>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Model

"use client"

import React from "react"

const Header = ({
    children,
    onClose,
    className = "pb-6 "
}: {
    children: React.ReactNode
    onClose: () => void
    className?: string
}) => {
    return (
        <div className={` sticky pt-6 top-0 z-100 left-0 bg-white ${className}`}>

            {children}

            <button
                onClick={onClose}
                className="absolute right-0 top-6 w-4 h-4 flex items-center justify-center"
            >
                ✕
            </button>

        </div>
    )
}

const Body = ({ children }: any) => {
    return (
        <div className=" ">
            {children}
        </div>
    )
}

const Footer = ({ children }: any) => {
    return (
        <div className=" flex pb-6 justify-end gap-3">
            {children}
        </div>
    )
}

const Modal = ({
    children,
    onClose,
    className = "max-w-[750px]"
}: {
    children: React.ReactNode
    onClose: () => void
    className?: string
}) => {

    const header = React.Children.toArray(children).find(
        (child: any) => child.type === Header
    )

    const body = React.Children.toArray(children).find(
        (child: any) => child.type === Body
    )

    const footer = React.Children.toArray(children).find(
        (child: any) => child.type === Footer
    )

    return (
        <div className="fixed inset-0 z-50">

            <div
                className="absolute inset-0 bg-black/50 flex items-center justify-center"
                onClick={onClose}
            >

                <div
                    className={`bg-white px-6 rounded-lg mx-4 lg:mx-auto  border border-[#E4E4E7] shadow-lg w-full  max-h-[calc(100vh-120px)] overflow-y-auto ${className}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {header}
                    {body}
                    {footer}
                </div>

            </div>

        </div>
    )
}

Modal.Header = Header
Modal.Body = Body
Modal.Footer = Footer

export default Modal