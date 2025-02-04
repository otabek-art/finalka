import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './components/admin/Admin'
import Footer from './components/Footer/Footer'
import Gamess from './pages/Gamess'
import GameProfile from './components/GameProfile/GameProfile'
import Registration from './components/Registration/Registration'
import Basket from './components/Basket/Basket'
import About from './pages/About'

const App = () => {
  return (
<>
<Header/>

<Routes>
<Route path='/' element ={<Home/>}/>
<Route path='/about' element ={<About/>}/>
<Route path='/contact' element ={<Home/>}/>

<Route path='/games' element ={<Gamess/>}/>
<Route path="/GameProfile/:id" element={<GameProfile />} />
<Route path='/Registration' element ={<Registration/>}/>
<Route path='/Basket' element ={<Basket/>} />
<Route path='/admin' element = {<Admin/>} />

</Routes>

<Footer/>


</>
  )
}

export default App