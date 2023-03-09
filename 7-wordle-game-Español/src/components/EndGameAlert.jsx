import useMain from "../hooks/useMain"
import {startConfetti, removeConfetti} from './confetti'

const EndGameAlert = () => {
  
  const {setAlert,win, setWin, endGame, setEndGame, setAttempt, setPreviousAttempts, setAttemptWord, assignWord} = useMain()


  function resetGame(){
    setAttempt(0);
    setPreviousAttempts([]);
    setAttemptWord(['','','','',''])
    setWin(false);
    setEndGame(false);
    setAlert({});
    assignWord();
    removeConfetti();
  }
  return (
    <>
      {endGame && win && startConfetti()}
      { endGame &&
        <div className="grid place-content-center ">
            <button onClick={()=> resetGame() } className="bg-yellow-400 rounded-xl font-bold text-gray-900 mt-12 p-3">Jugar de Nuevo</button>
        </div>
      }
    </>
  )
}

export default EndGameAlert