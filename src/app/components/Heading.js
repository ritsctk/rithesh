// components/VideoBanner.js
import React from 'react'

export default function Heading(
    {content, backgroundImg, cwidth}
) {
    return (
      <div className='w-full relative mb-8 md:mb-16'>
        <img className={cwidth} src={backgroundImg}/>
        <h2 className='absolute left-0 top-[calc(50%-20px)] text-4xl font-[600]'>{content}</h2>
      </div>
    )
}