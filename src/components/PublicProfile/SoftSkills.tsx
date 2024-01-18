import React from 'react'
import BaseText from '../BaseText'

export default function SoftSkills() {
    return (
        <div className='flex flex-col gap-y-6'>
            <div className="bg-[#E9ECF0] h-px" />
            <BaseText weight="semibold" size="base" color="blue">
                Soft Skills
            </BaseText>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center gap-y-4 md:gap-y-8 lg:gap-y-10'>
                <BaseText weight="medium" size="base">Problem Solving</BaseText>
                <BaseText weight="medium" size="base">Problem Solving</BaseText>
                <BaseText weight="medium" size="base">Problem Solving</BaseText>
                <BaseText weight="medium" size="base">Problem Solving</BaseText>
                <BaseText weight="medium" size="base">Problem Solving</BaseText>
                <BaseText weight="medium" size="base">Problem Solving</BaseText>
                <BaseText weight="medium" size="base">Problem Solving</BaseText>
                <BaseText weight="medium" size="base">Problem Solving</BaseText>
                <BaseText weight="medium" size="base">Problem Solving</BaseText>
                <BaseText weight="medium" size="base">Problem Solving</BaseText>
            </div>
        </div>
    )
}
