import React, { useState } from 'react'
import BaseText from '../BaseText';

interface ReadMoreProps {
    text: string;
    maxChars: number;
}

export default function ReadMore({ text, maxChars }: ReadMoreProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const truncatedText = isExpanded ? text : text.slice(0, maxChars);
    const shouldShowReadMore = text.length > maxChars;

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className='text-justify'>
            <p>{truncatedText}</p>
            {shouldShowReadMore && (
                <button
                    onClick={handleToggle}
                    className="cursor-pointer focus:outline-none"
                >
                    <BaseText weight="semibold" color='blue' size='base'>{isExpanded ? 'Read Less' : 'Read More'}</BaseText>
                </button>
            )}
        </div>
    )
}
