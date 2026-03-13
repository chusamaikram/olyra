import Divider from "./common/Divider"

interface FunctionalMarkerCardProps {
    showbutton: Boolean,
    title: String,
    desc: String,
    value?: Number | null,
    unit?: String,
    icon?: React.ReactNode
    onClick?: () => void
}
export default function FunctionalMarkerCard(
    {
        showbutton,
        title = "",
        desc = "",
        value,
        unit,
        icon,
        onClick
    }: FunctionalMarkerCardProps
) {
    return (
        <>
            <button onClick={onClick} type="button" aria-label="Functional marker" className="p-6 rounded-lg border border-[#E9EAEB] w-full bg-white cursor-pointer hover:border-1 hover:border-[#BE735B] transition-colors duration-300">
                <div className="flex flex-col items-start gap-4 w-full">
                    {showbutton ?
                        <div className="w-full">
                            <div className="flex items-start justify-between w-full">
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-[#E5E7D4] flex items-center justify-center">
                                        {icon}
                                    </div>
                                    <h3 className="text-sm/[25px] text-[#1E1E23] font-medium">{title}</h3>
                                </div>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M16.425 4.60511L17.415 3.61511C17.8088 3.22126 18.343 3 18.9 3C19.457 3 19.9912 3.22126 20.385 3.61511C20.7788 4.00895 21.0001 4.54312 21.0001 5.10011C21.0001 5.65709 20.7788 6.19126 20.385 6.58511L19.395 7.57511M16.425 4.60511L9.765 11.2651C9.25767 11.7728 8.89785 12.4088 8.724 13.1051L8 16.0001L10.896 15.2761C11.5924 15.102 12.2285 14.7418 12.736 14.2341L19.395 7.57511M16.425 4.60511L19.395 7.57511M19 13.5001C19 16.7881 19 18.4311 18.092 19.5381C17.9259 19.7405 17.7404 19.926 17.538 20.0921C16.43 21.0001 14.788 21.0001 11.5 21.0001H11C7.229 21.0001 5.343 21.0001 4.172 19.8281C3.001 18.6561 3 16.7711 3 13.0001V12.5001C3 9.21311 3 7.56911 3.908 6.46211C4.07467 6.25944 4.25933 6.07477 4.462 5.90811C5.57 5.00011 7.212 5.00011 10.5 5.00011" stroke="#484A54" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                            <div className="mt-3 flex items-baseline">
                                <span className="text-[60px]/12 text-[#252613] font-serif ">{value?.toString()}</span>
                                <span className="text-xl/12 text-[#252613] font-serif">{value ? unit : ""}</span>
                            </div>
                        </div>
                        :
                        <div className="flex flex-col items-start gap-3">
                            <div className="h-10 w-10 rounded-full bg-[#E5E7D4] flex items-center justify-center">
                                {icon}
                            </div>
                            <h3 className="text-sm/[25px] text-[#1E1E23] font-medium">{title}</h3>
                        </div>
                    }

                    <Divider className="my-0" />
                    <p className="text-base/5 text-[#5F5F69]">{desc}</p>

                </div>
            </button>
        </>
    )
}