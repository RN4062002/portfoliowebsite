import react from 'react';
import Home from './components/Home'
import './App.css'
import LatestWorkSection from './components/LatestWork';
import ServicesSection from './components/Services';
import Contact from './components/Contact';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Home/>

      <LatestWorkSection />
      <br/>
      <ServicesSection />
    </>
  )
}

export default App
