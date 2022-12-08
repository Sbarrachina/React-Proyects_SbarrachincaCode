import {useState, useEffect, createContext} from 'react';
import accents from 'remove-accents'
import darkModeFn from '../helpers/darkMode';

const MainContext = createContext();

const MainProvider = ({children})=>{

  
  const [darkMode,setDarkMode] = useState(false);
  const [keyDown,setKeyDown] = useState(false);
  const [key,setKey] = useState('');
  const [attemptWord,setAttemptWord] = useState(['','','','','']);
  const [loading,setLoading] = useState(true);
  const [attempt, setAttempt] = useState(0);
  const [alert, setAlert] = useState({});
  const [win, setWin] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [previousAttempts, setPreviousAttempts ] = useState([]);
  const [word, setWord] = useState([]);
  const [maxAttempt, setMaxAttempt] = useState(6);
  const [dictionary, setDictionary] = useState([]);
  
  const [showHelp, setShowHelp] = useState(false)
  useEffect(() => {

    async function getWord(){

      if (window.matchMedia ) {
        // dark mode
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
          setDarkMode(true)
          darkModeFn(!darkMode);
        }
      }

      try {
        const res = await fetch('../dictionary.json')
        const data = await res.json();
        
        setDictionary([...data]);
        setLoading(false)

      } catch (error) {
        console.log(error)
      }
    }
    getWord();

  }, [])

  function assignWord() {
    let tempWord = dictionary[random(0,5119)]
    tempWord = accents.remove(tempWord)
    setWord(tempWord.split(''));
  }
  
  function testWord(attempt) {
    console.log(JSON.stringify(attemptWord) , JSON.stringify(word));
    if(JSON.stringify(attemptWord) === JSON.stringify(word)){
      setWin(true)
      setEndGame(true)
      setAlert({message:`Felicidades!, has adivinado la palabra en ${attempt+1} intentos`,type:'success',temporal: false});
    }
    if(attempt+1 === maxAttempt && JSON.stringify(attemptWord) !== JSON.stringify(word)){
      setEndGame(true)
      setAlert({message:`Se han acabado tus intentos, suerte la proximas vez, la palabra correcta era: ${word.join('').toUpperCase()}`,type:'error',temporal: false});
    }
  } 

  function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  return(
    <MainContext.Provider value={
      { keyDown, setKeyDown,
        attemptWord, setAttemptWord,
        darkMode, setDarkMode,
        loading, setLoading,
        attempt, setAttempt,
        previousAttempts, setPreviousAttempts,
        alert, setAlert,
        word,
        win,setWin,
        endGame, setEndGame,
        key, setKey,
        testWord, maxAttempt,
        assignWord,
        showHelp, setShowHelp,
        dictionary
      }}>

      {children}

    </MainContext.Provider>
  )
}


export{ MainProvider }

export default MainContext
