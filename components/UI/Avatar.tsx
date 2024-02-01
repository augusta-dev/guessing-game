import React from 'react'
import Image, { StaticImageData } from 'next/image'

const Avatar: React.FC<{className?: string; image: StaticImageData}> = (props)=> {
  return (
    <div className={`${props.className} rounded-full outline-2 outline-cyan h-content w-content p-1 border-cyan border-2`}>
        <Image src={props.image} alt='woman' className='w-20 z-60 '></Image>
    </div>
  )
}
export default Avatar