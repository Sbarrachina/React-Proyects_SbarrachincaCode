import { useEffect } from 'react'
import useMain from '../hooks/useMain'
import darkModeFn from '../helpers/darkMode'
import HelpMenu from './HelpMenu'

const Header = () => {

  const {darkMode, setDarkMode, showHelp,setShowHelp} = useMain()
  
  return (
    <div className={`w-full max-w-xl mx-auto flex justify-between items-center py-4 px-8 shadow-xl rounded-xl backdrop-blur-sm ` } >
      
      <div onClick={()=> {setDarkMode(!darkMode); darkModeFn(!darkMode);}}>
        { darkMode ?
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-10 h-10 ${ darkMode ? 'text-white' : 'text-black'}  cursor-pointer`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-10 h-10 ${ darkMode ? 'text-white' : 'text-black'} cursor-pointer`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        }
      </div>
      
      <div className={`font-semibold ${ darkMode ? 'text-white' : 'text-black'} text-center`}>
          <h1 className='font-extrabold uppercase' ><span className=' text-yellow-400'>WORDLE</span> ESPAÑOL</h1>
          <p>Adivina la palabra</p>    
      </div>

      <div onClick={()=> setShowHelp(!showHelp)} className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-10 h-10 ${ darkMode ? 'text-white' : 'text-black'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
          </svg>
      </div>

      
      
    </div>
  )
}

export default Header