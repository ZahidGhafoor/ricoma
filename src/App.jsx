import React from 'react'
import NavBar from './components/templates/NavBar'

import "./App.css"
import Header from './pages/Home/Header/Header'
import Cards from './pages/Cards/Cards'
import Footer from './pages/Footer/Footer'

const App = () => {
  return (
    <>
   <NavBar/>
   <Header/>
   <Cards/>
   <Footer/>
    </>

  )
}

export default App