import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setcounter] = useState(92)  // basic hook 

  //let counter = 92
 
  const addvalue = () =>{
    //console.log("value added", Math.random())
    console.log("clicked", counter);
    counter = counter + 1
    setcounter(counter)
  }
  const removevalue = () =>{
    console.log("clicked", counter);
    setcounter(counter)
    counter = counter - 1
  }

      return (
    <>
    <h1>Click Counter </h1>
    <h2>counter value: {counter}</h2>
    <button
    onClick={addvalue}
    >add value{counter}</button>
    <br />
    <button
    onClick={removevalue}
    >Remove value{counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
