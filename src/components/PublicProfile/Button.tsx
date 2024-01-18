import React from 'react'
import BaseText from '../BaseText'

export default function Button() {
    return (
        <div className='flex rounded-full text-sm font-bold'>
            <div className='flex gap-x-5 items-center'>
                <span className='rounded-full text-sm bg-[#F9F9F2] px-2 font-bold py-1'>
                    <BaseText weight="medium" size="small" color="black">Javascript</BaseText>
                </span>
                <span className='rounded-full text-sm bg-[#F9F9F2] px-2 font-bold py-1'>
                    <BaseText weight="medium" size="small" color="black">Angular</BaseText>
                </span>

                <span className='rounded-full text-sm bg-[#F9F9F2] px-2 font-bold py-1'>
                    <BaseText weight="medium" size="small" color="black">NodeJs</BaseText>
                </span>

                <span className='rounded-full text-sm bg-[#F9F9F2] px-2 font-bold py-1'>
                    <BaseText weight="medium" size="small" color="black">VueJs</BaseText>
                </span>

                <span className='rounded-full text-sm bg-[#F9F9F2] px-2 font-bold py-1'>
                    <BaseText weight="medium" size="small" color="black">Python</BaseText>
                </span>
            </div>
        </div>
    )
}
