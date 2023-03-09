import Letter from "./Letter"
import useMain from "../hooks/useMain"
import { v4 as uuidv4 } from 'uuid';

const Actual = () => {

  const {attemptWord, darkMode} = useMain()

  return (
    <div className="max-w-md mx-auto grid grid-cols-5 gap-3 ">
        { attemptWord.map(letter => {
            return <Letter key={uuidv4()} darkMode={darkMode} letter ={letter} actual={true}/>
          })
        }
    </div>
  )
}

export default Actual