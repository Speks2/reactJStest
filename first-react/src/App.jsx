import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import {Navbar} from './components/Navbar/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Header/>
    <Main/>
    <Footer/>
    </>
    
  )
  }
 
export default App
