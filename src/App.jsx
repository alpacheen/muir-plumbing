import React from 'react'
import MuirSVG from './components/Muirsvg'
import TapSVG from './components/TapSvg'
import WaterdropSVG from './components/WaterdropSvg'


const App = () => {
  return (
    <>
    <section className='min-h-screen w-full bg-black'>
      <div className=' flex flex-col min-h-screen w-full items-center justify-center'>
        <TapSVG/>
        <WaterdropSVG/>
        <MuirSVG/>
      </div>
    </section>
    </>
  )
}

export default App