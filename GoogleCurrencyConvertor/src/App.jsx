import { useEffect, useState } from 'react'
import CurrencyInput from './CurrencyInput'
import './App.css'

const API_KEY = "c2430ff53ea7849e76f1c7dbe967316d";
const CURRENCY_API = `https://apilayer.com/fixer.latest?base=USD&apikey=${API_KEY}`;
function App() {
  const [currencyRates, setcurrencyRates] = useState([])

  useEffect(()=>{

  },[])

  return (
    <>
     <h1> React Currency Convertor </h1>
     <CurrencyInput amount={"1"} currencies={["inr","usd"]} />
     <CurrencyInput amount = {"1"} currencies={["inr","usd"]} />
    </>
  )
}

export default App;
