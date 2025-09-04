import React from 'react'
import MuirSVG from './components/Muirsvg'
import TapSVG from './components/TapSvg'
import WaterdropSVG from './components/WaterdropSvg'


const App = () => {
  return (
    <>
    <section className=' flex w-full bg-black'>
      MUIR PLUMBING
      <div className='flex-col justify-center text-center'>
        <TapSVG/>
        <WaterdropSVG/>
        <MuirSVG/>
      </div>
    </section>
    </>
  )
}

export default App