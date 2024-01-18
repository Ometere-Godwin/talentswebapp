import React from 'react'
import SvgComponent from '../SVGShape'
import BaseText from '../BaseText'

export default function PersonalDetailedProfile() {
    return (
        <div>
            <section className="flex flex-col relative gap-y-6">
                <BaseText weight="semibold" size="base" color="blue">
                    Work Experience
                </BaseText>
                <div className='flex justify-between'>
                    <div className='flex gap-x-5 '>
                        <div>
                            <span className='h-[45px] w-[45px]'><SvgComponent icon='github-icon' /></span>
                        </div>
                        <div className='flex flex-col gap-y-4'>
                            <div>
                                <BaseText weight="semibold" size="x-large">Front-End Engineer</BaseText>
                                <BaseText weight="semibold" size="base">Github Ltd</BaseText>
                            </div>
                            <div className='flex flex-col gap-y-5'>
                                <BaseText weight="normal" color='gray' size='base'>ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et vel mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur </BaseText>
                                <BaseText weight="normal" color='gray' size='base'>ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per  Curabitur </BaseText>
                            </div>
                            <div className='flex gap-x-8'>
                                <BaseText weight="medium" color='gray' size='base'>Skills: </BaseText>
                                <div className='flex items-center'>
                                    <ul className='flex gap-x-6 items-center'>
                                        <li><BaseText weight="semibold" color='gray' size='small'>Javascript</BaseText></li>
                                        <li><BaseText weight="semibold" color='gray' size='small'>Anguar</BaseText></li>
                                        <li><BaseText weight="semibold" color='gray' size='small'>Python</BaseText></li>
                                        <li><BaseText weight="semibold" color='gray' size='small'>NodeJs</BaseText></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BaseText weight="medium" size="small" color="black">Aug 2023 - Present</BaseText>
                </div>

                <div className="bg-[#E9ECF0] h-px" />

                <div className='flex justify-between'>
                    <div className='flex gap-x-5 '>
                        <div>
                            <span className='h-[45px] w-[45px]'><SvgComponent icon='github-icon' /></span>
                        </div>
                        <div className='flex flex-col gap-y-4'>
                            <div>
                                <BaseText weight="semibold" size="x-large">Front-End Engineer</BaseText>
                                <BaseText weight="semibold" size="small">Github Ltd</BaseText>
                            </div>
                            <div className='flex flex-col gap-y-5'>
                                <BaseText weight="normal" color='gray' size='base'>ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et vel mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur </BaseText>
                                <BaseText weight="normal" color='gray' size='base'>ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per  Curabitur </BaseText>
                            </div>
                            <div className='flex gap-x-8'>
                                <BaseText weight="medium" color='gray' size='large'>Skills: </BaseText>
                                <div className='flex items-center'>
                                    <ul className=' flex gap-x-6 items-center'>
                                        <li><BaseText weight="semibold" color='gray' size='small'>Javascript</BaseText></li>
                                        <li><BaseText weight="semibold" color='gray' size='small'>Anguar</BaseText></li>
                                        <li><BaseText weight="semibold" color='gray' size='small'>Python</BaseText></li>
                                        <li><BaseText weight="semibold" color='gray' size='small'>Javascript</BaseText></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BaseText weight="medium" size="small" color="black">Aug 2023 - Present</BaseText>
                </div>
            </section>
        </div>
    )
}
