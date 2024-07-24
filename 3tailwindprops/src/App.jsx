import React, { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
const [count,setcount]=useState(0)
let myobj = {
  username:"viraj",
  age:21
}
  return (
    <>
      <h1 className='bg-blue-500 text-white p-4 rounded-xl'>Tailwind&props</h1>
      <Card username="Pookie" btnText="Visit Me"/>
      <Card username="Cutie" btnText="Buy Me" />
    </>
  )
}
export default App
