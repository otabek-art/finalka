import React from 'react'
import Section from '../components/Section/Section'
import Robot from '../components/Robot/Robot'
import Catalog from '../components/Catalog/Catalog'
import Streamer from '../components/Streamer/Streamer'
import Reviews from '../components/Revievs/Revievs'
import BestGame from '../components/BestGame/BestGame'

const Home = () => {
  return (
<>
<Section/>
<Robot/>
<Catalog/>
<BestGame/>
<Reviews/>
<Streamer/>
</>
  )
}

export default Home