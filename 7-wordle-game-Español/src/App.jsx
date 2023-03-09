import { useState,useEffect } from 'react'
import Keyboard from './components/Keyboard'
import Header from './components/Header'
import MainGrid from './components/MainGrid'
import EndGameAlert from './components/EndGameAlert'
import { MainProvider } from './context/MainProvider'
import HelpMenu from './components/HelpMenu'


function App() {
  
  
  
  

  return (

      <MainProvider>
        <div className=' h-screen md:h-auto flex flex-col justify-evenly'>
            <Header/>

            <HelpMenu/>

          <div id='content' className='flex flex-col justify-evenly h-full md:h-auto'>

            <MainGrid/>

            <Keyboard />

          </div>
          
        </div>
        
      </MainProvider>

  )
}

export default App
