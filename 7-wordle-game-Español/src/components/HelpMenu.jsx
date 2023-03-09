import React from 'react'
import useMain from '../hooks/useMain'

const HelpMenu = () => {

  const {showHelp, darkMode,setShowHelp} = useMain()

  return (

    <>
      <div className={`${showHelp? 'scale-x-1': 'scale-x-0'} transition-all inset-0 absolute grid place-content-center px-8 backdrop-blur-sm`}>
        <div className={`p-6 ${ darkMode? 'bg-gray-700 text-white' : 'bg-gray-300'} shadow-xl`}>
          <h2 className='font-bold'>Cómo jugar</h2>
          <p className='my-2'>Adivina la palabra en 6 intentos</p>
          <p>Después de cada intento, el color de las cuadrículas cambiará según lo acertada que haya sido tu letra </p>
          <h3 className='my-2 font-bold'>Ejemplo</h3>

          <div className="flex my-4 gap-4">
              <div className="px-3 py-1 bg-green-500 rounded-lg uppercase font-bold text-xl text-white">a</div>
              <div className="px-3 py-1 bg-yellow-400 rounded-lg uppercase font-bold text-xl text-white">b</div>
              <div className="px-3 py-1 bg-gray-500 rounded-lg uppercase font-bold text-xl text-white">r</div>
              <div className="px-3 py-1 bg-gray-500 rounded-lg uppercase font-bold text-xl text-white">a</div>
              <div className="px-3 py-1 bg-green-500 rounded-lg uppercase font-bold text-xl text-white">z</div>
              <div className="px-3 py-1 bg-green-500 rounded-lg uppercase font-bold text-xl text-white">o</div>
          </div>

          <p className="before:blocks before:inline-block before:mr-2 before:w-4 before:h-4 before:bg-green-500">La(s) letra(s) <span className='font-bold uppercase'>a, z, o</span> están en la palabra y en la posición correcta </p>
          <p className="before:blocks before:inline-block before:mr-2 before:w-4 before:h-4 before:bg-yellow-400">La letra <span className='font-bold uppercase'>b</span> está en la palabra pero no en la posición correcta </p>
          <p className="before:blocks before:inline-block before:mr-2 before:w-4 before:h-4 before:bg-gray-500">La(s) letra(s) <span className='font-bold uppercase'>r, a</span> no están en la palabra </p>
          <button onClick={()=>setShowHelp(!showHelp)} className="font-bold bg-yellow-400 text-gray-900 p-2 mx-auto mt-4 w-full block rounded-md">Entendido</button>
        </div>
      </div>
    </>
    
  )
}

export default HelpMenu