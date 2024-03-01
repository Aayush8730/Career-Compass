import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>} />
        <Route element={<PrivateRoute/>}>
        <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App