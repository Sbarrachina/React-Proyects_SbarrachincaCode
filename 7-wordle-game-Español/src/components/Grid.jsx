import Letter from "./Letter"
import useMain from "../hooks/useMain";
import { v4 as uuidv4 } from 'uuid';

const grid = () => {

  const {darkMode, attempt, maxAttempt} = useMain()

  let row = [];
  for (let i = 1; i <= 5; i++) {
    row.push(<Letter key={uuidv4()} darkMode={darkMode} letter =''/>)
  }

  let grid=[]
  for (let i = 1; i < maxAttempt-attempt; i++) {
    grid.push(row);    
  }

  return (
    <div className="mt-4 max-w-md mx-auto grid grid-cols-5 gap-3">
      { grid }
    </div>
  )
}

export default grid