import useMain from "../hooks/useMain";
import Letter from "./Letter";
import { v4 as uuidv4 } from 'uuid';

const Previous = () => {

  const {previousAttempts,alert} = useMain()

  let row = []
  let grid=[]

  previousAttempts.forEach(previousWord => {

    previousWord.map( letter=>{
      row.push(<Letter key={uuidv4()} letter={letter.letter} color={letter.color}/>)
    })

    grid.push(row)
    row = []
  });

  return (
    <>
      <div className={`mb-4 max-w-md mx-auto grid grid-cols-5 gap-3 ${alert.message ? '':'mt-10'}`}>
        { grid }
        {/* {console.log(previousAttempts)} */}
      </div>
    </>
  )
}

export default Previous