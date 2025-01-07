import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Robot from './components/Robot/Robot'
import Catalog from './components/Catalog/Catalog'

const App = () => {
  return (
<>
<Header/>

<Routes>
<Route path='/' element ={<Home/>}/>

</Routes>
<Robot/>
<Catalog/>
</>
  )
}

export default App