import useMain from "../hooks/useMain";
import {addLetter, deleteLetter} from '../helpers/keyboardActions'
import { setLetterColor } from '../helpers/paintLetters';
import EndGameAlert from "./EndGameAlert";

const Keyboard = () => {

	const { setKeyDown, keyDown,
					attemptWord, setAttemptWord, 
					previousAttempts, setPreviousAttempts,
					setAlert, 
					attempt, setAttempt,
					word, 
					testWord,endGame,
					setKey,
					loading,
					dictionary
				} = useMain()

	function detectKey(e) {
		if(e.target.type === 'submit' ){
      	setKeyDown(!keyDown)
				setKey(e.target.value)

				if(e.target.value === 'borrar'){
					setAttemptWord(deleteLetter(attemptWord))
					return
				}


				if(e.target.value === 'enviar'){
					if( attemptWord.includes('') ){
						setAlert({message:'La palabra esta incompleta', type:'error',temporal: true});
						return
					}

					if( !dictionary.includes(attemptWord.join('')) ){
						setAlert({message:'La palabra ingresada no esta en nuestro registro', type:'error',temporal: true});
						return
					}

					setAttempt(attempt+1)
					setPreviousAttempts([...previousAttempts, setLetterColor(attemptWord,word)])
					
					testWord(attempt)
					setAttemptWord(['','','','',''])	
					
					return
				}

				setAttemptWord(addLetter(attemptWord, e.target.value))
      }

	}



  return (
		<>
		{endGame ?
			<EndGameAlert/>
			:
			<>
			{ loading ||
				<div className="w-full max-w-xl mx-auto px-2">
					<div onClick = { (e)=> detectKey(e) } className="mt-5 grid gap-1 grid-cols-10 justify-center items-center mb-3 ">
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="q">Q</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="w">W</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="e">E</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="r">R</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="t">T</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="y">Y</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="u">U</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="i">I</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="o">O</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="p">P</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="a">A</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="s">S</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="d">D</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="f">F</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="g">G</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="h">H</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="j">J</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="k">K</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="l">L</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="ñ">Ñ</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-yellow-400 text-gray-900 rounded col-span-2" value="enviar">Enviar</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="z">Z</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="x">X</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="c">C</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="v">V</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="b">B</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="n">N</button>
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-gray-700 text-white rounded " value="m">M</button>
						
						<button className="p-1 py-3 md:py-1 cursor-pointer font-bold text-sm md:text-lg w-full h-full border-none bg-red-600 text-white rounded " value="borrar">&#8592;</button>

					</div>
				</div>
			}
			</>
		}
		</>
  )
}

export default Keyboard