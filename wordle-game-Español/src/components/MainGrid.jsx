import { useEffect } from 'react'
import Grid from './Grid'
import Previous from './Previous'
import Actual from './Actual'
import Spinner from './Spinner'
import useMain from '../hooks/useMain'
import Alert from './Alert'


const MainGrid = () => {

  const {loading, alert, attempt, maxAttempt,assignWord} = useMain()

  useEffect(() => {
    
    if(!loading){
      assignWord()
    }
  }, [loading])
  
  
  return (
    <>
      {
        alert.message ? <Alert/> : ''
      }

      {
        loading ? 
        <>
          <Spinner/>
        </>
        :
        <>
          <div className='px-4'>
            <Previous/>
            {(attempt<maxAttempt) ? <Actual/> : ''}
            <Grid/>
          </div>
        </>
      }
    </>
    
  )

}

export default MainGrid