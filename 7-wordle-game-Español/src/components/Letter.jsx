import useMain from "../hooks/useMain"

const Letter = ({letter, actual, color}) => {

	const {darkMode} = useMain()
  return (
		<>
				<div className={`${ darkMode ? ' text-gray-200' : ''}  ${(darkMode && !color)? 'bg-black': ''} ${(!darkMode && !color)? 'bg-gray-400': ''} bg-${color}-500 ${ actual ? 'border-solid border-yellow-400 border-2' : ''} h-11 p-4 rounded-md  flex justify-center items-center uppercase text-4xl font-bold`}>{letter}</div>
		</>
  )
}

export default Letter