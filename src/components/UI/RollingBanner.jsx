import React, {useState} from 'react'
import {motion} from 'framer-motion'

const RollingBanner = () => {
    const [isPaused, setIsPaused] = useState(false);

    const bannerList = [
    "Reliable Plumbing Services",
    "24/7 Emergency Support",
    "Affordable Rates",
    "Licensed & Insured Professionals",
    "Customer Satisfaction Guaranteed",
    "Service Areas: Brisbane, Gold Coast, Sunshine Coast",
    ]
  return (
    <div className='bg-transparent  text-secondary mt-10 font-carter-one'>
        {/* Container for the rolling banner */}
        <div className=' py-2 text-sm font-medium cursor-pointer'
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        >
            <motion.div className='flex
             items-center whitespace-rap'
            animate={isPaused ? {x:0} : {x:[-50,50]}}
            transition={{
                x: {
                    repeat: isPaused ? 0 : Infinity,
                    repeatType: 'loop',
                    duration: 30,
                    ease: 'linear'
                },
            }}
            >
                {bannerList.map((text, index) => (
                    <span key={index} className='mx-4 text-lg'>
                        {text}
                    </span>
                ))}
            </motion.div>
            {/*Pause */}
            {isPaused && (
                <div className='absolute inset-0 bg-transparent bg-opacity-50 flex items-center justify-center'>
                    <span className='text-white text-lg'></span>
                </div>
            )}
        </div>
        {/* Emergency Contact Info */}
        <div className='text-center text-sm py-1 bg-primary'>
            <span>Emergency? Call us now at (07) 1234-5678</span>
            <a href="tel:(07)1234-5678" className='ml-2 underline'>Tap to Call</a>
    </div>
    </div>
  )
}

export default RollingBanner;