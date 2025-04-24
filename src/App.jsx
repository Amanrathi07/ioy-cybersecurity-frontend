import React from 'react'
import Sidebar from './component/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './component/Dashboard'
import Protection from './component/Protection'
import Privacy from './component/Privacy'
import Erroe404 from './component/Erroe404'
import AddRule from './component/AddRule'

function Home() {
  return (
    <div className='w-screen'>

    <Routes>
      <Route path="/" element={<Sidebar/>}>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/protection" element={<Protection/>}/>
        <Route path='/AddRule' element={<AddRule/>} />
        <Route path="/privacy" element={<Privacy/>}/>
      </Route>
      <Route path='*' element={<Erroe404/>} />
    </Routes>
    </div>
  )
}

export default Home