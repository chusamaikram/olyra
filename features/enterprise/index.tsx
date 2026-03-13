import MainHeading from '@/components/common/MainHeading'
import SectionBox from '@/components/common/SectionBox'
import { File, Complaint } from '@/assets/CustomIcons'
import EnterpriseCard from '@/components/common/EnterpriseCard'
import Disclaimer from '@/components/common/Disclaimer'

const EnterpriseView = () => {

    const EnterpriseData = [
        {
            icon: <File />,
            title: 'NOM-035',
            desc: 'Perform the official psychosocial risk assessment with a modern experience.',
            btnText: 'Go to the questionare',
            path: '/enterprise/nom-035-questionnaires'

        },
        {
            icon: <Complaint />,
            title: 'Anonymous complaints',
            desc: 'It offers a safe channel for the team to share concerns without retaliation.',
            btnText: 'Open complaint mailbox',
            path: '/enterprise/anonymous-complaints'

        },
    ]

    return (
        <>
            <MainHeading
                mainHeading='Enterprise hub'
                desc='Centralize NOM-035 and trusted channels in one modern location.'
            />
            <SectionBox className='mt-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {EnterpriseData.map((card) => (
                        <EnterpriseCard key={card.title}
                            icon={card.icon}
                            title={card.title}
                            desc={card.desc}
                            btnText={card.btnText}
                            path={card.path} />
                    ))}


                </div>

            </SectionBox>
            <Disclaimer />
        </>
    )
}

export default EnterpriseView