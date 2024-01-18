import React from 'react'
import BaseText from '../BaseText'
import SvgComponent from '../SVGShape'
import { WORKHISTORY } from '../../utils/constants'

export default function WorkHistory() {
    return (
        <div className='flex flex-col gap-y-6'>
            <div className="bg-[#E9ECF0] h-px" />
            <BaseText weight="semibold" size="base" color="blue">TalentNest Work History</BaseText>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-5'>
                <div className=' border-[1px] border-[#EAECF0] rounded-[10px] items-center'>
                    <div className='flex flex-col  mt-4 px-5'>
                        <div className='flex justify-between flex-col gap-8'>
                            <BaseText weight="medium" size="base" color="black">Completed Challenges</BaseText>
                            <div className='flex justify-between items-center'>
                                <BaseText weight="normal" size="xxx-large" color="black">12</BaseText>
                                <SvgComponent icon='suareTick' />
                            </div>
                        </div>
                    </div>
                    {/* {WORKHISTORY.map((item) => (
                        <div key={item.title} className='flex flex-col items-center mt-4 '>
                            <div className='flex justify-between flex-col gap-8'>
                                <BaseText weight="medium" size="base" color="black">{item.title}</BaseText>
                                <div className='flex justify-between items-center'>
                                    <BaseText weight="normal" size="xxx-large" color="black">{item.total}</BaseText>
                                    <SvgComponent icon='suareTick' />
                                </div>
                            </div>
                        </div>
                    ))} */}
                </div>

                <div className=' border-[1px] border-[#EAECF0] rounded-[10px] items-center'>
                    <div className='flex flex-col  mt-4 px-5'>
                        <div className='flex justify-between flex-col gap-8'>
                            <BaseText weight="medium" size="base" color="black">Pending Applications</BaseText>
                            <div className='flex justify-between items-center'>
                                <BaseText weight="normal" size="xxx-large" color="black">12</BaseText>
                                <SvgComponent icon='suareTick' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' border-[1px] border-[#EAECF0] rounded-[10px] items-center'>
                    <div className='flex flex-col mt-4 px-5'>
                        <div className='flex justify-between flex-col gap-8'>
                            <BaseText weight="medium" size="base" color="black">Completed Challenges</BaseText>
                            <div className='flex justify-between items-center'>
                                <BaseText weight="normal" size="xxx-large" color="black">12</BaseText>
                                <SvgComponent icon='suareTick' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
