import React from 'react'
import {motion} from 'framer-motion'
import FullSvg from '../FullSvg'

const PageLayout = ({title, children, backgroundSvg = true, svgProps = {}, containerClassName = "", titleClassName = "", arialLabel, ...props}) => {

    const defaultSvgProps = {
        fillColor: "gray",
        strokeColor: "gray",
        showAnimation: false,
        showButtons: false,
        opacity: 0.2,
        alt: "Decorative Muir Plumbing graphic",
        ...svgProps
    }
  return (
    <section
    className={`min-h-screen w-full bg-primary pt-24 mx-auto ${containerClassName}`}
    aria-label={arialLabel || `${title.toLowerCase()}-section`}
    {...props}
    >
        <h1
        className={`text-3xl md:text-6xl lg:text-8xl text-center mt-10 text-creme-fraiche ${titleClassName}`}
        style={{ fontFamily: "var(--font-superwater)" }}
        id={`${title.toLowerCase()}-heading`}
        aria-labelledby={`${title.toLowerCase()}-heading`}
        >{title}</h1>
        <div className='relative z-10'>
        {children}
        </div>
        {backgroundSvg && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: defaultSvgProps.opacity }}
        transition={{ duration: 1, delay: 0.5 }}
        className='absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none'
        >
        <FullSvg {...defaultSvgProps} />
        </motion.div>
        )}
    </section>
  )
}

export default PageLayout