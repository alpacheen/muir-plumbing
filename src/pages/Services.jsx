import React from 'react'
import FullSvg from '../components/FullSvg'

const Services = () => {
  return (
    <section className="min-h-screen w-full bg-black text-white pt-32 mx-auto">
      <h1 className="text-8xl text-center" style={{ fontFamily: "var(--font-superwater)" }}>
        Services
      </h1>
      <div 
      style={{opacity: 0.2}} className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
      
        <FullSvg
          fillColor="gray"
          strokeColor="gray"
          showAnimation={false}
          showButtons={false}
        />
      </div>
    </section>
  )
}

export default Services