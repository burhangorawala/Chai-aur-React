import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {

  const [count, setCount] = useState(0)

  const myObj = {
    name: 'burhan'
  }
  
  let myArr = [1,2,3,4,5,6,7]

  return (
    <>
          <h1>Tailwind test</h1>
          <Card username= "chaiaurReact" btnText="click me" />
          <br />
          <Card username="burhan"  />
    </>
  )
}

export default App
