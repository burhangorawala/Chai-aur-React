import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [color, setColor] = useState("olive")

 

  return (
    <>
      <div className=' w-screen h-screen py-4 px-10 '
        style={{backgroundColor: color}}
      >
        
          <div className='justify-between flex bg-white py-2 px-10 rounded-3xl'>
                <button className='bg-red-400 text-white rounded-2xl p-2 '
                onClick={()=>setColor("Red")}>
                  Red
                </button>
                <button className='bg-blue-400 text-white rounded-2xl p-2 '
                onClick={()=>setColor("Blue")}>
                  Blue
                </button>
                <button className='bg-green-400 text-white rounded-2xl p-2 '
                onClick={()=>setColor("Green")}>
                  Green
                </button>
                
          </div>
      </div>
    </>
  )
}

export default App
