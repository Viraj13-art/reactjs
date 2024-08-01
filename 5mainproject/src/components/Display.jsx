import React from 'react'
import {Route, Router} from 'react-router-dom'
import DisplayHome from './DisplayHome'

const Display = () => {
  return (
    <div className='w-[100%] m-2 px-6 rounded bg-[#121212] text-white overflow-auto lg:w-[75&] lg:ml-0'>
     <Router>
    <Route path='/' element={<DisplayHome/>}>
    </Route>
     </Router>
    </div>
  )
}

export default Display
