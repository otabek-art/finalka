import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './components/admin/Admin'

const App = () => {
  return (
<>
<Header/>

<Routes>
<Route path='/' element ={<Home/>}/>
<Route path='/about' element ={<Home/>}/>
<Route path='/contact' element ={<Home/>}/>

<Route path='/' element ={<Home/>}/>
<Route path='/' element ={<Home/>}/>
<Route path='/admin' element = {<Admin/>} />

</Routes>


</>
  )
}

export default App