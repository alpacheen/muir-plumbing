import React from 'react'
import NavBar from './components/NavBar'
import Loading from './components/Loading'


const App = () => {
  return (
    <>
        <Loading/>
        <NavBar />
    <section className='min-h-screen w-full bg-black pt-20'>
      <div className=' flex flex-col min-h-screen w-full items-center justify-center'>
      </div>
    </section>
    </>
  )
}

export default App