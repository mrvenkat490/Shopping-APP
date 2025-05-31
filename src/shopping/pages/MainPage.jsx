import React, {useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Collect from '../components/Collect'
import {Gents, Ladies} from '../data'
import WomanCollect from '../components/WomanCollect'

const MainPage = () => {

  const[gentsFashion,setGentsFashion] = useState(Gents)
  const[ladiesFashion, setLadiesFashion] = useState(Ladies)
  console.log(Gents,Ladies);

  return (
    <div>
      <Header />
      <Banner />
      <Collect gentsFashion={gentsFashion}/>
      <WomanCollect ladiesFashion ={ladiesFashion}/>
      <Footer />
    </div>
  )
}

export default MainPage
