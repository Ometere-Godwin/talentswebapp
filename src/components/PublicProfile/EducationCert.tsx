import React from 'react'
import BaseText from '../BaseText'
import SvgComponent from '../SVGShape'

export default function EducationCert() {
    return (
        <div className='flex flex-col gap-y-6'>
            <div className="bg-[#E9ECF0] h-px" />
            <div className='flex gap-y-6 flex-col'>
                <BaseText weight="semibold" size="base" color="blue">
                    Education and Certifications
                </BaseText>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-y-10'>
                    <div className='flex items-center gap-x-4'>
                        <SvgComponent icon='behance-icon' />
                        <div className='flex flex-col gap-y-1'>
                            <BaseText weight="semibold" size="x-large">University of Nigeria</BaseText>
                            <BaseText weight="medium" size="large">Master’s degree, Computer science</BaseText>
                            <BaseText weight="medium" size="small">August 2019 - August 2022</BaseText>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-4'>
                        <SvgComponent icon='behance-icon' />
                        <div className='flex flex-col gap-y-1'>
                            <BaseText weight="semibold" size="x-large">University of Nigeria</BaseText>
                            <BaseText weight="medium" size="large">Master’s degree, Computer science</BaseText>
                            <BaseText weight="medium" size="small">August 2019 - August 2022</BaseText>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-4'>
                        <SvgComponent icon='behance-icon' />
                        <div className='flex flex-col gap-y-1' >
                            <BaseText weight="semibold" size="x-large">Understanding Users Needs</BaseText>
                            <BaseText weight="medium" size="large">Coursera Certification</BaseText>
                            <BaseText weight="medium" size="small">August 2023 - Present</BaseText>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-4'>
                        <SvgComponent icon='behance-icon' />
                        <div className='flex flex-col gap-y-1'>
                            <BaseText weight="semibold" size="x-large">University of Nigeria</BaseText>
                            <BaseText weight="medium" size="large">Udemy Certification</BaseText>
                            <BaseText weight="medium" size="small">August 2019 - August 2022</BaseText>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
