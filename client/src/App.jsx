import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Singin from './Pages/Singin'
import Signup from './Pages/Signup'
import Dashboard from './Pages/Dashboard'
import Projects from './Pages/Projects'
import Header from './components/Header'
import FooterCom from './components/Footer'
const App = () => {
  return (
    <BrowserRouter >
    <Header/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/sign-in" element = {<Singin/>}/>
        <Route path = "/sign-up" element = {<Signup/>}/>
        <Route path = "/dashboard" element = {<Dashboard/>}/>
        <Route path = "/projects" element = {<Projects/>}/>

      </Routes>
      <FooterCom/>
    </BrowserRouter>
  )
}

export default App
