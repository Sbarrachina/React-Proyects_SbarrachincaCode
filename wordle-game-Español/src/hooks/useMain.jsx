import {useContext} from 'react'
import MainContext from '../context/MainProvider'


function useMain() {
    
    return useContext(MainContext)
}


export default useMain