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
    "Call (07) 1234-5678",
    "Service Areas: Brisbane, Gold Coast, Sunshine Coast",
    ]
  return (
    <div className='bg-gradient-to-r from-secondary to-neon-blue text-creme-fraiche '>
        {/* Container for the rolling banner */}
        <div className='relative overflow-hidden py-2 text-sm font-medium cursor-pointer '
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        >
            <motion.div className='flex whitespace-nowrap'
            animate={isPaused ? {x:0} : {x:[-1000,1000]}}
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
                    <span key={index} className='mx-4'>
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