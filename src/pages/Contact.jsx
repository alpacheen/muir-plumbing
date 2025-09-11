import React from 'react'
import FullSvg from '../components/FullSvg'
import InputForm from '../components/InputForm'

const Contact = () => {
  return (
    <section className="min-h-screen w-full bg-primary pt-32 mx-auto"
    aria-label='contact-section'>
      <h1 className="text-8xl text-center text-creme-fraiche" style={{ fontFamily: "var(--font-superwater)" }}
      id='contact-heading'
      aria-labelledby='contact-heading'>
        Contact
      </h1>
      <div className='mt-24'>
        <InputForm />
      </div>
      <div 
      style={{opacity: 0.2}} className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
      
        <FullSvg
        alt="Decorative Muir Plumbing graphic"
          fillColor="gray"
          strokeColor="gray"
          showAnimation={false}
          showButtons={false}
        />
      </div>
    </section>
  )
}

export default Contact