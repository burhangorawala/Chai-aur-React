import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addOne = () =>{
    setCount(count+1)
  }

  const subOne = () =>{
      if(count > 0) setCount(count-1)
  }
  return (
    <>
      <div>
        The Count is : {count}
      
      </div>
      <button 
        onClick={addOne}
        >Inc. by 1</button>
        <br />
        <button 
        onClick={subOne}
        >Dec. by 1</button>
    </>
  )
}

export default App
